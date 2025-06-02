#!/usr/bin/env python3
"""
TARS-AI Bill of Materials Excel Generator

This script reads the product links from lib/productLinks.ts and the BoM structure 
from pages/build/bom.mdx to generate an Excel file with the complete Bill of Materials
for all available countries.

Usage:
    python scripts/generate_bom_excel.py [--output bom.xlsx]
"""

import re
import json
import argparse
import pandas as pd
from pathlib import Path
from typing import Dict, List, Tuple, Optional, Set

class BOMGenerator:
    def __init__(self):
        self.script_dir = Path(__file__).parent
        self.repo_root = self.script_dir.parent
        self.product_links = {}
        self.available_countries = set()
        
    def parse_product_links(self) -> Dict:
        """Parse the TypeScript productLinks file to extract product data."""
        product_links_file = self.repo_root / "lib" / "productLinks.ts"
        
        if not product_links_file.exists():
            raise FileNotFoundError(f"Product links file not found: {product_links_file}")
            
        with open(product_links_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract the productLinks object
        pattern = r'export const productLinks: Record<string, ProductLink> = \{(.*?)\};'
        match = re.search(pattern, content, re.DOTALL)
        
        if not match:
            raise ValueError("Could not find productLinks object in file")
        
        products_content = match.group(1)
        
        # Parse each product entry using a more robust approach
        products = {}
        
        # Split by product entries - look for "product-id": {
        product_entries = re.split(r'(?=\s*"[^"]+": \{)', products_content)
        
        for entry in product_entries:
            if not entry.strip():
                continue
                
            # Extract the product ID from the start of the entry
            product_id_match = re.match(r'\s*"([^"]+)":\s*\{', entry)
            if not product_id_match:
                continue
                
            product_id = product_id_match.group(1)
            
            # Extract product properties using more specific patterns
            id_match = re.search(r'id:\s*"([^"]+)"', entry)
            name_match = re.search(r'name:\s*"([^"]+)"', entry)
            default_link_match = re.search(r'defaultLink:\s*"([^"]+)"', entry)
            
            # Extract country links more carefully
            country_links = {}
            country_links_match = re.search(r'countryLinks:\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}', entry, re.DOTALL)
            
            if country_links_match:
                country_content = country_links_match.group(1)
                # Find all country-link pairs, handling multiline URLs
                country_pattern = r'"([^"]+)":\s*"([^"]+(?:\?[^"]*)?)"'
                for country_match in re.finditer(country_pattern, country_content, re.DOTALL):
                    country_code = country_match.group(1)
                    url = country_match.group(2)
                    country_links[country_code] = url
                    # Track all available countries
                    self.available_countries.add(country_code)
            
            if id_match and name_match:
                products[product_id] = {
                    'id': id_match.group(1),
                    'name': name_match.group(1),
                    'countryLinks': country_links,
                    'defaultLink': default_link_match.group(1) if default_link_match else ""
                }
        
        return products
    
    def parse_bom_mdx(self) -> List[Dict]:
        """Parse the MDX BoM file to extract the table structure."""
        bom_file = self.repo_root / "pages" / "build" / "bom.mdx"
        
        if not bom_file.exists():
            raise FileNotFoundError(f"BoM file not found: {bom_file}")
            
        with open(bom_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract table rows between <tbody> tags
        tbody_pattern = r'<tbody>(.*?)</tbody>'
        tbody_match = re.search(tbody_pattern, content, re.DOTALL)
        
        if not tbody_match:
            raise ValueError("Could not find table body in BoM file")
        
        tbody_content = tbody_match.group(1)
        
        # Parse table rows
        bom_items = []
        current_category = ""
        
        # Split by <Tr> tags and process each row
        rows = re.split(r'<Tr[^>]*>', tbody_content)[1:]  # Skip first empty split
        
        for row in rows:
            if '</Tr>' not in row:
                continue
                
            # Extract row content before </Tr>
            row_content = row.split('</Tr>')[0]
            
            # Extract <Td> contents
            td_pattern = r'<Td[^>]*>(.*?)</Td>'
            tds = re.findall(td_pattern, row_content, re.DOTALL)
            
            if len(tds) >= 4:  # Need at least 4 columns
                # Check if this row has a rowSpan (new category)
                if 'rowSpan' in row_content:
                    # Extract category from first <Td>
                    category_match = re.search(r'<strong>(.*?)</strong>', tds[0])
                    if category_match:
                        current_category = category_match.group(1)
                    
                    # The component info starts from index 1
                    component = self._clean_html(tds[1])
                    description = self._clean_html(tds[2])
                    quantity = self._clean_html(tds[3])
                    link_content = tds[4] if len(tds) > 4 else ""
                else:
                    # No rowSpan, component info starts from index 0
                    component = self._clean_html(tds[0])
                    description = self._clean_html(tds[1])
                    quantity = self._clean_html(tds[2])
                    link_content = tds[3] if len(tds) > 3 else ""
                
                # Extract product ID from CountryLink
                product_id = None
                if 'CountryLink' in link_content:
                    product_id_match = re.search(r'productId="([^"]+)"', link_content)
                    if product_id_match:
                        product_id = product_id_match.group(1)
                
                bom_items.append({
                    'category': current_category,
                    'component': component,
                    'description': description,
                    'quantity': quantity,
                    'product_id': product_id
                })
        
        return bom_items
    
    def _clean_html(self, text: str) -> str:
        """Remove HTML tags and clean up text."""
        # Remove HTML tags
        text = re.sub(r'<[^>]+>', '', text)
        # Clean up whitespace
        text = ' '.join(text.split())
        return text.strip()
    
    def get_product_link(self, product_id: str, country_code: str) -> str:
        """Get the appropriate link for a product based on country."""
        if not product_id or product_id not in self.product_links:
            return ""
        
        product = self.product_links[product_id]
        
        # Try to get country-specific link
        if country_code in product['countryLinks']:
            return product['countryLinks'][country_code]
        
        # Fall back to default link
        return product.get('defaultLink', '')
    
    def generate_country_data(self, bom_items: List[Dict], country_code: str) -> List[Dict]:
        """Generate BoM data for a specific country."""
        excel_data = []
        for item in bom_items:
            link = self.get_product_link(item['product_id'], country_code) if item['product_id'] else ""
            
            excel_data.append({
                'Category': item['category'],
                'Component': item['component'],
                'Description': item['description'],
                'Quantity': item['quantity'],
                'Link': link
            })
        
        return excel_data
    
    def get_country_name(self, country_code: str) -> str:
        """Get a friendly country name for the sheet name."""
        country_names = {
            'US': 'United States',
            'CA': 'Canada', 
            'AU': 'Australia',
            'PL': 'Poland',
            'GB': 'United Kingdom',
            'DE': 'Germany',
            'FR': 'France',
            'JP': 'Japan',
            'CN': 'China',
            'BR': 'Brazil',
            'IN': 'India'
        }
        return country_names.get(country_code, country_code)
    
    def generate_excel(self, output_file: str = "bom.xlsx"):
        """Generate the Excel file with BoM data for all countries."""
        print("Parsing product links...")
        self.product_links = self.parse_product_links()
        print(f"Found {len(self.product_links)} products")
        print(f"Available countries: {sorted(self.available_countries)}")
        
        print("Parsing BoM structure...")
        bom_items = self.parse_bom_mdx()
        print(f"Found {len(bom_items)} BoM items")
        
        # Ensure output directory exists
        output_path = Path(output_file)
        output_path.parent.mkdir(parents=True, exist_ok=True)
        
        # Create Excel file with multiple sheets
        with pd.ExcelWriter(output_path, engine='openpyxl') as writer:
            # Sort countries to have a consistent order
            sorted_countries = sorted(self.available_countries)
            
            for country_code in sorted_countries:
                print(f"Generating sheet for {country_code}...")
                
                # Generate data for this country
                country_data = self.generate_country_data(bom_items, country_code)
                
                # Count items with links
                items_with_links = len([x for x in country_data if x['Link']])
                print(f"  {country_code}: {items_with_links}/{len(country_data)} items have links")
                
                # Create DataFrame
                df = pd.DataFrame(country_data)
                
                # Create sheet name (Excel sheet names have limitations)
                sheet_name = f"{country_code} - {self.get_country_name(country_code)}"
                # Truncate if too long (Excel limit is 31 characters)
                if len(sheet_name) > 31:
                    sheet_name = f"{country_code} - {self.get_country_name(country_code)[:27-len(country_code)]}"
                
                # Write to Excel sheet
                df.to_excel(writer, sheet_name=sheet_name, index=False)
                
                # Get the worksheet for formatting
                worksheet = writer.sheets[sheet_name]
                
                # Adjust column widths
                column_widths = {
                    'A': 20,  # Category
                    'B': 30,  # Component
                    'C': 50,  # Description
                    'D': 10,  # Quantity
                    'E': 80   # Link
                }
                
                for col, width in column_widths.items():
                    worksheet.column_dimensions[col].width = width
                
                # Make links clickable
                from openpyxl.styles import Font
                link_font = Font(color="0000FF", underline="single")
                
                for row in range(2, len(df) + 2):  # Start from row 2 (after header)
                    cell = worksheet[f'E{row}']
                    if cell.value:
                        cell.hyperlink = cell.value
                        cell.font = link_font
        
        print(f"\n✅ Excel file generated: {output_path}")
        print(f"📊 Generated {len(sorted_countries)} country sheets")
        print(f"📋 Each sheet contains {len(bom_items)} BoM items")
        
        # Summary of coverage
        print(f"\n📈 Link Coverage Summary:")
        for country_code in sorted_countries:
            country_data = self.generate_country_data(bom_items, country_code)
            items_with_links = len([x for x in country_data if x['Link']])
            coverage_pct = (items_with_links / len(country_data)) * 100
            print(f"  {country_code}: {items_with_links}/{len(country_data)} items ({coverage_pct:.1f}%)")
        
        return output_path

def main():
    parser = argparse.ArgumentParser(description='Generate TARS-AI Bill of Materials Excel file for all countries')
    parser.add_argument('--output', default='bom.xlsx', help='Output Excel file path (default: bom.xlsx)')
    
    args = parser.parse_args()
    
    try:
        generator = BOMGenerator()
        output_path = generator.generate_excel(args.output)
        print(f"\n🎉 Successfully generated multi-country Bill of Materials: {output_path}")
        
    except Exception as e:
        print(f"❌ Error generating BoM: {str(e)}")
        return 1
    
    return 0

if __name__ == "__main__":
    exit(main()) 
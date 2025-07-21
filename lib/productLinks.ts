// Define product links by product ID and country code
export interface ProductLink {
  id: string;
  name: string;  // For reference/admin purposes
  countryLinks: Record<string, string>;
  defaultLink: string;  // Fallback when country-specific link isn't available
}

export const productLinks: Record<string, ProductLink> = {
  // 3D Printing
  "bambu-lab-printer": {
    id: "bambu-lab-printer",
    name: "Bambu Lab Printer",
    countryLinks: {
      "US": "https://us.store.bambulab.com/collections/3d-printer",
      "CA": "https://ca.store.bambulab.com/collections/3d-printer",
      "AU": "https://au.store.bambulab.com/collections/3d-printer",
      "PL": "https://eu.store.bambulab.com/collections/3d-printer"
    },
    defaultLink: "https://us.store.bambulab.com/collections/3d-printer"
  },
  "petg-filament": {
    id: "petg-filament",
    name: "PETG Filament (Bambu)",
    countryLinks: {
      "US": "https://us.store.bambulab.com/products/petg-hf",
      "CA": "https://ca.store.bambulab.com/products/petg-hf",
      "AU": "https://au.store.bambulab.com/products/petg-hf?id=44822190096547",
      "PL": "https://eu.store.bambulab.com/en-pl/products/petg-hf"
    },
    defaultLink: "https://us.store.bambulab.com/products/petg-hf"
  },
  "pla-filament": {
    id: "pla-filament",
    name: "PLA Filament (Optional)",
    countryLinks: {
      "US": "https://us.store.bambulab.com/products/pla-basic-filament?skr=yes",
      "CA": "https://ca.store.bambulab.com/products/pla-basic-filament?skr=yes",
      "AU": "https://au.store.bambulab.com/products/pla-matte?id=42647402479779",
      "PL": "https://eu.store.bambulab.com/en-pl/products/pla-basic-filament"
    },
    defaultLink: "https://us.store.bambulab.com/products/pla-basic-filament?skr=yes"
  },
  "tpu-filament": {
    id: "tpu-filament",
    name: "TPU Filament (Bambu)",
    countryLinks: {
      "US": "https://us.store.bambulab.com/products/tpu-for-ams",
      "CA": "https://ca.store.bambulab.com/products/tpu-for-ams",
      "AU": "https://au.store.bambulab.com/products/tpu-85a-tpu-90a?id=573760925208563742",
      "PL": "https://eu.store.bambulab.com/en-pl/products/tpu-for-ams"
    },
    defaultLink: "https://us.store.bambulab.com/products/tpu-for-ams"
  },
  // Core Components
  "raspberry-pi-": {
    id: "raspberry-pi-5",
    name: "Raspberry Pi 5 (4GB+ RAM)",
    countryLinks: {
      "US": "https://www.amazon.com/Raspberry-Pi-Quad-core-Cortex-A76-Processor/dp/B0CTQ3BQLS/",
      "CA": "https://a.co/d/9CoZ6or",
      "AU": "https://www.amazon.com.au/Raspberry-Pi-LPDDR4-Quad-Core-Cortex-A76/dp/B0CK2FCG1K/ref=sr_1_1?crid=TSIKKALSWN7F&dib=eyJ2IjoiMSJ9.EIRWMNAsT_JPS2JI4yVop9F4vMGlJ3WuxWwfjxlQGu8icRG7WnUfqwIutmsiAGlqMvDLshfzzSJXYNX5_DemeoydNpxPXfxtejBhWqn7MCoac9diiK7Cr6-EnxI4XFXbLhnKaSyFJ7Jyd6YMdVirjBe-HQdFKdz0LoV-4dquOzyRGry1Kw--piJeNk9KukUDlzIoOHN6sHTlnFKYg1uYPXXkk6PfXJHRS9y_WRNXNQvs50YjG7JSvd69ZqcgLqyiep83Jnaj8puH8Gf1HM113mlNwTnuAtuLa5aZBQmuGi42HGe2GtdksnL5-9leiHyu9AI321zeR57PfQlIUEX48_u8kaI_DwYIrNDdN9jDukcR7Z6ey1UqNKmejEWkAkOY9mLSJsluTx_S58G2AztOByhcpSnpI8S-N93UC9L_IZlSRn3OtnIGPrbc7_5B7_5O.FSymT8KHlsjtEdkGwbP6xtTwtA1Dd2veae6jjafYky4&dib_tag=se&keywords=raspberry+pi+5&qid=1743303252&refinements=p_n_prime_domestic%3A6845356051&rnid=6963563051&sprefix=rasberry+pi+%2Caps%2C253&sr=8-1",
      "PL": "https://botland.com.pl/moduly-i-zestawy-raspberry-pi-5/23904-raspberry-pi-5-4gb-5056561803319.html"
    },
    defaultLink: "https://www.amazon.com/Raspberry-Pi-Quad-core-Cortex-A76-Processor/dp/B0CTQ3BQLS/"
  },
  "pi-cooler": {
    id: "pi-cooler",
    name: "Raspberry Pi 5 Active Cooler",
    countryLinks: {
      "US": "https://a.co/d/67AzMT5"
    },
    defaultLink: "https://a.co/d/67AzMT5"
  },
  "5-inch-screen": {
    id: "5-inch-screen",
    name: "5 Inch Screen",
    countryLinks: {
      "US": "https://a.co/d/gGMHsmu",
    },
    defaultLink: "https://a.co/d/gGMHsmu"
  },
  "servo-driver": {
    id: "servo-driver",
    name: "PCA9685 16-Channel PWM/Servo Driver",
    countryLinks: {
      "US": "https://www.amazon.com/gp/product/B00EIB0U7A/",
      "CA": "https://a.co/d/bMsC0lm",
      "PL": "https://allegro.pl/oferta/modul-sterownika-pwm-pca9685-i2c-16-kanal-12-bit-15028398866?offerId=15028398866&inventoryUnitId=dgKk4snwZqwIDgHLAN0asA&adGroupId=NDc2M2EyYTgtMzllYy00Yzg0LThiODItZjg3Njk5ZTMyNjhjAA&campaignId=OWZmMzUzMmUtN2YwYS00ZmU3LWE2YWQtNTY4NzM3MGQ0MWRjAA&clientId=NDU3MzI0MjgA&sig=9f29a6976057e8111c9428f1c9a1b2a1&utm_feed=aa34192d-eee2-4419-9a9a-de66b9dfae24&utm_content=supercena&utm_source=google&utm_medium=ads&gad_source=1&gclid=CjwKCAiArKW-BhAzEiwAZhWsIEiar9O8zairZtEva_XHMscS4XJ0XhR7OCxS1CvIZ9Mf7bbvwiH9YxoCS8sQAvD_BwE"
    },
    defaultLink: "https://www.amazon.com/gp/product/B00EIB0U7A/"
  },
  // Power Components
  "12v-battery": {
    id: "12v-battery",
    name: "12V Battery",
    countryLinks: {
      "US": "https://a.co/d/jiIPfNq",
    },
    defaultLink: "https://a.co/d/jiIPfNq"
  },
  "buck-converter-servos": {
    id: "buck-converter-servos",
    name: "LM2596 DC 5A Adjustable Buck Converter",
    countryLinks: {
      "US": "https://a.co/d/dQAB650",
    },
    defaultLink: "https://a.co/d/dQAB650"
  },
  "buck-converter-pi": {
    id: "buck-converter-pi",
    name: "Buck Converter for Raspberry Pi",
    countryLinks: {
      "US": "https://www.amazon.com/gp/product/B07X5H4M42/",
      "CA": "https://a.co/d/abI7Dbe",
      "PL": "https://abc-rc.pl/pl/products/przetwornica-step-down-9-24v-na-5v-usb-2-5a-9301.html?srsltid=AfmBOophZzy7GgBdlLvmoRpk337Yg8JSVdaD4V1wLi3ifpKa6uQM0daB"
    },
    defaultLink: "https://www.amazon.com/gp/product/B07X5H4M42/"
  },
  "rocker-switch": {
    id: "rocker-switch",
    name: "Micro Rocker Switch",
    countryLinks: {
      "US": "https://a.co/d/iw8nmbf",
    },
    defaultLink: "https://a.co/d/iw8nmbf"
  },
  "usb-c-breakout": {
    id: "usb-c-breakout",
    name: "USB C Male Breakout Board",
    countryLinks: {
      "US": "https://a.co/d/c7BW1bT",
    },
    defaultLink: "https://a.co/d/c7BW1bT"
  },
  "ina260-battery-sensor": {
    id: "ina260-battery-sensor",
    name: "INA260 Battery Sensor",
    countryLinks: {
      "US": "https://a.co/d/dCbYTlY",
    },
    defaultLink: "https://a.co/d/dCbYTlY"
  },
  "dupont-cables": {
    id: "dupont-cables",
    name: "20cm Dupont Cables (Male to Female)",
    countryLinks: {
      "US": "https://a.co/d/76Z8fev",
    },
    defaultLink: "https://a.co/d/76Z8fev"
  },
  "18-awg-wire-parallel": {
    id: "18-awg-wire-parallel",
    name: "18 Gauge 2 Conductor Parallel Wire",
    countryLinks: {
      "US": "https://a.co/d/aZW2UDi",
    },
    defaultLink: "https://a.co/d/cghGb3z"
  },
  // Servos
  "ldx-227-servos": {
    id: "ldx-227-servos",
    name: "Main servos for body and legs",
    countryLinks: {
      "US": "https://a.co/d/6Vvombc",
    },
    defaultLink: "https://a.co/d/6Vvombc"
  },
  "mg996r-servos": {
    id: "mg996r-servos",
    name: "Servos for the arms",
    countryLinks: {
      "US": "https://a.co/d/9pYf3Ke",
    },
    defaultLink: "https://a.co/d/9pYf3Ke"
  },
  "mg90s-servos": {
    id: "mg90s-servos",
    name: "Servos for the forearms and hands",
    countryLinks: {
      "US": "https://a.co/d/2ME6Dyk",
    },
    defaultLink: "https://a.co/d/2ME6Dyk"
  },
  "servo-cables": {
    id: "servo-cables",
    name: "12\" Servo Extension Cables (Male to Female, JR/Futaba)",
    countryLinks: {
      "US": "https://a.co/d/4O9tu2w",
    },
    defaultLink: "https://a.co/d/4O9tu2w"
  },
  // Audio System
  "wm8960-audio-hat": {
    id: "wm8960-audio-hat",
    name: "WM8960 Audio HAT",
    countryLinks: {
      "US": "https://a.co/d/98fzAf5",
    },
    defaultLink: "https://a.co/d/98fzAf5"
  },
  "speaker": {
    id: "speaker",
    name: "PH2.0-N 3W 4Ω Speaker",
    countryLinks: {
      "US": "https://a.co/d/4DsIUgf",
    },
    defaultLink: "https://a.co/d/4DsIUgf"
  },
  // Camera System
  "camera-module": {
    id: "camera-module",
    name: "OV5647 Camera Module",
    countryLinks: {
      "US": "https://a.co/d/50BbE8a",
      "CA": "https://a.co/d/654lEEN",
      "PL": "https://kamami.pl/en/cameras/1195269-arducam-5mp-ov5647-mini-camera-module-camera-module-with-5mp-ov5647-sensor-for-raspberry-pi-5906623497553.html"
    },
    defaultLink: "https://a.co/d/50BbE8a"
  },
  "camera-ribbon-cable": {
    id: "camera-ribbon-cable",
    name: "CSI Ribbon Cable, 22-to-15 Pin, 200mm",
    countryLinks: {
      "US": "https://a.co/d/9yLM4VJ",
    },
    defaultLink: "https://a.co/d/9yLM4VJ"
  },
  // Hardware
  "m3-screws-assorted": {
    id: "m3-screws-assorted",
    name: "M3 Flat Head Assorted Screws",
    countryLinks: {
      "US": "https://a.co/d/0nQwJKW",
    },
    defaultLink: "https://a.co/d/0nQwJKW"
  },
  "m2.5-screws-assorted": {
    id: "m2.5-screws-assorted",
    name: "M2.5 Flat Head Assorted Screws",
    countryLinks: {
      "US": "https://a.co/d/5KtMOV0",
    },
    defaultLink: "https://a.co/d/5KtMOV0"
  },
  "m2.5-heat-inserts": {
    id: "m2.5-heat-inserts",
    name: "M2.5 Heat Inserts",
    countryLinks: {
      "US": "https://a.co/d/3ZJZQhx",
    },
    defaultLink: "https://a.co/d/3ZJZQhx"
  },
  "magnet-8x3": {
    id: "magnet-8x3",
    name: "8x3mm Magnets",
    countryLinks: {
      "US": "https://a.co/d/ikQLtfm",
    },
    defaultLink: "https://a.co/d/ikQLtfm"
  },
  "compression-springs": {
    id: "compression-springs",
    name: "Compression Spring",
    countryLinks: {
      "US": "https://a.co/d/78x72h2",
    },
    defaultLink: "https://a.co/d/78x72h2"
  },
  "m4-150mm-rod": {
    id: "m4-150mm-rod",
    name: "M4 x 150mm Threaded Rod",
    countryLinks: {
      "US": "https://a.co/d/9MS6PuU"
    },
    defaultLink: "https://a.co/d/9MS6PuU"
  },
  "m2-tapping-screws": {
    id: "m2-tapping-screws",
    name: "M2 Tapping Screws",
    countryLinks: {
      "US": "https://a.co/d/dm5dpgL"
    },
    defaultLink: "https://a.co/d/dm5dpgL"
  },
  "696zz-bearings": {
    id: "696zz-bearings",
    name: "696ZZ Bearings",
    countryLinks: {
      "US": "https://a.co/d/eE4wT3m",
    },
    defaultLink: "https://a.co/d/eE4wT3m"
  },
  "velcro-straps": {
    id: "velcro-straps",
    name: "6\" Velcro Straps",
    countryLinks: {
      "US": "https://a.co/d/iOyyajq"
    },
    defaultLink: "https://a.co/d/iOyyajq"
  },
  "stackable-header": {
    id: "stackable-header",
    name: "Extra Tall Female Stackable Header 2x20",
    countryLinks: {
      "US": "https://a.co/d/diQkJR2"
    },
    defaultLink: "https://a.co/d/diQkJR2"
  },
  "heat-shrink-tubing": {
    id: "heat-shrink-tubing",
    name: "Heat Shrink Tubing",
    countryLinks: {
      "US": "https://a.co/d/5H7lzoC"
    },
    defaultLink: "https://a.co/d/5H7lzoC"
  },
  // Hailo HAT Modifications
  "hailo-hat": {
    id: "hailo-hat",
    name: "26 TOPS Hailo HAT Module",
    countryLinks: {
      "US": "https://a.co/d/hIXcTnE"
    },
    defaultLink: "https://a.co/d/hIXcTnE"
  },
  "m2.5-40mm-screws": {
    id: "m2.5-40mm-screws",
    name: "M2.5 40mm Fastener Screws",
    countryLinks: {
      "US": "https://a.co/d/3DNMAdv"
    },
    defaultLink: "https://a.co/d/3DNMAdv"
  }
};

// Helper function to get countries with available links for a product
export function getAvailableCountries(productId: string): string[] {
  const product = productLinks[productId];
  if (!product) return [];
  return Object.keys(product.countryLinks);
}

// Helper function to check if a product has links for a specific country
export function hasCountryLink(productId: string, countryCode: string): boolean {
  const product = productLinks[productId];
  if (!product) return false;
  return !!product.countryLinks[countryCode];
} 

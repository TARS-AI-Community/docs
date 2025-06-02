// Define product links by product ID and country code
export interface ProductLink {
  id: string;
  name: string;  // For reference/admin purposes
  countryLinks: Record<string, string>;
  defaultLink: string;  // Fallback when country-specific link isn't available
}

export const productLinks: Record<string, ProductLink> = {
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
  "raspberry-pi-5": {
    id: "raspberry-pi-5",
    name: "Raspberry Pi 5",
    countryLinks: {
      "US": "https://www.amazon.com/Raspberry-Pi-Quad-core-Cortex-A76-Processor/dp/B0CTQ3BQLS/",
      "CA": "https://a.co/d/9CoZ6or",
      "AU": "https://www.amazon.com.au/Raspberry-Pi-LPDDR4-Quad-Core-Cortex-A76/dp/B0CK2FCG1K/ref=sr_1_1?crid=TSIKKALSWN7F&dib=eyJ2IjoiMSJ9.EIRWMNAsT_JPS2JI4yVop9F4vMGlJ3WuxWwfjxlQGu8icRG7WnUfqwIutmsiAGlqMvDLshfzzSJXYNX5_DemeoydNpxPXfxtejBhWqn7MCoac9diiK7Cr6-EnxI4XFXbLhnKaSyFJ7Jyd6YMdVirjBe-HQdFKdz0LoV-4dquOzyRGry1Kw--piJeNk9KukUDlzIoOHN6sHTlnFKYg1uYPXXkk6PfXJHRS9y_WRNXNQvs50YjG7JSvd69ZqcgLqyiep83Jnaj8puH8Gf1HM113mlNwTnuAtuLa5aZBQmuGi42HGe2GtdksnL5-9leiHyu9AI321zeR57PfQlIUEX48_u8kaI_DwYIrNDdN9jDukcR7Z6ey1UqNKmejEWkAkOY9mLSJsluTx_S58G2AztOByhcpSnpI8S-N93UC9L_IZlSRn3OtnIGPrbc7_5B7_5O.FSymT8KHlsjtEdkGwbP6xtTwtA1Dd2veae6jjafYky4&dib_tag=se&keywords=raspberry+pi+5&qid=1743303252&refinements=p_n_prime_domestic%3A6845356051&rnid=6963563051&sprefix=rasberry+pi+%2Caps%2C253&sr=8-1",
      "PL": "https://botland.com.pl/moduly-i-zestawy-raspberry-pi-5/23904-raspberry-pi-5-4gb-5056561803319.html"
    },
    defaultLink: "https://www.amazon.com/Raspberry-Pi-Quad-core-Cortex-A76-Processor/dp/B0CTQ3BQLS/"
  },
  "osoyoo-lcd": {
    id: "osoyoo-lcd",
    name: "OSOYOO 3.5\" LCD Display",
    countryLinks: {
      "US": "https://www.amazon.com/OSOYOO-3-5inch-Display-Protective-Raspberry/dp/B09CD9W6NQ/",
      "CA": "https://a.co/d/5NYHBQR",
      "AU": "https://www.amazon.com.au/UeeKKoo-Touch-Compatible-Raspberry-Display/dp/B0DSJ5S6LV/ref=sr_1_2?dib=eyJ2IjoiMSJ9.UmQMiR4iXgWb_Gp95FFD6ih2bZDaD1y-0jBzUGrKDdwhkf_gOx4qTLJ1GUrXLipMT2YZ20zrHKWp-r0tmtJFEMNzVLBgC5UjFs5lxV-fWrjpBK_Tc8ayiuCQ9f1iAB9bgglNvXxFuAizdnX4umx0v4AmbuXpgjUIKO4_KzQnKQRCvX6AfP08AiKJ5joVkIofEJJUAOOxxJZWrRiNAsFavq_wQIgelcF0UzOhUT_dlscH1MhAjtqkfIRPvD_poKcosOhtWcnxMbP3bVZSDg9QAegboY5unfgz7B7omZrczsM.QJmFvIHL6nQ3BRLrWWQAVtFw6EZeMH8f_B09JcksytU&dib_tag=se&keywords=3.5inch+Touch+Screen+LCD+Display+HDMI+Monitor+for+RPI&qid=1744529182&refinements=p_n_prime_domestic%3A6845356051&rnid=6963563051&sr=8-2",
      "PL": "https://botland.com.pl/wyswietlacze-raspberry-pi/4479-ekran-dotykowy-a-rezystancyjny-lcd-tft-35-320x480px-gpio-dla-raspberry-pi-4-3-2-b-zero-waveshare-9904-5904422371296.html"
    },
    defaultLink: "https://www.amazon.com/OSOYOO-3-5inch-Display-Protective-Raspberry/dp/B09CD9W6NQ/"
  },
  "servo-driver": {
    id: "servo-driver",
    name: "PCA9685 Servo Driver",
    countryLinks: {
      "US": "https://www.amazon.com/gp/product/B00EIB0U7A/",
      "CA": "https://a.co/d/bMsC0lm",
      "PL": "https://allegro.pl/oferta/modul-sterownika-pwm-pca9685-i2c-16-kanal-12-bit-15028398866?offerId=15028398866&inventoryUnitId=dgKk4snwZqwIDgHLAN0asA&adGroupId=NDc2M2EyYTgtMzllYy00Yzg0LThiODItZjg3Njk5ZTMyNjhjAA&campaignId=OWZmMzUzMmUtN2YwYS00ZmU3LWE2YWQtNTY4NzM3MGQ0MWRjAA&clientId=NDU3MzI0MjgA&sig=9f29a6976057e8111c9428f1c9a1b2a1&utm_feed=aa34192d-eee2-4419-9a9a-de66b9dfae24&utm_content=supercena&utm_source=google&utm_medium=ads&gad_source=1&gclid=CjwKCAiArKW-BhAzEiwAZhWsIEiar9O8zairZtEva_XHMscS4XJ0XhR7OCxS1CvIZ9Mf7bbvwiH9YxoCS8sQAvD_BwE"
    },
    defaultLink: "https://www.amazon.com/gp/product/B00EIB0U7A/"
  },
  "buck-converter-12v-6v": {
    id: "buck-converter-12v-6v",
    name: "12V to 6V Buck Converter",
    countryLinks: {
      "US": "https://www.amazon.com/gp/product/B07SGJSLDL/",
      "CA": "https://a.co/d/59a7i9D",
      "PL": "https://www.joom.com/pl/products/5cb3face6ecda8010164b347?currency=PLN&utm_productid=5cb3face6ecda8010164b347&utm_feed=web&utm_hash=54fe06bffd4b4f5bdcd0f7334bc4e1ef&variant_id=5cb3face6ecda8040164b349&gsAttrs=eyJyZWdpb24iOiJQTCIsICJzcGVjaWFsUHJpY2VVc2VkIjpmYWxzZX0g&exp_price=MjcuNiAg&utm_audienceid=advertising_web_gg_premium_2d&srsltid=AfmBOor7nv9ToSUG2Y88hOLQ7nn9NHBv_ASS7dhHeiPTEJ0IJHxx0KKPv7A"
    },
    defaultLink: "https://www.amazon.com/gp/product/B07SGJSLDL/"
  },
  "usb-buck-converter": {
    id: "usb-buck-converter",
    name: "USB Buck Converter",
    countryLinks: {
      "US": "https://www.amazon.com/gp/product/B07X5H4M42/",
      "CA": "https://a.co/d/abI7Dbe",
      "PL": "https://abc-rc.pl/pl/products/przetwornica-step-down-9-24v-na-5v-usb-2-5a-9301.html?srsltid=AfmBOophZzy7GgBdlLvmoRpk337Yg8JSVdaD4V1wLi3ifpKa6uQM0daB"
    },
    defaultLink: "https://www.amazon.com/gp/product/B07X5H4M42/"
  },
  "usb-buck-converter-alt": {
    id: "usb-buck-converter-alt",
    name: "USB Buck Converter (Alternative)",
    countryLinks: {
      "US": "https://www.amazon.com/dp/B087RHWTJW",
    },
    defaultLink: "https://www.amazon.com/dp/B087RHWTJW"
  },
  "lipo-battery": {
    id: "lipo-battery",
    name: "LiPo Battery",
    countryLinks: {
      "US": "https://www.amazon.com/gp/product/B0BYNSH6Q7/",
      "CA": "https://a.co/d/96gR1yJ",
      "PL": "https://allegro.pl/oferta/bateria-li-po-11-1v-3s-2200mah-44a-20c-redox-jakar-16588519628?utm_feed=aa34192d-eee2-4419-9a9a-de66b9dfae24&utm_source=google&utm_medium=cpc&utm_campaign=_elktrk_rtvagd_pla_pmax&ev_campaign_id=17966335829&gad_source=1&gclid=CjwKCAiArKW-BhAzEiwAZhWsIDDqZ__iZeTHcKwtkq-JlLK9KoPG1ab81VcrjS2A5JXH4BEya9sUgRoC7EEQAvD_BwE"
    },
    defaultLink: "https://www.amazon.com/gp/product/B0BYNSH6Q7/"
  },
  "wire-connectors": {
    id: "wire-connectors",
    name: "PCT-214 Wire Connectors",
    countryLinks: {
      "US": "https://www.amazon.com/smseace-Conductor-Connectors-Connection-Terminal/dp/B087PBHG9L/",
      "CA": "https://a.co/d/5MsLj3e"
    },
    defaultLink: "https://www.amazon.com/smseace-Conductor-Connectors-Connection-Terminal/dp/B087PBHG9L/"
  },
  "mg996r-servos": {
    id: "mg996r-servos",
    name: "MG996R Servos",
    countryLinks: {
      "US": "https://www.amazon.com/diymore-6-Pack-MG996R-Digital-Helicopter/dp/B0CGRP59HJ/",
      "CA": "https://a.co/d/99rqy0O",
      "PL": "https://pl.aliexpress.com/i/32951980789.html"
    },
    defaultLink: "https://www.amazon.com/diymore-6-Pack-MG996R-Digital-Helicopter/dp/B0CGRP59HJ/"
  },
  "mg996r-servos-alt": {
    id: "mg996r-servos-alt",
    name: "MG996R Servos (Alternative)",
    countryLinks: {
      "US": "https://www.amazon.com/gp/product/B0BMM1G74B/",
    },
    defaultLink: "https://www.amazon.com/gp/product/B0BMM1G74B/"
  },
  "sg90-micro-servos": {
    id: "sg90-micro-servos",
    name: "SG90 Micro Servos",
    countryLinks: {
      "US": "https://www.amazon.com/gp/product/B07L2SF3R4/",
      "CA": "https://a.co/d/2wvfbug",
      "PL": "https://allegro.pl/oferta/serwomechanizm-tower-pro-sg90-serwo-sg90-13374256076?offerId=13374256076&inventoryUnitId=Ut4PqWXWosZNVBEdWn_z7w&adGroupId=MjJkZGZlYWEtMTVlMC00MDQxLTg2OGYtYTg2MGE1MjI2YTc4AA&campaignId=NjYxYmUyM2MtNGVkOC00YjA2LThlZGQtZDhiMmExMTQ3MDE0AA&clientId=MTA5NTYwNDM3AA&sig=60e37083f8dbfc7f71b3f84f2ff5db6e&utm_feed=aa34192d-eee2-4419-9a9a-de66b9dfae24&utm_content=ps&utm_source=google&utm_medium=ads&gad_source=1&gclid=CjwKCAiArKW-BhAzEiwAZhWsIM2dkjXOdJJE-uis0v2Lz5b5yT1eZRKTcDYRGneRQk2vLASL7uHK5RoCkTgQAvD_BwE"
    },
    defaultLink: "https://www.amazon.com/gp/product/B07L2SF3R4/"
  },
  "bearings": {
    id: "bearings",
    name: "Bearings",
    countryLinks: {
      "US": "https://www.amazon.com/gp/product/B07FW26HD4/",
      "CA": "https://a.co/d/gEZuu3t",
      "AU": "https://www.amazon.com.au/696-2RS-Bearings-6x15x5mm-Pre-Lubricated-Shields/dp/B09JG1158D/ref=sr_1_1?dib=eyJ2IjoiMSJ9.McPEOZYKNlkEoxadpVp91a8O7_JPGYW_AsALE3-VO87ZAN6Vx4j7UZ8aFrXHvZ0zoHC81hwGrYWI0MUhKhkp_ZRMyjo0CtdNdEG_NHdh1AfgihhGA69E_Wu-Mq51BbMveQZ6VFt8kPptdYCEXKMpY6bFNHCWQ-zl5np0Tnhpi1liEZBW7kNvdGQHCKsqH-1ZmGy-1FmYQrSZPpyr_4x-fdOFe46QpidjDcZ2GSbIpprMdhqo4s0j9ypFIhlmRTD_wbP584X_W4au6u56U0Q9u9ZAcnMu4KcohevwKcwHdLk.QT_Wym6FJubJK-sW40xTtWSpt5VqEvJB-qaG5Jb374g&dib_tag=se&keywords=6mm%2Bx%2B15mm%2Bx%2B5mm%2BCarbon%2BSteel%2BBearings&qid=1744516399&refinements=p_n_prime_domestic%3A6845356051&rnid=6963563051&sr=8-1&th=1"
    },
    defaultLink: "https://www.amazon.com/gp/product/B07FW26HD4/"
  },
  "springs": {
    id: "springs",
    name: "Springs",
    countryLinks: {
      "US": "https://www.amazon.com/uxcell-Stainless-Compression-Spring-Capacity/dp/B09139BWH7",
      "CA": "https://a.co/d/gEZuu3t",
      "AU": "https://www.amazon.com.au/uxcell-Compression-Stainless-Compressed-Capacity/dp/B09139BWH7/ref=sr_1_1?crid=1VCXULCXNZJV7&dib=eyJ2IjoiMSJ9.CkzIEbFxnQdAsc2bih2GE-WcfzR0g59TJwI0G5jHtoQ0t5JQs4UfanU4X8qh48oJkXIdyhO5mxN4-tVCR7LPN7apsHJ7uHqHe5pHnJoimCbPaNo17q3mN_Oc6GBNqHe4fYeGskHcSyqMxM7NxOATxrdQvDzqpFiDEmxHA-3zkWB_28nQoeioW5plgHhECGjrp5KmpQDU4CqzqOqdNp_gf7aV1yk0z66vzEqTdOMEG8jb_XlBY6Umu1ywLkqvB0zRVwYIuXsvxi1BtKDRlspijRNCwyUDWcgZI6zGXDYymdc.4TSLxTtuhajIEqCeBn8RjtvI6Q-gdgZAOP2Lc8WWx_A&dib_tag=se&keywords=uxcell+Compression+Spring%2C304+Stainless+Steel%2C11mm+OD%2C0.9mm+Wire+Size%2C9mm+Compressed+Length%2C20mm+Free+Length%2C11N+Load+Capacity%2C+Silver+Tone%2C20pcs&qid=1744517070&rnid=6963563051&sprefix=%2Caps%2C248&sr=8-1"
    },
    defaultLink: "https://www.amazon.com/uxcell-Stainless-Compression-Spring-Capacity/dp/B09139BWH7"
  },
  "springs-alt-1": {
    id: "springs-alt-1",
    name: "Springs (Alternative 1)",
    countryLinks: {
      "US": "https://www.amazon.com/gp/product/B076M6SFFP/",
    },
    defaultLink: "https://www.amazon.com/gp/product/B076M6SFFP/"
  },
  "springs-alt-2": {
    id: "springs-alt-2",
    name: "Springs (Alternative 2)",
    countryLinks: {
      "US": "https://www.aliexpress.us/item/3256805126221346.html",
    },
    defaultLink: "https://www.aliexpress.us/item/3256805126221346.html"
  },
  "metal-rods-5mm": {
    id: "metal-rods-5mm",
    name: "Metal Rods 5mm",
    countryLinks: {
      "US": "https://www.amazon.com/dp/B005WPAKGC",
      "CA": "https://a.co/d/1XdMgYk"
    },
    defaultLink: "https://www.amazon.com/dp/B005WPAKGC"
  },
  "metal-rods-3mm": {
    id: "metal-rods-3mm",
    name: "Metal Rods 3mm",
    countryLinks: {
      "US": "https://www.amazon.com/dp/B005WPAJKY",
      "CA": "https://a.co/d/9qHcJ62"
    },
    defaultLink: "https://www.amazon.com/dp/B005WPAJKY"
  },
  "linkage": {
    id: "linkage",
    name: "Linkage",
    countryLinks: {
      "US": "https://www.amazon.com/gp/product/B0CRDRWYXW/",
      "CA": "https://a.co/d/e8L6H7Y"
    },
    defaultLink: "https://www.amazon.com/gp/product/B0CRDRWYXW/"
  },
  "servo-extension-wires": {
    id: "servo-extension-wires",
    name: "JR Servo Extension Wires",
    countryLinks: {
      "US": "https://www.amazon.com/OliYin-7-87in-Quadcopter-Extension-Futaba/dp/B0711TBZY2/",
      "CA": "https://a.co/d/bDIlS8e"
    },
    defaultLink: "https://www.amazon.com/OliYin-7-87in-Quadcopter-Extension-Futaba/dp/B0711TBZY2/"
  },
  "usb-microphone": {
    id: "usb-microphone",
    name: "Mini USB Microphone",
    countryLinks: {
      "US": "https://www.amazon.com/gp/product/B086DRRP79/",
      "CA": "https://a.co/d/hf1fp7L",
      "PL": "https://www.amazon.pl/Mikrofon-Przenośny-Nagrywanie-Adapter-Komputera/dp/B0BHYC2MYV/ref=asc_df_B0BHYC2MYV/?tag=plshogostdde-21&linkCode=df0&hvadid=665355056766&hvpos=&hvnetw=g&hvrand=5412411992864764419&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1011541&hvtargid=pla-2196447517193&mcid=2b982368276d3457a307eb75ba1c5ae8&th=1"
    },
    defaultLink: "https://www.amazon.com/gp/product/B086DRRP79/"
  },
  "audio-amplifier": {
    id: "audio-amplifier",
    name: "MAX98357 Audio Amplifier",
    countryLinks: {
      "US": "https://www.amazon.com/dp/B0BTBS5NW2/",
      "CA": "https://a.co/d/2tc800r",
      "AU": "https://www.amazon.com.au/AITIAO-4Pcs-Amplifier-Amplifiers-Filterless/dp/B0B5TTJC1M/ref=sr_1_1?crid=3PXG2LFF5JFHZ&dib=eyJ2IjoiMSJ9.WIuT8ccl_KHX2Nc4jWKLjMzxRxPDLggtvQkts_gpp9v3QBAoiseP7a2jJ3LzRa6f2YPn9dYY4ugWwUjc6zLvp7VEYdVoIDM6QtcmPYlNzvezwMOCqfvquwdk0VicgH0V2XlCuuqDTjvbHiiKZu3bUvDhNr0xyibo_k0cUTrW6pFnJjrceDDjxI002jDxSYd4M9k2V3zydgphlQDOAdZpKIXK_oBGISIrhPw3SBjEzsOWM96jQLxp0hAhL0RjexdNBFRF7-D2sIqjz6BZ-cZNwv_wT72RyxNXofsrvT6H3D4GHiwlPKwB7UEw1mcIQll1casp6GdPCg5uqtCS11Apao5AHxQDHB-odP5LHnTK_ST6eAn-cext1mPysDQeXGs3rC0mzKuX-IBl7OC57AkDYkaSpf5RDIHr_YOhjbiZFjyzTce3YQy1CaMoHuKsJSxN.Vc9Ebr7aFLiDOvFGtRo26sc-q1qNCWdjdu7_fR5p_qk&dib_tag=se&keywords=i2s+audio+amplifier+4pc&qid=1743304268&sprefix=i2s+audio+amplifier+4%2Caps%2C459&sr=8-1",
      "PL": "https://pl.aliexpress.com/item/1005003035501023.html?src=google&pdp_npi=4%40dis!PLN!12.39!12.39!!!!!%40!12000023365388194!ppc!!!"
    },
    defaultLink: "https://www.amazon.com/dp/B0BTBS5NW2/"
  },
  "speaker": {
    id: "speaker",
    name: "3W 8Ω Speaker",
    countryLinks: {
      "US": "https://www.amazon.com/dp/B07GJ4GH67/",
      "AU": "https://www.amazon.com.au/ATNSINC-Full-Range-Advertising-Separating-Interface/dp/B0DSZJ8TXD/ref=sr_1_2?crid=19CI2JNLA2ILQ&dib=eyJ2IjoiMSJ9.k3NvhbvvVuTmwSc8dpntX7wFXjODw4PXjQ0eRmDrbgZoOkqvtZhJFhhqgAMlQKMg4o6zaZBV85yD4nA1zpJFxrfEYmLBvayxMMfQ-QJnhV84UEEo_H_2z0msVZqrhrTmZBJ6orgPZ6cODPSV91cNlm5bajm6ShofzBKgJVKJxy61rMs02mPaBph0Ktk5urwLrQM__PrneJ5scEn8UtYjP3jGMf0MLVq4qNaUIc2wiLNSo0DK2-rpbZNVyNtcg6UrY-L7I0HrDPIvKS4qnbbsdnb2f8fHuZEJFkAxnpt8gt3rF1WtEu3YItXMsaTrlDpuh0LFFpSgrRSpdsJnzBRKgcGWZzjcL7OXg6xEckFv3C5Qs3QHI1V95nZc8dXidNU0rwnxcOP-lgwBkZx2oscHip7WKOIO4R48FN8qyPCOtlC90vKUla4odeQVlzVTJ-Eq.V7e2s2GMyweU-fss3wcgHY6cXvuQIQW4NPNgfOLP0jk&dib_tag=se&keywords=Speaker%2B3%2BWatt%2B8%2BOhm%2BSingle%2BCavity%2BMini%2BSpeaker%2BFull-Range%2BCavity%2BMobile%2BPortable%2BAdvertising%2BMachine%2BSpeaker%2BConnector%2BSeparating%2BInterface%2B3.3V%2B5V&qid=1743303395&sprefix=%2Caps%2C218&sr=8-2&th=1",
      "PL": "https://pl.aliexpress.com/item/32794499078.html?spm=a2g0o.productlist.main.19.1e4fn1a0n1a0q4&algo_pvid=d63da49e-7a3e-46c3-b18f-57d2f56a7a24&algo_exp_id=d63da49e-7a3e-46c3-b18f-57d2f56a7a24-9&pdp_ext_f=%7B"
    },
    defaultLink: "https://www.amazon.com/dp/B07GJ4GH67/"
  },
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
    name: "15Pin to 22Pin Camera Ribbon Cable",
    countryLinks: {
      "US": "https://www.amazon.com/Onyehn-Raspberry-Camera-Cable-Ribbon/dp/B07XZ5DX5H/",
      "CA": "https://a.co/d/gYzFbJ5"
    },
    defaultLink: "https://www.amazon.com/Onyehn-Raspberry-Camera-Cable-Ribbon/dp/B07XZ5DX5H/"
  },
  "m3-screw-kit": {
    id: "m3-screw-kit",
    name: "M3 Assorted Flat Head Screw Kit",
    countryLinks: {
      "US": "https://a.co/d/bC30GoT",
      "CA": "https://a.co/d/anPAyTs"
    },
    defaultLink: "https://a.co/d/bC30GoT"
  },
  "m3-grub-screws": {
    id: "m3-grub-screws",
    name: "M3 Asstd Grub Screws",
    countryLinks: {
      "US": "https://www.amazon.com/dp/B07N7C6HKP/",
      "CA": "https://a.co/d/hKRXqgt"
    },
    defaultLink: "https://www.amazon.com/dp/B07N7C6HKP/"
  },
  "m2-self-tapping": {
    id: "m2-self-tapping",
    name: "M2.x Self Tapping",
    countryLinks: {
      "US": "https://www.amazon.com/gp/product/B0BLY1MPLR/",
      "CA": "https://a.co/d/8wvMdGF"
    },
    defaultLink: "https://www.amazon.com/gp/product/B0BLY1MPLR/"
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

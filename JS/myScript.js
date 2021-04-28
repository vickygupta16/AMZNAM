function displayProducts(id) {
  const data = {
    march25: {
      title: "Deals from March 25 2021",
      links: [
        "https://amzn.to/398XhyL",
        "https://amzn.to/3rdJsp1",
        "https://amzn.to/2PnVeQs",
        "https://amzn.to/3slTGVD",
        "https://amzn.to/3cgMgNP",
      ],
      text: [
        "Up to 40% off on Gas stoves & Induction Cooktops",
        "Upto 40% off on Fossil, Titan and More",
        "Xtore Breathable cotton cloth mask",
        "Up to 35% off | Healthy food",
        "Upto 65% off on pTron & Urbn Mobile Accessories",
      ],
    },
    march26: {
      title: "Deals from March 26 2021",
      links: [
        "https://amzn.to/2Pq1YNA",
        "https://amzn.to/3d74wIv",
        "https://amzn.to/2P6s4oT",
        "https://amzn.to/3fdbuhN",
        "https://amzn.to/31xU6fX",
      ],
      text: [
        "Boat and Edict up to 50% off",
        "itel A47 (Cosmic Purple, 2GB RAM, 32GB Storage, 5.5'' HD+ IPS Display), L5505",
        "Lava BeU Rose Pink, 2GB RAM, 32GB Storage",
        "Oppo A31 (Mystery Black, 6GB RAM, 128GB Storage)",
        "Tecno Spark 5 Pro (Seabed Blue, 4GB RAM, 64GB Storage)",
      ],
    },
    march27: {
      title: "Deals from March 27 2021",
      links: [
        "https://amzn.to/3cccMYq",
        "https://amzn.to/3lUfXHu",
        "https://amzn.to/31luCSz",
        "https://amzn.to/3fknn5x",
        "https://amzn.to/3w6sSL4",
      ],
      text: [
        "Superfoods",
        "Footwear",
        "Nokia 3.4",
        "Branded Headphones",
        "Smart Watches & IoT Devices",
      ],
    },
    march28: {
      title: "Deals from March 28 2021",
      links: [
        "https://amzn.to/3uevyVB",
        "https://amzn.to/39ivTyg",
        "https://amzn.to/39iIEZx",
        "https://amzn.to/3crATT8",
        "https://amzn.to/3sx0i3p",
      ],
      text: [
        "Upto 65% off on pTron & Urbn Mobile Accessories",
        "Upto 10% off on Healthcare products",
        "Coolpad Cool 6",
        "Apple iPhone 12 Mini (64GB) - Black",
        "Min 60% Off on formal shoes",
      ],
    },
    april02: {
      title: "Deals from April 02 2021",
      links: [
        "https://amzn.to/3sOCoAL",
        "https://amzn.to/3wmypxm",
        "https://amzn.to/3fELgoS",
        "https://amzn.to/3fzNYMl",
        "https://amzn.to/2OiUSdF",
      ],
      text: [
        "Lava BeU Rose Pink, 2GB RAM, 32GB Storage",
        "Xtore Breathable Cotton Mask",
        "Up To 30% Off On Grocery Essentials",
        "Up to 70% off Home decor",
        "Upto 30% Off on Superfoods",
      ],
    },
    april03: {
      title: "Deals from April 03 2021",
      links: [
        "https://amzn.to/3cN0OF7",
        "https://amzn.to/3wnv2pQ",
        "https://amzn.to/3rM2vqw",
        "https://amzn.to/3rHSevr",
        "https://amzn.to/2PTljqu",
      ],
      text: [
        "Vivo X60 Series | 10% HDFC Discount | Extra Upto Rs. 4000 off on Exchange",
        "Boat Headphones up to 60% off",
        "Nokia 5310 Dual SIM Feature Phone with MP3 Player, Wireless FM Radio and Rear Camera",
        "Upto 40% off on Sports Nutrition",
        "Upto 60% off on Baby Products",
      ],
    },
    april04: {
      title: "Deals from April 04 2021",
      links: [
        "https://amzn.to/3sOkGNz",
        "https://amzn.to/3ueDXYS",
        "https://amzn.to/2Px0gdG",
        "https://amzn.to/31I7r55",
        "https://amzn.to/39GuD8m",
      ],
      text: [
        "Up To 40% Off on Dry Fruits",
        "Min 60% Off: Women's Designer Kurtis & Salwar Suits",
        "Upto 60% off on Baby Products",
        "Vivo X60 Series | 10% HDFC Discount | Extra Upto Rs. 4000 off on Exchange",
        "Samsung Galaxy Note10 Lite",
      ],
    },
    april05: {
      title: "Deals from April 05 2021",
      links: [
        "https://amzn.to/3sLkwXn",
        "https://amzn.to/3sQuoip",
        "https://amzn.to/3fKOWoW",
        "https://amzn.to/3dFbHIu",
        "https://amzn.to/3rNBlzt",
      ],
      text: [
        "Tecno Spark 5 Pro (Seabed Blue, 4GB RAM, 64GB Storage)",
        "Handpicked Laptops & Desktop Computers under INR 40000",
        "Upto 50% Off on Jabra Bluetooth Headsets",
        "Kingston 500GB A2000 M.2 2280 Nvme Internal SSD PCIe Up to 2000MB/S (SA2000M8/500G)",
        "Min 60% off on Women's Jeans, T-shirts, Loungewear & Westernwear",
      ],
    },
    april06: {
      title: "Deals from April 06 2021",
      links: [
        "https://amzn.to/31NMUMu",
        "https://amzn.to/3mkrHU6",
        "https://amzn.to/31Q34oQ",
        "https://amzn.to/3dB2DUW",
        "https://amzn.to/39MkmHF",
      ],
      text: [
        "Min 50% Off on Men's Topwear from Duke & Monte Carlo",
        "Xtore Breathable Cotton Mask | Reusable | Washable | 2 layer mask",
        "Upto 50% Off on Jabra,realme Bluetooth Headsets",
        "Coolpad Cool 6 Silver, 4GB RAM, 64GB Storage",
        "AmazonBasics Large Appliances Starting at Rs.4225",
      ],
    },
    april07: {
      title: "Deals from April 07 2021",
      links: [
        "https://amzn.to/3moc0LF",
        "https://amzn.to/31TSPzW",
        "https://amzn.to/3cS3Pnz",
        "https://amzn.to/31SnDAV",
        "https://amzn.to/3fPkIRY",
      ],
      text: [
        "Vivo Carnival Days | Extra Upto Rs. 4000 off on Exchange",
        "Up to 70% off pTron Mobile Accessories",
        "Seller Labels Under 599: Miss Chase, Harpa & more",
        "Min 60% Off on formal shoes",
        "Upto 70% off on Men's footwear",
      ],
    },
    april08: {
      title: "Deals from April 08 2021",
      links: [
        "https://amzn.to/3dKcgR5",
        "https://amzn.to/3sZu6Gl",
        "https://amzn.to/3upd1G2",
        "https://amzn.to/2PDtVlE",
        "https://amzn.to/2OtlMzq",
      ],
      text: [
        "VLava BeU Rose Pink, 2GB RAM, 32GB Storage",
        "Upto 40% off on Sports Nutrition",
        "Upto 40% off on Fossil Titan and More",
        "Upto 40% off on watches from Tommy Hilfiger, Timex & More",
        "Upto 50% off on Juicer Mixer Grinders",
      ],
    },
    april09: {
      title: "Deals from April 09 2021",
      links: [
        "https://amzn.to/3uzrkrr",
        "https://amzn.to/3wzCLkO",
        "https://amzn.to/3fW4mqI",
        "https://amzn.to/3g08ZzR",
        "https://amzn.to/3s4k9WA",
        "https://amzn.to/3dKhZqg",
        "https://amzn.to/3fV14nr",
      ],
      text: [
        "Up To 30% Off On Grocery Essentials",
        "Minimum 20% off on Hasbro Toys",
        "Upto 50% off on Fans",
        "New launches from boAt Cables and Chargers | Upto 60% off",
        "Upto 65% off on Monitors",
        "Up to 60% Off on Home Essentials",
        "Nokia 5310 Dual SIM Feature Phone with MP3 Player, Wireless FM Radio and Rear Camera",
      ],
    },
    april10: {
      title: "Deals from April 10 2021",
      links: [
        "https://amzn.to/3dNu0v6",
        "https://amzn.to/2Rsmmih",
        "https://amzn.to/3uKExhv",
        "https://amzn.to/3dPblPw",
        "https://amzn.to/39Vu22I",
        "https://amzn.to/3uKEzWF",
        "https://amzn.to/3fTgEjw",
      ],
      text: [
        "Dumbbells & Exercise Weights | Upto 40% off",
        "Upto 50% Off: Gardening & Outdoor Best Sellers",
        "Upto 45% off on Automotive accessories",
        "Up to 40% off on Bakeware Products",
        "Up to 60% Off on Amazon Brands Products - Electronics, Office Products & More",
        "Upto 35% off on Bestselling Tablets",
        "Print At Home @Low Printing cost|UP TO 30% OFF",
      ],
    },
    april11: {
      title: "Deals from April 11 2021",
      links: [
        "https://amzn.to/3uHEdju",
        "https://amzn.to/3dR7lOk",
        "https://amzn.to/2RrFEEk",
        "https://amzn.to/3dOnyUu",
        "https://amzn.to/3wNc4cn",
        "https://amzn.to/2PS63L3",
        "https://amzn.to/3wKphTq",
      ],
      text: [
        "Fujifilm instant cameras starting at INR 4999/-",
        "Samsung Galaxy Tab A7 26.31 cm (10.4 inch), RAM 3 GB, ROM 32 GB Expandable, Wi-Fi-only, Silver",
        "Upto 45% off on Intel Powered Laptops and Desktops",
        "Cycles | Starting at Rs. 2,699",
        "Upto 35% off on Grooming products",
        "Upto 15% off on Helmets from Vega and Steelbird",
        "Treadmill : Minimum 40% off",
      ],
    },
    april12: {
      title: "Deals from April 12 2021",
      links: [
        "https://amzn.to/3mG0w65",
        "https://amzn.to/3teHbvA",
        "https://amzn.to/3s9B2iI",
        "https://amzn.to/3d9Yyb3",
        "https://amzn.to/2PXUXnR",
        "https://amzn.to/2QeFKyD",
        "https://amzn.to/3s9EDxs",
      ],
      text: [
        "Upto 50% off On Writing Instruments",
        "Upto 50% off on Motorbike accessories & parts",
        "Up to 35% off - Furniture from Amazon Brands & more",
        "Upto 65% Off on Jabra Bluetooth Headset",
        "Upto INR 30000 Off on Gaming Laptops and Desktops",
        "Upto 75% off on Table and Floor Lamps",
        "UP TO 30% Off On Printers|Epson, Canon, HP",
      ],
    },
    april13: {
      title: "Deals from April 13 2021",
      links: [
        "https://amzn.to/3mJro5y",
        "https://amzn.to/3seGbWI",
        "https://amzn.to/3a36ysn",
        "https://amzn.to/2QohOsI",
        "https://amzn.to/3mFVoiu",
        "https://amzn.to/3deLbGw",
        "https://amzn.to/3uYUwsr",
      ],
      text: [
        "Up to 40% off on Sony Headphones and Speakers",
        "Up To 30% Off On Grocery Essentials",
        "Up to 60% Off on Amazon Brands Cases & Covers",
        "Up To 70% OFF on Smart Watches & IoT Devices",
        "Up to 30% off on Vacuum Cleaners",
        "Upto 65% off on monitors|No Cost EMI",
        "Upto INR 30000 Off on Gaming Laptops and Desktops",
      ],
    },
    april14: {
      title: "Deals from April 14 2021",
      links: [
        "https://amzn.to/3tiKrWL",
        "https://amzn.to/3a5vlw4",
        "https://amzn.to/3wQkmQW",
        "https://amzn.to/3wOPlgp",
        "https://amzn.to/2OS1BLW",
        "https://amzn.to/3wTJyWM",
        "https://amzn.to/3sbYyvr",
      ],
      text: [
        "Up to 50% off on Video Games & Accessories",
        "Upto 50% off on Biking Gear",
        "Handpicking Gaming Laptops and Desktops; Upto INR 30000 Off",
        "Up to 35% off - Furniture from Amazon Brands & more",
        "AmazonBasics Large Appliances Starting at Rs.4225",
        "Up to 40% off on Pressure Cooker and Cookware",
        "Upto 50% Off on Mivi, Urbn Moblies Accessories & More",
      ],
    },
    april15: {
      title: "Deals from April 15 2021",
      links: [
        "https://amzn.to/3tqC37K",
        "https://amzn.to/32dmrsd",
        "https://amzn.to/3e7Bmtt",
        "https://amzn.to/3x5kRqD",
        "https://amzn.to/3tmyWgK",
        "https://amzn.to/32h3R2c",
        "https://amzn.to/3e8zfWp",
      ],
      text: [
        "Olive oil",
        "Up To 40% Off On Borges Grocery Essentials",
        "Up to 40% off on Bottles and Flasks",
        "Upto 65% off on monitors|No Cost EMI",
        "Upto 60% off on Baby Products",
        "Upto 40% off on Engine Oil & Car Care Products",
        "Up to 50% off |Grocery essentials",
      ],
    },
    april16: {
      title: "Deals from April 16 2021",
      links: [
        "https://amzn.to/3dmMfID",
        "https://amzn.to/3mRdn5w",
        "https://amzn.to/32iVVgT",
        "https://amzn.to/32kB78M",
        "https://amzn.to/2QwFB9z",
        "https://amzn.to/3dmMEuD",
        "https://amzn.to/3e4FryB",
      ],
      text: [
        "Up to 50% off on Video Games & Accessories",
        "Epson L3152 WiFi All in One Ink Tank Printer",
        "Upto 80% off on Watches",
        "Tucasa",
        "TECNO Spark 7 (Spruce Green, 2GB RAM, 32 GB Storage)",
        "Upto INR 30000 Off on Handpicked Laptops & Desktop Computers",
        "Upto 60% of on Vehicle Tools & Parts",
      ],
    },
    april17: {
      title: "Deals from April 17 2021",
      links: [
        "https://amzn.to/32nWwhy",
        "https://amzn.to/32tmTCt",
        "https://amzn.to/32m67oT",
        "https://amzn.to/2RGp5Vk",
        "https://amzn.to/32othLA",
        "https://amzn.to/3n63QrL",
        "https://amzn.to/3mVpSgx",
      ],
      text: [
        "Dumbbells & Exercise Weights | Upto 40% off",
        "Price Cut on Large Screen TVs",
        "Camera accessories starting at INR 375",
        "Samsung Galaxy S20 FE 5G",
        "TECNO Spark 7 (Spruce Green, 2GB RAM, 32 GB Storage)",
        "Minimum 20% off on Shumee Toys",
        "Up to 60% off Ambrane Mobile Accessories",
      ],
    },
    april18: {
      title: "Deals from April 18 2021",
      links: [
        "https://amzn.to/3gkBmsE",
        "https://amzn.to/3edMe94",
        "https://amzn.to/2RKOZHu",
        "https://amzn.to/3uY9Jd5",
        "https://amzn.to/3ahfryD",
        "https://amzn.to/3x7lJL2",
        "https://amzn.to/3gkvwI0",
      ],
      text: [
        "Up to 60% off | face masks",
        "Cycles | Starting at Rs. 2,699",
        "Treadmill : Minimum 40% off",
        "Upto 15% off on Helmets from Vega and Steelbird",
        "Upto 25% off on Laptops from Life Digital",
        "Up To 70% OFF on Smart Watches & IoT Devices",
        "Upto 50% off On Notebooks & School Supplies",
      ],
    },
    april19: {
      title: "Deals from April 19 2021",
      links: [
        "https://amzn.to/2RLz9fL",
        "https://amzn.to/2Q5HqL9",
        "https://amzn.to/3x689aX",
        "https://amzn.to/3e8jApW",
        "https://amzn.to/3v65M6j",
        "https://amzn.to/3gmN2vg",
        "https://amzn.to/2RGmoCZ",
      ],
      text: [
        "OPPO A31",
        "Up to 45% off on baby diapers",
        "Starting 129 | Ambrane Mobile Accessories",
        "TECNO Spark 7",
        "itel A47",
        "Up to 50% off on Ecovacs Robotic Vacuum cleaner",
        "Upto 45% off on Automotive equipment & tyres",
      ],
    },
    april20: {
      title: "Deals from April 20 2021",
      links: [
        "https://amzn.to/3tDTt0A",
        "https://amzn.to/3dxm0PT",
        "https://amzn.to/2P4F6U7",
        "https://amzn.to/3tAGRHp",
        "https://amzn.to/3dvErnS",
        "https://amzn.to/2QyWuAF",
        "https://amzn.to/3syGCLZ",
      ],
      text: [
        "Starting 99 | Urbn Mobile Accessories",
        "Up to 40% off on Dinnerware",
        "Rock Bottom Prices",
        "TECNO Spark 7",
        "Upto 70% off on Top Picks for Home",
        "Up to 30% off on Vacuum Cleaners",
        "UP TO 50% Off On Printers",
      ],
    },
    april21: {
      title: "Deals from April 21 2021",
      links: [
        "https://amzn.to/2QJroqd",
        "https://amzn.to/2P5rS9u",
        "https://amzn.to/2QM07TK",
        "https://amzn.to/3sBeVCe",
        "https://amzn.to/3vdhjkl",
        "https://amzn.to/3v4qO56",
        "https://amzn.to/3v7Woip",
      ],
      text: [
        "Up to 50% off on Video Games & Accessories",
        "UP TO 60% Off On High Speed WiFi Routers",
        "Up to 30% off on Stainless Steel Kitchenware",
        "Best selling smart lights",
        "Harman Kardon Fly BT in-Ear Wireless Bluetooth Headphone",
        "Upto 15% off on Helmets from Vega and Steelbird",
        "Upto INR 40000 Off on Gaming Laptops & Desktops",
      ],
    },
    april22: {
      title: "Deals from April 22 2021",
      links: [
        "https://amzn.to/3tBgnFT",
        "https://amzn.to/3vgyOQN",
        "https://amzn.to/3naPaYn",
        "https://amzn.to/3xaMlLv",
        "https://amzn.to/32ynZNA",
        "https://amzn.to/3vcSpRU",
        "https://amzn.to/3eqrJpV",
      ],
      text: [
        "Upto 60% off on Tablet accessories | Headsets | Computer Speakers",
        "Upto 65% off | Urbn Mobile Accessories",
        "Tucasa",
        "Up to 35% off - Furniture from Amazon Brands & more",
        "Rock Bottom Prices - Upto 25% off on Laptops from Life Digital",
        "Sparkle Girlz Sparkle Girlz-Dolls-13'-13' Sparkle Tots",
        "Upto 60% of on Vehicle Tools & Parts",
      ],
    },
    april23: {
      title: "Deals from April 23 2021",
      links: [
        "https://amzn.to/2Qjux06",
        "https://amzn.to/2RP07mA",
        "https://amzn.to/3nh4SRM",
        "https://amzn.to/3sEEVN3",
        "https://amzn.to/2QO7LgL",
        "https://amzn.to/3dFgBGp",
        "https://amzn.to/2PfiZdz",
      ],
      text: [
        "Samsung Galaxy S20 FE 5G",
        "Lava BeU Rose Pink",
        "Upto 20% off | Helmets from Vega and Steelbird",
        "Up to 50% off on Video Games & Accessories",
        "Rock Bottom Prices - Upto 25% off on Laptops from Life Digital",
        "UPto INR 40000 Off on Gaming Laptops & Desktops",
        "Up to 70% off on Amazon Brand Sports Products",
      ],
    },
    april24: {
      title: "Deals from April 24 2021",
      links: [
        "https://amzn.to/3niQW9y",
        "https://amzn.to/2PiTZCd",
        "https://amzn.to/3tRwyPm",
        "https://amzn.to/3vjpY4q",
        "https://amzn.to/2QlghUE",
        "https://amzn.to/3vla4Xz",
        "https://amzn.to/3dKyVhi",
      ],
      text: [
        "Gaming Accessories upto 50% off",
        "Price Cut on Large Screen TVs and more from top brands",
        "UPto INR 40000 Off on Gaming Laptops & Desktops",
        "Up to 50% off on JBL & Infinity headphones and speakers",
        "Upto 35% off on Bestselling Tablets",
        "Up to 40% off on Kitchen Products",
        "Upto 60% off on Baby Products",
      ],
    },
    april25: {
      title: "Deals from April 25 2021",
      links: [
        "https://amzn.to/3dLSfLk",
        "https://amzn.to/3xjy9jc",
        "https://amzn.to/3tVR8hS",
        "https://amzn.to/3et3aZh",
        "https://amzn.to/3erBjsB",
        "https://amzn.to/3sKzz2B",
        "https://amzn.to/3sJzJY8",
      ],
      text: [
        "Up to 10% off on Pet Food and Treats",
        "Cycles | Starting at Rs. 2,699",
        "Sparkle Girlz",
        "DOTD Car and bike Accessories",
        "Fitkit FT98 carbon",
        "Upto 25% Off on Handpicked Laptops from Life Digital",
        "Upto 60% off on Baby Products",
      ],
    },
    april26: {
      title: "Deals from April 26 2021",
      links: [
        "https://amzn.to/3nkxRnD",
        "https://amzn.to/3njQS9T",
        "https://amzn.to/2Qw8xiy",
        "https://amzn.to/2S3EYoZ",
        "https://amzn.to/3sMtbIp",
        "https://amzn.to/2RYFIeR",
        "https://amzn.to/3evfHLY",
      ],
      text: [
        "Guitars, Keyboards & more starting at 139",
        "Top picks in Car Engine oil",
        "Upto 40% off on Mice and Keying Device",
        "Upto 50% off on Power & Hand Tools",
        "Security Cameras Starting from INR 1895",
        "Digital & SmartWatches starting from 699",
        "Up to 70% off on Amazon Brand Sports Products",
      ],
    },
    april27: {
      title: "Deals from April 27 2021",
      links: [
        "https://amzn.to/2QAIdDN",
        "https://amzn.to/32OvoZa",
        "https://amzn.to/3aHSxAG",
        "https://amzn.to/3vnFPPO",
        "https://amzn.to/2S6zGcl",
        "https://amzn.to/32UUzZW",
        "https://amzn.to/3xqthZC",
      ],
      text: [
        "Tripods and batteries starting at INR 329/-",
        "Lubricants: Deal of the day",
        "Up to 50% off | Pet Care Products",
        "Upto 45% off on Handpicked Laptops and Desktops",
        "Upto 80% off on Watches",
        "Up to 50% off on Kitchen Appliances",
        "Upto 35% off on Personal Care Appliances",
      ],
    },
    april28: {
      title: "Deals from April 28 2021",
      links: [
        "https://amzn.to/3vlZkbp",
        "https://amzn.to/2Pv4Edh",
        "https://amzn.to/3eAkf3C",
        "https://amzn.to/3vnFPPO",
        "https://amzn.to/331nyvb",
        "https://amzn.to/2S1pvpi",
        "https://amzn.to/3vqH40o",
      ],
      text: [
        "Up to 50% off on Video Games & Accessories",
        "Upto 60% off on Tablet accessories | Headsets | Computer Speakers",
        "Vivo Y20i | Extra Rs. 1000 off on Exchange",
        "Upto 45% off on Handpicked Laptops and Desktops",
        "Upto 40% off on Engine Oil & Car Care Products",
        "Sparkle Girlz",
        "Tucasa",
      ],
    },
  };
  //<li class="list-group-item"><a target="_blank" href="https://amzn.to/39iIEZx"><span class="oldDealTitle">Coolpad Cool 6</span></a></li>
  for (var key in data) {
    if (key == id) {
      //alert(data[key].links.length + " " + data[key].text.length);
      var i = 0;
      var code = "";
      document.getElementById("ulList").innerHTML = code;
      document.getElementById("modalLabel").innerText = "";
      while (i < data[key].links.length) {
        code +=
          "<li class='list-group-item'><a target='_blank' href='" +
          data[key].links[i] +
          "'><span class='oldDealTitle'>" +
          data[key].text[i] +
          "</span></a></li>";
        ++i;
      }
      document.getElementById("ulList").innerHTML = code;
      document.getElementById("modalLabel").innerText = data[key].title;
      break;
    }
  }
  //alert(id + " " + Object.keys(data).length);
}

var setPantryList = () => {
  const pantryData = {
    links: [
      "https://amzn.to/3dZSj8U",
      "https://amzn.to/3wPYKUX",
      "https://amzn.to/3mT9bSM",
      "https://amzn.to/2QjslVH",
      "https://amzn.to/3abBBm0",
      "https://amzn.to/2PUL5v4",
      "https://amzn.to/3uLEGkq",
    ],
    texts: [
      "Tata Sampann Thick Poha, 500g",
      "Vim Dishwash Gel - 750 ml (Lemon)",
      "Pampers New Diaper Pants, XL, 56 Count",
      "Scotch-Brite Stainless Steel Scrub - Pack of 3",
      "Savlon Germ Protection",
      "Duracell Ultra Alkaline AAA Battery, 4 Pieces",
      "Himalaya Total Care Baby Pants Diapers",
    ],
  };
  var i = 0;
  var code = "";
  document.getElementById("pantryList").innerHTML = code;
  while (i < pantryData.links.length) {
    code +=
      "<li class='list-group-item'><a target='_blank' href='" +
      pantryData.links[i] +
      "'><span class='oldDealTitle'>" +
      pantryData.texts[i] +
      "</span></a></li>";
    ++i;
  }
  document.getElementById("pantryList").innerHTML = code;
};

var setKitchenApplianceList = () => {
  const kitchenApplianceData = {
    links: [
      "https://amzn.to/2OK61V4",
      "https://amzn.to/3g4kLZV",
      "https://amzn.to/3a61Nyx",
      "https://amzn.to/3mGg1va",
      "https://amzn.to/3wIUZRb",
      "https://amzn.to/3dbeEBk",
      "https://amzn.to/3a3KCgQ",
    ],
    texts: [
      "Upto 50% off on RK Aqua Fresh Water Purifiers",
      "Upto 35% off on Dyson Appliances",
      "Up to 50% off on Kitchen Tools",
      "Up to 40% off on Milagrow Vacuum Cleaners",
      "Upto 50% off on Robotic Vacuums Cleaners",
      "Upto 50% off on Kitchen Products",
      "Upto 50% Off on Nutricook Kitchen Appliances",
    ],
  };
  var i = 0;
  var code = "";
  document.getElementById("kitchenApplianceList").innerHTML = code;
  while (i < kitchenApplianceData.links.length) {
    code +=
      "<li class='list-group-item'><a target='_blank' href='" +
      kitchenApplianceData.links[i] +
      "'><span class='oldDealTitle'>" +
      kitchenApplianceData.texts[i] +
      "</span></a></li>";
    ++i;
  }
  document.getElementById("kitchenApplianceList").innerHTML = code;
};

var setBabyProductsList = () => {
  const babyProductData = {
    links: [
      "https://amzn.to/3mErpaB",
      "https://amzn.to/327s2A4",
      "https://amzn.to/3wQgGyq",
      "https://amzn.to/3dYskP8",
      "https://amzn.to/2PYJu7k",
      "https://amzn.to/3dYssOC",
      "https://amzn.to/3wY3MPg",
    ],
    texts: [
      "Himalaya Baby Shampoo (400 ml)",
      "Kid's Inflatable Baby Bath Tub Pool",
      "Baby Mitten Gloves Cap and Booty Set",
      "Baby Bather for Newborn and Infants",
      "Spoon Feeder | Ceralac Feeder",
      "Baby Blanket Cum Sleeping Bag Combo of 2",
      "Linenaffairs Baby Washcloths | Baby Muslin Washcloth",
    ],
  };
  var i = 0;
  var code = "";
  document.getElementById("babyList").innerHTML = code;
  while (i < babyProductData.links.length) {
    code +=
      "<li class='list-group-item'><a target='_blank' href='" +
      babyProductData.links[i] +
      "'><span class='oldDealTitle'>" +
      babyProductData.texts[i] +
      "</span></a></li>";
    ++i;
  }
  document.getElementById("babyList").innerHTML = code;
};

var setElectronicsList = () => {
  const electronicsData = {
    links: [
      "https://amzn.to/2PNh7cx",
      "https://amzn.to/3uVTA8b",
      "https://amzn.to/39YJsDt",
      "https://amzn.to/3tfSnYI",
      "https://amzn.to/3uVTNrZ",
      "https://amzn.to/2OEUoi2",
      "https://amzn.to/3d7IPJK",
    ],
    texts: [
      "Earphones",
      "Computers & Accessories",
      "Car & Vehicle Electronics",
      "Cameras & Photography",
      "Home Audio",
      "Wearable Technology",
      "Power Accessories",
    ],
  };
  var i = 0;
  var code = "";
  document.getElementById("electronicsList").innerHTML = code;
  while (i < electronicsData.links.length) {
    code +=
      "<li class='list-group-item'><a target='_blank' href='" +
      electronicsData.links[i] +
      "'><span class='oldDealTitle'>" +
      electronicsData.texts[i] +
      "</span></a></li>";
    ++i;
  }
  document.getElementById("electronicsList").innerHTML = code;
};

var setofficeList = () => {
  const officeData = {
    links: [
      "https://amzn.to/3tqKNL7",
      "https://amzn.to/3g6Tc28",
      "https://amzn.to/3g4fSjN",
      "https://amzn.to/326AxLM",
      "https://amzn.to/3wQYIMs",
      "https://amzn.to/3a6t8k8",
      "https://amzn.to/3g55AQk",
    ],
    texts: [
      "Faber-Castell Textliner - Pack of 5 (Assorted)",
      "Parker Frontier Gold Trim Roller Ball Pen",
      "Corslet File Folders for Documents",
      "AmazonBasics 3 in 1 Heavy Duty Staple Gun",
      "Posh 2D Ring Binder File",
      "Casio MJ-12GST GST Calculator (Black)",
      "Vantagekart Habit Tracker Daily, Weekly and Monthly Planner",
    ],
  };
  var i = 0;
  var code = "";
  document.getElementById("officeList").innerHTML = code;
  while (i < officeData.links.length) {
    code +=
      "<li class='list-group-item'><a target='_blank' href='" +
      officeData.links[i] +
      "'><span class='oldDealTitle'>" +
      officeData.texts[i] +
      "</span></a></li>";
    ++i;
  }
  document.getElementById("officeList").innerHTML = code;
};

var setshoes_handbags_List = () => {
  const shoes_handbags_Data = {
    links: [
      "https://amzn.to/3dZMLLI",
      "https://amzn.to/3tfRY8z",
      "https://amzn.to/3e1BoTo",
      "https://amzn.to/3g7sOp8",
      "https://amzn.to/3e1L8gw",
      "https://amzn.to/3e1GU8C",
      "https://amzn.to/3a6Sgag",
    ],
    texts: [
      "Women's Footwear",
      "Men's Footwear",
      "Girls' Shoes",
      "Boys' Shoes",
      "Baby Shoes",
      "Shoe Care & Accessories",
      "Handbags, Purses & Clutches",
    ],
  };
  var i = 0;
  var code = "";
  document.getElementById("shoes_handbags_List").innerHTML = code;
  while (i < shoes_handbags_Data.links.length) {
    code +=
      "<li class='list-group-item'><a target='_blank' href='" +
      shoes_handbags_Data.links[i] +
      "'><span class='oldDealTitle'>" +
      shoes_handbags_Data.texts[i] +
      "</span></a></li>";
    ++i;
  }
  document.getElementById("shoes_handbags_List").innerHTML = code;
};

var setfurnitureList = () => {
  const furnitureData = {
    links: [
      "https://amzn.to/2PREzFw",
      "https://amzn.to/2PPUAMb",
      "https://amzn.to/3shL9lE",
      "https://amzn.to/3mFUSBf",
      "https://amzn.to/3daVlYY",
      "https://amzn.to/3mJxt1S",
      "https://amzn.to/3sd0fZC",
    ],
    texts: [
      "Desks & Workstations",
      "Home & kitchen store",
      "Bookshelves",
      "Dressing Table",
      "Dining Tables",
      "TV Units",
      "Wardrobes",
    ],
  };
  var i = 0;
  var code = "";
  document.getElementById("furnitureList").innerHTML = code;
  while (i < furnitureData.links.length) {
    code +=
      "<li class='list-group-item'><a target='_blank' href='" +
      furnitureData.links[i] +
      "'><span class='oldDealTitle'>" +
      furnitureData.texts[i] +
      "</span></a></li>";
    ++i;
  }
  document.getElementById("furnitureList").innerHTML = code;
};

var setCategoryList = () => {
  const categoryData = {
    links: [
      "https://amzn.to/2NyfSg6",
      "https://amzn.to/38VDGSB",
      "https://amzn.to/3cKO8xh",
      "https://amzn.to/38UZmy3",
      "https://amzn.to/3eSPvwI",
      "https://amzn.to/3qWs1Jq",
      "https://amzn.to/3eTNiku",
      "https://amzn.to/3vBBYPZ",
      "https://amzn.to/3lzMHWr",
      "https://amzn.to/2ODR5b4",
      "https://amzn.to/3s032WV",
      "https://amzn.to/3r02tec",
      "https://amzn.to/2OJm5q1",
      "https://amzn.to/3qYm1Qj",
      "https://amzn.to/3eRyKSp",
      "https://amzn.to/3s03Rit",
    ],
    texts: [
      "Electronics",
      "Mobiles",
      "Computers & Accessories",
      "Car & Motorbike",
      "Sports & Fitness Equipments",
      "Fashion",
      "Pantry",
      "Appliances",
      "Baby Products",
      "Beauty Products",
      "Clothing & Accessories",
      "Furniture",
      "Home & Kitchen",
      "Jewellery",
      "Bags & Luggage",
      "Office & Stationery",
    ],
  };
  var i = 0;
  var code = "";
  document.getElementById("categoryList").innerHTML = code;
  while (i < categoryData.links.length) {
    code +=
      "<li class='list-group-item'><a target='_blank' href='" +
      categoryData.links[i] +
      "'>" +
      categoryData.texts[i] +
      "</a></li>";
    ++i;
  }
  document.getElementById("categoryList").innerHTML = code;
};

window.onload = function () {
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  setCategoryList();
  setPantryList();
  setKitchenApplianceList();
  setBabyProductsList();
  setElectronicsList();
  setofficeList();
  setshoes_handbags_List();
  setfurnitureList();
};

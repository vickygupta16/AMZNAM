function displayProducts(id) {
  const data = {
    may08: {
      title: "Deals from May 08 2021",
      links: [
        "https://amzn.to/3eqypFI",
        "https://amzn.to/3uukQe4",
        "https://amzn.to/3uxENR3",
        "https://amzn.to/3evHLji",
        "https://amzn.to/2R1ykPK",
        "https://amzn.to/3uu6dHu",
        "https://amzn.to/3vQbSb7",
      ],
      text: [
        "Up to 40% off on Industrial and B2B Products",
        "Min 60%-80% Off On Sarees, Dress Material and more",
        "Min 60% off on Sleepwear, Comfort wear & Lingerie",
        "Best sellers Cricket : Strating at 79",
        "Upto 50% Off: Gardening & Outdoor Best Sellers",
        "Min 60% Off on Men's Sport Shoes",
        "Upto 80% off on Mens Boxers, Briefs,Vests & Socks",
      ],
    },
    may09: {
      title: "Deals from May 09 2021",
      links: [
        "https://amzn.to/3vQYNOJ",
        "https://amzn.to/3bf9rqN",
        "https://amzn.to/3ha8gN1",
        "https://amzn.to/3nYX4nU",
        "https://amzn.to/3vR09Jt",
        "https://amzn.to/3fk8Oh5",
        "https://amzn.to/3eXzC6g",
      ],
      text: [
        "Cleaning Supplies",
        "Min 60%-80% off on Women's Kurtis & Kurta Sets",
        "Upto 90% Off: Lehengas, Blouses & Dress Materials",
        "Kid's Apparel",
        "Women's footwear",
        "Coolpad Cool 6 Silver",
        "Samsung Galaxy S20 FE 5G",
      ],
    },
    may10: {
      title: "Deals from May 10 2021",
      links: [
        "https://amzn.to/3f3kLHO",
        "https://amzn.to/2SIe0DP",
        "https://amzn.to/3bfaYxf",
        "https://amzn.to/3tzoVfx",
        "https://amzn.to/3bd4aQu",
        "https://amzn.to/2SGxit5",
        "https://amzn.to/3xZkMFf",
      ],
      text: [
        "Laptops Sale | Upto INR 30000 Off",
        "Tecno Spark 7",
        "OPPO F19 Pro",
        "Print at Home|Print Economically|UP TO 30% OFF",
        "Cameras & accessories starting at INR 385/-",
        "Upto 90% Off: Lehengas, Blouses & Dress Materials",
        "min 60% Off on Watches",
      ],
    },
    may11: {
      title: "Deals from May 11 2021",
      links: [
        "https://amzn.to/3tGAqlj",
        "https://amzn.to/33yaUnU",
        "https://amzn.to/3hoO7CW",
        "https://amzn.to/3eBOIja",
        "https://amzn.to/3eBu2HR",
        "https://amzn.to/2R0qndT",
        "https://amzn.to/3uF7hbD",
      ],
      text: [
        "Upto 80% off on Watches",
        "Upto 50% off on Superbottoms baby diaper products",
        "Up to 65% off on Boult Audio",
        "Kitchen & Bath accessories",
        "Vivo Y20 | Y20i",
        "Mobile Accessories from Jabra, Urbn & More",
        "Laptops Sale | Upto 45% Off",
      ],
    },
    may12: {
      title: "Deals from May 12 2021",
      links: [
        "https://amzn.to/3fe5pjK",
        "https://amzn.to/3xYRGG5",
        "https://amzn.to/3hoO7CW",
        "https://amzn.to/3uGb7RU",
        "https://amzn.to/3vUjhGk",
        "https://amzn.to/3f6KrmN",
        "https://amzn.to/3hnG9di",
      ],
      text: [
        "Cleaning Supplies",
        "Deal on Kitchen Products",
        "Printers for High Volume & Low Cost Priting|UP TO 30% Off",
        "Nokia 5310",
        "iPhone 12",
        "Laptops Sale | Upto 45% Off",
        "Power & Hand Tools",
      ],
    },
    may13: {
      title: "Deals from May 13 2021",
      links: [
        "https://amzn.to/33DXkPR",
        "https://amzn.to/2SHic6t",
        "https://amzn.to/2SLl1Ui",
        "https://amzn.to/3hsLYGJ",
        "https://amzn.to/3f6KrmN",
        "https://amzn.to/2RRnT1b",
        "https://amzn.to/3blnfzW",
      ],
      text: [
        "tucasa Vintage Metal Wall Clock-D8",
        "Up to 60% Off on Amazon Brands Cases & Covers",
        "Min 60% Off on Handbags",
        "Cameras & accessories starting at INR 375/-",
        "iPhone 12",
        "Deal on Home Appliances",
        "Upto 40% off on Sports Nutrition",
      ],
    },
    may14: {
      title: "Deals from May 14 2021",
      links: [
        "https://amzn.to/3htnQn8",
        "https://amzn.to/3ycBJfm",
        "https://amzn.to/3uMUDre",
        "https://amzn.to/3hrmh9k",
        "https://amzn.to/3bo8Nr0",
        "https://amzn.to/3fgfjBt",
        "https://amzn.to/3fcHCk6",
      ],
      text: [
        "Lava Z2 Max",
        "Up to 50% off on Coffee Mugs",
        "Upto 40% off on Pantry Beauty Essentials",
        "Upto 80% off on Mens Boxers, Briefs,Vests & Socks",
        "Men's Apparel | Amazon Brand - Symbol, Diverse & more",
        "Women's Apparel | Amazon Brand - Symbol, Eden & Ivy & more",
        "Vivo Y20 | Y20i | Starting INR 11490",
      ],
    },
    may15: {
      title: "Deals from May 15 2021",
      links: [
        "https://amzn.to/2RVkkaq",
        "https://amzn.to/3yfDXdQ",
        "https://amzn.to/3fm8e2g",
        "https://amzn.to/3btAEGq",
        "https://amzn.to/3hw1rFM",
        "https://amzn.to/3w8NX6S",
        "https://amzn.to/2RcZS56",
      ],
      text: [
        "Pantry Beauty Sale",
        "Min 60%-80% Off On Sarees, Dress Material and more",
        "From Rs. 299: Lehengas, Blouses & Dress Materials",
        "Min 60% Off on Handbags",
        "Upto 50% Off: Gardening & Outdoor Best Sellers",
        "upto 60% off on Wodden products",
        "Camping and Outdoor : Min 15% off",
      ],
    },
    may16: {
      title: "Deals from May 16 2021",
      links: [
        "https://amzn.to/2QlaTAG",
        "https://amzn.to/3uWHITC",
        "https://amzn.to/3hqkxNH",
        "https://amzn.to/33Q5iFL",
        "https://amzn.to/3hqkl0V",
        "https://amzn.to/33JHPGh",
        "https://amzn.to/3uSQ6Ue",
      ],
      text: [
        "Designer Sarees Min 80% Off",
        "Men's Footwear",
        "Kid's Apparel",
        "Min 60%-80% off on Women's Kurtis & Kurta Sets",
        "Treadmill : Minimum 40% off",
        "Deal on Kitchen Appliances",
        "Cycles | Starting at Rs. 2,699",
      ],
    },
    may17: {
      title: "Deals from May 17 2021",
      links: [
        "https://amzn.to/3ontlVY",
        "https://amzn.to/3uSiJ3K",
        "https://amzn.to/3byNvXX",
        "https://amzn.to/3eBOF6Y",
        "https://amzn.to/3obu4cJ",
        "https://amzn.to/2RVkkaq",
        "https://amzn.to/2RgyIdC",
      ],
      text: [
        "Samsung Galaxy S20",
        "75 years of JBL",
        "Tecno Spark 7",
        "Up To 30% Off On Grocery Essentials",
        "Dry Fruits",
        "Pantry Beauty Sale",
        "Upto 80% off on Watches",
      ],
    },
    may18: {
      title: "Deals from May 18 2021",
      links: [
        "https://amzn.to/3wrSG43",
        "https://amzn.to/3fudjp0",
        "https://amzn.to/3bwLMT2",
        "https://amzn.to/3on6UjK",
        "https://amzn.to/3ykhLiT",
        "https://amzn.to/3bvVcxN",
        "https://amzn.to/3ylNhwU",
      ],
      text: [
        "Up To 70% OFF on Smart Watches & IoT Devices",
        "Up to 40% off on Industrial and B2B Products",
        "Min 75% off on Wedding Jewelry collection",
        "Min 60% Off on Formal Shoes",
        "Home Lockers & Security Devices",
        "Upto 35% off on Perfect Gift options from Fujifilm",
        "Microphones, headphones & more from JBL & AKG starting at 999",
      ],
    },
    may19: {
      title: "Deals from May 19 2021",
      links: [
        "https://amzn.to/2SR3Gcr",
        "https://amzn.to/3v23Pbo",
        "https://amzn.to/3u6fLYs",
        "https://amzn.to/3hCP9vA",
        "https://amzn.to/2Sa7UeM",
        "https://amzn.to/3uZJqDS",
        "https://amzn.to/3eZirm2",
      ],
      text: [
        "Itel Vision 2",
        "Upto 65% off on monitors",
        "Deal on Home Appliances",
        "Power & Hand Tools",
        "Nokia 5310",
        "Upto 40% off on Fossil, Titan, Fastrack & more",
        "Dry Fruits",
      ],
    },
    may20: {
      title: "Deals from May 20 2021",
      links: [
        "https://amzn.to/3f3njXC",
        "https://amzn.to/3eYR2AN",
        "https://amzn.to/3u4wOtC",
        "https://amzn.to/3u0x9xv",
        "https://amzn.to/3ysmzTi",
        "https://amzn.to/3u3YBdU",
        "https://amzn.to/3fMwyuv",
      ],
      text: [
        "Xtore Fingertip Pulse Oximeter",
        "Up to 65% off on Camera Devices & Accessories",
        "Digital & SmartWatches starting from 699",
        "Up to 65% off on Electronic Devices & Accessories",
        "Upto 45% off on baby products by R&R",
        "Printers for High Volume & Low Cost Priting|UP TO 50% Off",
        "Kitchen & Bath accessories",
      ],
    },
    may21: {
      title: "Deals from May 21 2021",
      links: [
        "https://amzn.to/34gKaZD",
        "https://amzn.to/3oCf1cr",
        "https://amzn.to/3bHKRz7",
        "https://amzn.to/3yu6g8v",
        "https://amzn.to/2Rzzane",
        "https://amzn.to/2RBo4Or",
        "https://amzn.to/3yrH6Y9",
      ],
      text: [
        "Laptops Powered by Intel Core i5 and i7 Processors",
        "iPhone 12 Mini | Starting Rs. 60900",
        "Top Deal from Mivi, Urbn and Jabra Accessories",
        "Power & Hand Tools",
        "Deal on Kitchen Products",
        "Upto 80% off on Watches",
        "Up to 50% off on Headphones and Speakers from Blaupunkt",
      ],
    },
    may22: {
      title: "Deals from May 22 2021",
      links: [
        "https://amzn.to/3yygchi",
        "https://amzn.to/3vcUXQ3",
        "https://amzn.to/3fzJNyw",
        "https://amzn.to/345KPN9",
        "https://amzn.to/3hMCxlA",
        "https://amzn.to/2RCin2V",
        "https://amzn.to/346dzWb",
      ],
      text: [
        "AGARO Prime 800 Watts Garment Steamer",
        "Sports Bestsellers | Starting at Rs. 225",
        "Min 60% Off on Men's Sandals",
        "Vivo Y11 | Get Earphones at Rs. 99",
        "Best Selling TVs at Discount| Limited time offer",
        "Intel Core i5 and i7 Laptops",
        "Handbags and combos",
      ],
    },
    may23: {
      title: "Deals from May 23 2021",
      links: [
        "https://amzn.to/349LhKs",
        "https://amzn.to/2SlCRg9",
        "https://amzn.to/2QH8QXQ",
        "https://amzn.to/349NeXm",
        "https://amzn.to/3bN0BAU",
        "https://amzn.to/34bIMam",
        "https://amzn.to/3fcuY5L",
      ],
      text: [
        "Womens Tops, T-shirts, Jeans, Trackpants, Leggings under 499/-",
        "Up to 70% Off on Suitcases and Travel accessories",
        "Upto 70% off on Kids & Baby Clothing",
        "Upto 45% off on Automotive accessories",
        "Designer Sarees Upto 90% Off",
        "Men's Apparel",
        "Samsung Galaxy S20",
      ],
    },
    may24: {
      title: "Deals from May 24 2021",
      links: [
        "https://amzn.to/3ffW4t2",
        "https://amzn.to/3vkTxmM",
        "https://amzn.to/3bPplsi",
        "https://amzn.to/34boJJg",
        "https://amzn.to/3fgebi8",
        "https://amzn.to/34aJEfv",
        "https://amzn.to/3uf7GAC",
      ],
      text: [
        "Deal on Kitchen Appliances",
        "Upto 40% off on DearJoy baby products",
        "Designer Sarees Upto 90% Off",
        "Nokia 5310",
        "Grocery Essentials",
        "Top deals on pTron Mobile Accessories & more",
        "Intel Core i5 & i7 Laptops",
      ],
    },
    may25: {
      title: "Deals from May 25 2021",
      links: [
        "https://amzn.to/3vj5zx9",
        "https://amzn.to/3ui7Wiq",
        "https://amzn.to/2QNfxHU",
        "https://amzn.to/3vpIpVW",
        "https://amzn.to/34lCbtX",
        "https://amzn.to/3oOsRsb",
        "https://amzn.to/3fNjl4B",
      ],
      text: [
        "Upto 70% off on Artificial Flowers and Plants",
        "Bathla Spic & Span Multi Purpose Micro Fiber Cleaning Cloth",
        "Upto 50% off on Motorbike accessories & parts",
        "Little Angel Diapers",
        "Mobile Accessories from Oppo, Zinq & more",
        "Boat Headphones and Speakers up to 60% off",
        "Oppo F17 | Extra Rs. 3000 Apay Cashback+Coupon Discount",
      ],
    },
    may26: {
      title: "Deals from May 26 2021",
      links: [
        "https://amzn.to/34mR9jm",
        "https://amzn.to/3wyMIOO",
        "https://amzn.to/34iwHAh",
        "https://amzn.to/3umVX39",
        "https://amzn.to/3bUk56H",
        "https://amzn.to/3vsqmOI",
        "https://amzn.to/2RK7hsA",
      ],
      text: [
        "Best Ever prices on OnePlus Mobile Accessories and More",
        "Up to 70% off on Amazon Brand Sports Products",
        "Oppo F17 | Extra Rs. 3000 Apay Cashback+Coupon Discount",
        "Nokia C3 Android 10 Smartphone",
        "Upto 70% off on Artificial Flowers and Plants",
        "Gaming Accessories upto 50% off",
        "Men's Apparel | Amazon Brand - Symbol, Diverse & more",
      ],
    },
    may27: {
      title: "Deals from May 27 2021",
      links: [
        "https://amzn.to/2Tof6Vt",
        "https://amzn.to/2RHd0zG",
        "https://amzn.to/3floRw5",
        "https://amzn.to/3wAjcrH",
        "https://amzn.to/3fqc5fT",
        "https://amzn.to/2RHdeXy",
        "https://amzn.to/3bTpUB9",
      ],
      text: [
        "Up to 65% Off on Musical Instruments & Accessories",
        "Samsung Galaxy A21s",
        "Xtore Breathable Cotton Mask",
        "Upto 80% off on Watches",
        "Upto 40% off on LittleOne's baby products",
        "Up to 65% Off on Top Branded Headphones & Speakers",
        "Up to 60% Off on Camera Devices & Accessories",
      ],
    },
    may28: {
      title: "Deals from May 28 2021",
      links: [
        "https://amzn.to/2R3cThs",
        "https://amzn.to/2R3cL1s",
        "https://amzn.to/2SBt0mR",
        "https://amzn.to/3usRQCG",
        "https://amzn.to/3oVFBgL",
        "https://amzn.to/2SBtklz",
        "https://amzn.to/3fr6FkQ",
      ],
      text: [
        "HP Brand Days | Upto INR 30000 Off on Laptops, Printers & more",
        "Up to 60% off on Amazon Brands Appliances and Kitchen Products",
        "Gaming Accessories upto 50% off",
        "Up to 25% off on household essentials - Pantry",
        "Nokia C3 | All-Day Battery and Fingerprint Sensor",
        "Men's footwear",
        "Digital & SmartWatches starting from 699",
      ],
    },
    may29: {
      title: "Deals from May 29 2021",
      links: [
        "https://amzn.to/3oZ8hFH",
        "https://amzn.to/3vBiyu3",
        "https://amzn.to/34xb5jC",
        "https://amzn.to/2SGZNGQ",
        "https://amzn.to/3uvZFYi",
        "https://amzn.to/3c2vt0m",
        "https://amzn.to/3vxIHtM",
      ],
      text: [
        "Upto INR 80000 Off on ASUS All in One Desktops and Gaming Towers",
        "Upto 70% off on Kids & Baby Clothing by Hopscotch, Minicult and other top brands",
        "Best sellers Cricket : Strating at 79",
        "Handbags and combos",
        "Upto 60% of on Vehicle Tools & Parts",
        "Womens Tops, T-shirts, Jeans, Trackpants, Leggings under 499/-",
        "Upto 50% Off: Gardening Essentials",
      ],
    },
    may30: {
      title: "Deals from May 30 2021",
      links: [
        "https://amzn.to/2R8zZDo",
        "https://amzn.to/3gaTbJh",
        "https://amzn.to/3p3yhPZ",
        "https://amzn.to/3p4youP",
        "https://amzn.to/2SDXapB",
        "https://amzn.to/34ucl7d",
        "https://amzn.to/3fxD2hK",
      ],
      text: [
        "AmazonBasics Large Appliances Starting at Rs.4225",
        "Upto 45% off on Automotive accessories",
        "Up to 10% off on Pet Food and Treats.",
        "Up to 60% Off on Musical Instruments & Accessories",
        "UP TO 60% Off On High Speed WiFi Routers",
        "Upto 50% off on Laptop Backpack and Sleeves",
        "Up to 65% off on Electronic Devices & Accessories",
      ],
    },
    may31: {
      title: "Deals from May 31 2021",
      links: [
        "https://amzn.to/3fxSESr",
        "https://amzn.to/3uBCifU",
        "https://amzn.to/3fyFaWs",
        "https://amzn.to/3fyFc0w",
        "https://amzn.to/3fxDVXw",
        "https://amzn.to/34uZeTt",
        "https://amzn.to/2R7VxQz",
      ],
      text: [
        "Top Deal from Jabra , Ambrane & Mivi Mobile Accessories",
        "Dry Fruits",
        "Upto INR 80000 Off on ASUS All in One Desktops and Gaming Towers",
        "Maono Microphones, Interfaces & Accessories at 50% off",
        "Kitchen & Bath accessories",
        "Itel Feature Phones | Starting Rs. 815",
        "Deal on Home Appliances",
      ],
    },
    june01: {
      title: "Deals from June 01 2021",
      links: [
        "https://amzn.to/3uFGZFg",
        "https://amzn.to/3fIAM7D",
        "https://amzn.to/3pg1GXy",
        "https://amzn.to/3vH2N4G",
        "https://amzn.to/3vEhVjB",
        "https://amzn.to/34yF2jk",
        "https://amzn.to/3p6xq1b",
      ],
      text: [
        "Baby Diapers, Wipes & FMCG",
        "Top Deals on Moblies Accessories",
        "AmazonBasics AAA Performance Alkaline Non-Rechargeable Batteries (8-Pack)",
        "Superfoods-Seeds(Chia,Pumpkin,Flax,Sunflower)",
        "Digital & SmartWatches starting from 699",
        "VMart Women Printed Sweetheart Neck Top",
        "Vivo Y20 | Y20i | Starting INR 11490",
      ],
    },
    june02: {
      title: "Deals from June 02 2021",
      links: [
        "https://amzn.to/34BDWDC",
        "https://amzn.to/3pcPUwP",
        "https://amzn.to/3fZlBpu",
        "https://amzn.to/3g4mbSG",
        "https://amzn.to/3pcQ6Mz",
        "https://amzn.to/3g0AlUR",
        "https://amzn.to/3iaKEIB",
      ],
      text: [
        "UP TO 60% Off On High Speed WiFi Routers",
        "Deals on Butterfly Kitchen Products",
        "Chocolates, Snacks & Gifting",
        "Baby Diapers, Wipes & FMCG",
        "Up to 50% off on Video Games & Accessories",
        "Mobile Accessories Upto 70% Off from URBN & more",
        "Kitchen & Bath accessories",
      ],
    },
    june03: {
      title: "Deals from June 03 2021",
      links: [
        "https://amzn.to/3yWhnYj",
        "https://amzn.to/3uLs4JV",
        "https://amzn.to/3pgNhKx",
        "https://amzn.to/2RgqGBd",
        "https://amzn.to/2RXDk8P",
        "https://amzn.to/34FsSFp",
        "https://amzn.to/2RhUxtb",
      ],
      text: [
        "Best Selling Cameras & Accessories from INR 2399",
        "Upto 35% off on Bestselling Tablets",
        "Philips and more Moblies Accessories Upto 50% Off",
        "AmazonBasics Nylon Braided USB A to Lightning Compatible Cable",
        "Max Fashion: Upto 50% Off",
        "Up to 50% Off on Plant Fertilizers & Ceramic pots from Lazy Gardener",
        "Upto 40% Off On Handpicked Laptops and Desktops",
      ],
    },
    june04: {
      title: "Deals from June 04 2021",
      links: [
        "https://amzn.to/2THOUoY",
        "https://amzn.to/3phC5xo",
        "https://amzn.to/3z1puCU",
        "https://amzn.to/2S1Ajo0",
        "https://amzn.to/3wYlq4G",
        "https://amzn.to/3vPZnNh",
        "https://amzn.to/3z0iVjP",
      ],
      text: [
        "Top Deals on Mobile Accessories from OnePlus, URBN and more",
        "OPPO A74 5G | Flat Rs. 1750 HDFC Discount",
        "Grocery Essentials",
        "Nokia 5310",
        "Deals on Kitchen Products",
        "Upto 15% off on Helmets from Vega and Steelbird",
        "Activity tracker :Upto 40% off",
      ],
    },
    june05: {
      title: "Deals from June 05 2021",
      links: [
        "https://amzn.to/34QLl28",
        "https://amzn.to/3uNrUSk",
        "https://amzn.to/3vTOBpp",
        "https://amzn.to/2T3jNnh",
        "https://amzn.to/34QorrC",
        "https://amzn.to/3pksyFO",
        "https://amzn.to/34TUbvK",
      ],
      text: [
        "Upto 40% off on miniso products",
        "Upto 40% off on Home Storage",
        "Cases & Covers Upto 77% Off",
        "Upto 40% off on Beybee & OYO baby products",
        "Upto 60% off from Indian Decor",
        "CrossBeats Earphones & Wearables upto 60% Off",
        "Up to 50% off on Watering equipments",
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
      "https://amzn.to/2QThumo",
      "https://amzn.to/33oruGE",
      "https://amzn.to/3eYYJpA",
      "https://amzn.to/3uxYwAk",
      "https://amzn.to/33lRZfM",
      "https://amzn.to/3tAcxfz",
      "https://amzn.to/3vLnpIQ",
    ],
    texts: [
      "Maggi 2 Minutes Noodles Masala, 560g",
      "Harpic Disinfectant Toilet Cleaner Liquid",
      "Dettol Liquid Hand wash",
      "Scotch-Brite Scrub Pad",
      "Goodknight 100% Natural Mosquito Repellent Fabric Roll On",
      "Vim Dishwash Gel",
      "Vedaka Raw Peanuts",
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
      "https://amzn.to/3o00E11",
      "https://amzn.to/2PZgX1G",
      "https://amzn.to/33nRRNa",
      "https://amzn.to/2RyWUrn",
      "https://amzn.to/3tlpCco",
      "https://amzn.to/3eZa3lB",
      "https://amzn.to/3nV16O8",
    ],
    texts: [
      "Mixer grinders",
      "Kitchen Storage & Containers",
      "Kitchen & Dining Store",
      "Water Purifiers & Accessories",
      "Starting ₹99 | Dinnerware & Serveware",
      "Glassware & Drinkware",
      "Home & Kitchen Appliances",
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
      "https://amzn.to/3tlBTNW",
      "https://amzn.to/2R0vfj4",
      "https://amzn.to/2QZHRXH",
      "https://amzn.to/33mTPgB",
      "https://amzn.to/3utxQR8",
      "https://amzn.to/3enQfJk",
      "https://amzn.to/3b7709y",
    ],
    texts: [
      "Newborn Baby Store",
      "Premium Baby Store",
      "Natural care for your baby",
      "Baby Gift Store",
      "Baby Shower Store",
      "Baby Health Store",
      "Baby Products Categories",
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
      "https://amzn.to/3eqNzdU",
      "https://amzn.to/3tt0TD5",
      "https://amzn.to/3nVEqgB",
      "https://amzn.to/3tAdTa9",
      "https://amzn.to/2QSt1SX",
      "https://amzn.to/3nYJh0O",
      "https://amzn.to/2PV6eVQ",
    ],
    texts: [
      "Car & Vehicle Electronics",
      "Computers & Accessories",
      "Headphones",
      "Home Theater, TV & Video",
      "Mobiles & Accessories",
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
      "https://amzn.to/2RvSfX1",
      "https://amzn.to/3f4aCuc",
      "https://amzn.to/3nUpSOp",
      "https://amzn.to/2RyYdGN",
      "https://amzn.to/33kY4cn",
      "https://amzn.to/3nTi8MH",
      "https://amzn.to/3tt1EMr",
    ],
    texts: [
      "Stationery",
      "Calendars, Planners & Personal Organisers",
      "Calculators",
      "Envelopes & Postal Supplies",
      "Office Electronics",
      "Office Paper Products",
      "Office Supplies",
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
      "https://amzn.to/3tmfbW5",
      "https://amzn.to/3umHUv7",
      "https://amzn.to/3nU3Dbg",
      "https://amzn.to/3bazFut",
      "https://amzn.to/3hcfnoe",
      "https://amzn.to/3nW5rR1",
      "https://amzn.to/3eoZ6dO",
    ],
    texts: [
      "Shoes",
      "Shoe Care & Accessories",
      "Handbags, Purses & Clutches",
      "Women's Shoes",
      "Men's Shoes",
      "Girls' Shoes",
      "Boys' Shoes",
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
      "https://amzn.to/3uuexXE",
      "https://amzn.to/2Rvp5HI",
      "https://amzn.to/2PY3lDV",
      "https://amzn.to/3eTbim0",
      "https://amzn.to/3vNMQcS",
      "https://amzn.to/3nWZhA4",
      "https://amzn.to/3utzmCO",
    ],
    texts: [
      "Sofas & Couches",
      "Beds",
      "Desks & Workstations",
      "Tables",
      "Wall Shelves",
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
      "https://amzn.to/33qDDLn",
      "https://amzn.to/3xQVjO9",
      "https://amzn.to/2RyVcGt",
      "https://amzn.to/3enO7Bk",
      "https://amzn.to/3ervPiJ",
      "https://amzn.to/3nU084C",
      "https://amzn.to/3tpH5An",
      "https://amzn.to/3h4QniN",
      "https://amzn.to/3tqM6J8",
      "https://amzn.to/3evLlKF",
      "https://amzn.to/3nXqD9C",
      "https://amzn.to/33kUi2Q",
      "https://amzn.to/3nTDPfs",
      "https://amzn.to/3eqMumv",
      "https://amzn.to/3eZ8m7J",
      "https://amzn.to/3esz6OA",
      "https://amzn.to/3tlolC8",
      "https://amzn.to/33or03i",
      "https://amzn.to/3b99cgQ",
      "https://amzn.to/2PVWzyj",
    ],
    texts: [
      "Electronics",
      "Mobiles",
      "Computers & Accessories",
      "Car & Motorbike",
      "Sports, Fitness & Outdoors",
      "Fashion",
      "Pantry",
      "Appliances",
      "Baby",
      "Beauty",
      "Clothing & Accessories",
      "Furniture",
      "Home & Kitchen",
      "Jewellery",
      "Luggage & Bags",
      "Office",
      "Industrial & Scientific",
      "Watches",
      "Pet Supplies",
      "Softwares",
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

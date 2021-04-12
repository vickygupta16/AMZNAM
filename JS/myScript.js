function displayProducts(id) {
  const data = {
    march22: {
      title: "Deals from March 22 2021",
      links: [
        "https://amzn.to/3vPRV52",
        "https://amzn.to/3lEFNz2",
        "https://amzn.to/3sadIlQ",
        "https://amzn.to/3c8WVtW",
        "https://amzn.to/3lBgBtv",
      ],
      text: [
        "OPPO A31 (Mystery Black, 4GB RAM, 64GB Storage)",
        "New Apple iPhone 12 Mini (64GB) - Black",
        "Min 60% Off on women's handbags",
        "Upto 60% Off on Sumeet Stainless Steel & Non- Stick Cookware",
        "Furniture",
      ],
    },
    march23: {
      title: "Deals from March 23 2021",
      links: [
        "https://amzn.to/3scv8OE",
        "https://amzn.to/2OWzMBW",
        "https://amzn.to/2NIttRX",
        "https://amzn.to/3lEAgsz",
        "https://amzn.to/3cctpTV",
      ],
      text: [
        "Amazon Brand - Myx, Tavasya, Indigo & more",
        "Upto 50% Off on Jabra & Amabrane",
        "Nokia 3.4 (Charcoal, 4GB RAM, 64GB Storage)",
        "Min 60% Off on Womens footwear, Eden & Ivy, Flavia",
        "Upto 50% off on Robotic Vacuums Cleaners",
      ],
    },
    march24: {
      title: "Deals from March 24 2021",
      links: [
        "https://amzn.to/3lJvtWR",
        "https://amzn.to/3rq8AsN",
        "https://amzn.to/31qNHmJ",
        "https://amzn.to/3rfNayf",
        "https://amzn.to/2NNjJWJ",
      ],
      text: [
        "iPhone 12 mini | Extra Rs. 6000 off with HDFC Cards",
        "Up to 40% off on Sony Headphones and speakers",
        "Amazon Brand - Inkast, Symbol & more",
        "Upto 35% off on Bestselling Tablets & Smartwatches",
        "Upto 55% off on Gaming Monitors",
      ],
    },
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
      "https://amzn.to/3d8njEt",
      "https://amzn.to/3wPYKUX",
      "https://amzn.to/3s8Ap99",
      "https://amzn.to/2QjslVH",
      "https://amzn.to/3uCWqyo",
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

window.onload = function () {
  //document.addEventListener("contextmenu", (event) => event.preventDefault());
  setPantryList();
  setKitchenApplianceList();
  setBabyProductsList();
  setElectronicsList();
};

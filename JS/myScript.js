function displayProducts(id) {
  const data = {
    may07: {
      title: "Deals from May 07 2021",
      links: [
        "https://amzn.to/3uvQ98b",
        "https://amzn.to/3vNeYg3",
        "https://amzn.to/3eqJZAu",
        "https://amzn.to/3eYp1YU",
        "https://amzn.to/3tsnYWc",
        "https://amzn.to/3usCheZ",
        "https://amzn.to/3nUminr",
      ],
      text: [
        "Starting INR 129 | Mobile Accessories from Top Brands",
        "Up to 50% off on Headphones and Speakers",
        "Deal on Gas Stoves & Cookware",
        "Cycles | Starting at Rs. 2,699",
        "Up to 65% off on Electronic Devices & Accessories",
        "Upto 50% off on Biking Gear",
        "Upto 65% off On Fiction Non Fiction And Children Books",
      ],
    },
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

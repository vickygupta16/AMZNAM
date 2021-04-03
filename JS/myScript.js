var mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

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
  };
  //<li class="list-group-item"><a target="_blank" href="https://amzn.to/39iIEZx"><span class="oldDealTitle">Coolpad Cool 6</span></a></li>
  for (var key in data) {
    if (key == id) {
      //alert(data[key].links.length + " " + data[key].text.length);
      var i = 0;
      var code = "";
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
    }
  }
  //alert(id + " " + Object.keys(data).length);
}

window.onload = function () {
  document.addEventListener("contextmenu", (event) => event.preventDefault());
};

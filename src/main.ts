import "./scss/style.scss";
import "./scss/_products.scss";

const headphonesArticle = document.querySelector(".headphones");

const mockData = [
  { img: "https://th.bing.com/th/id/OIP.diQ0mZXVgP1hEVLVYBGekQHaKR?w=137&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7", title: "Pink Bose", price: "$99.99" },
  { img: "https://th.bing.com/th/id/OIP.rAMTGHyyjcQYqHvxFXmeqQHaHa?w=199&h=200&c=7&r=0&o=5&dpr=1.5&pid=1.7", title: "Sony X34567", price: "$149.99" },
  { img: "https://th.bing.com/th/id/OIP.bErH7h6-6X4ugwOKueWmUwHaHj?w=204&h=209&c=7&r=0&o=5&dpr=1.5&pid=1.7", title: "Elgiganten budget headphones", price: "$199.99" },
  { img: "https://th.bing.com/th/id/OIP.uZK10usDLqvFZr4a867xewHaIq?w=154&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7", title: "Headphones Model 345", price: "$249.99" },
  { img: "https://th.bing.com/th/id/OIP.eA2w3j7BAZ_AJQp5HfQn5gHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7", title: "HI-FI Headphones", price: "$299.99" },
  { img: "https://th.bing.com/th/id/OIP.6WZHCb9rVStvjjH43x9kXQHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7", title: "Beats by Dre", price: "$349.99" },
  { img: "https://th.bing.com/th/id/OIP.ZmblVvwVc_QKRUZrOioOJwHaHg?w=146&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7", title: "Airpods Max", price: "$399.99" },
  { img: "https://th.bing.com/th/id/OIP.Pe1_3ldYRRwfkJOlDq7eDgHaLx?w=119&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7", title: "Samsung Headphones", price: "$449.99" },
];

//Måste skapa en interface och byta ut any
const createHeadphones = (data: any) => {
  const headphonesContainer = document.createElement("div");
  headphonesContainer.classList.add("headphones-container");

  const headphonesImg = document.createElement("img");
  headphonesImg.classList.add("headphones-img");
  headphonesImg.src = data.img;
  headphonesImg.alt = data.title;

  const headphonesTitle = document.createElement("h2");
  headphonesTitle.classList.add("headphones-title");
  headphonesTitle.textContent = data.title;

  const priceContainer = document.createElement("div");
  priceContainer.classList.add("price-container");

  const headphonesPrice = document.createElement("p");
  headphonesPrice.classList.add("headphones-price");
  headphonesPrice.textContent = data.price;

  const addToCartBtn = document.createElement("button");
  addToCartBtn.classList.add("add-btn");
  addToCartBtn.innerHTML = "Add To Cart";

  priceContainer.appendChild(headphonesPrice);
  priceContainer.appendChild(addToCartBtn);

  headphonesContainer.appendChild(headphonesImg);
  headphonesContainer.appendChild(headphonesTitle);
  headphonesContainer.appendChild(priceContainer);
  headphonesArticle?.appendChild(headphonesContainer);
};

mockData.forEach((item) => createHeadphones(item));

import "./scss/style.scss";

const headphonesArticle = document.querySelector(".headphones");

const mockData = [
  { img: "img1.jpg", title: "Headphones Model A", price: "$99.99" },
  { img: "img2.jpg", title: "Headphones Model B", price: "$149.99" },
  { img: "img3.jpg", title: "Headphones Model C", price: "$199.99" },
  { img: "img4.jpg", title: "Headphones Model D", price: "$249.99" },
  { img: "img5.jpg", title: "Headphones Model E", price: "$299.99" },
  { img: "img6.jpg", title: "Headphones Model F", price: "$349.99" },
  { img: "img7.jpg", title: "Headphones Model G", price: "$399.99" },
  { img: "img8.jpg", title: "Headphones Model H", price: "$449.99" },
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

  const headphonesPrice = document.createElement("p");
  headphonesPrice.classList.add("headphones-price");
  headphonesPrice.textContent = data.price;

  const addToCartBtn = document.createElement("button");
  addToCartBtn.classList.add("add-btn");
  addToCartBtn.innerHTML = "Add To Cart";

  headphonesContainer.appendChild(headphonesImg);
  headphonesContainer.appendChild(headphonesTitle);
  headphonesContainer.appendChild(headphonesPrice);
  headphonesContainer.appendChild(addToCartBtn);
  headphonesArticle?.appendChild(headphonesContainer);
};

mockData.forEach((item) => createHeadphones(item));

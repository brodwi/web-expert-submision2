import "regenerator-runtime";
import "../styles/main.css";
import "../scripts/components/nav-bar";
import data from "../public/api/DATA.json";

const renderRestaurants = (restaurants) => {
  let dataList = "";
  restaurants.forEach((restaurant) => {
    const { name, pictureId, city, rating, description } = restaurant;
    dataList += `
      <div class="list-item">
        <img class="thumb-list" src="${pictureId}" alt="${name}" title="${name}">
        <div class="city">${city}</div>
        <div class="item-content">
          <p class="item-rating">
            Rating: <a href="#" class="item-rating-value">${rating}</a>
          </p>
          <h1 class="item-title"><a href="#">${name}</a></h1>
          <div class="desc-list">${description.slice(0, 150)}...</div>
        </div>
      </div>
    `;
  });
  document.querySelector("#exp-resto").innerHTML = dataList;
};

renderRestaurants(data.restaurants);

const menu = document.querySelector("#menu");
const hero = document.querySelector(".jumbotron");
const main = document.querySelector("main");
const drawer = document.querySelector("#wrapper");

const toggleDrawer = () => {
  drawer.classList.toggle("open");
};

menu.addEventListener("click", (event) => {
  toggleDrawer();
  event.stopPropagation();
});

hero.addEventListener("click", () => {
  drawer.classList.remove("open");
});

main.addEventListener("click", () => {
  drawer.classList.remove("open");
});
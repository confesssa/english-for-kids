import "./js/cardsData.js";
import { showCloseMenu, closeMenuOverlay } from "./js/hideMenu.js";
import { renderCategories } from "./js/renderCategoryCards.js";
import "./js/renderWordCards.js";
import "./js/switchMode.js";

const body = document.querySelector("body");
const burgerBtn = document.querySelector("#burger-btn");

burgerBtn.addEventListener("click", showCloseMenu);
body.addEventListener("mouseup", closeMenuOverlay);

window.onload = renderCategories;

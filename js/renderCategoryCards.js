import cards from "./cardsData.js";
import renderWordsCard from "./renderWordCards.js";

let wordsList;
function renderCategories() {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  const fragment = new DocumentFragment();

  const containerCategories = document.createElement("div");
  containerCategories.classList.add("containerCategories");

  const categoriesList = cards[0];

  for (let i = 0; i < categoriesList.length; i++) {
    const categoryCard = document.createElement("div");
    categoryCard.classList.add("categoryCard");
    categoryCard.id = categoriesList[i];

    const cardImage = document.createElement("img");
    cardImage.classList.add("categoryCard-image");
    cardImage.src = cards[i + 1][0].image;
    cardImage.id = categoriesList[i];

    const cardTitle = document.createElement("p");
    cardTitle.id = categoriesList[i];
    cardTitle.textContent = categoriesList[i];

    categoryCard.append(cardImage, cardTitle);
    fragment.append(categoryCard);
  }

  containerCategories.append(fragment);
  container.append(containerCategories);

  containerCategories.addEventListener("click", (e) => {
    let elements = document.querySelectorAll(".menu-item");
    elements.forEach((el) => el.classList.remove("menu-item-active"));
    elements[
      categoriesList.findIndex((el) => el === e.target.id) + 1
    ].classList.add("menu-item-active");
    wordsList = cards[categoriesList.findIndex((el) => el === e.target.id) + 1];

    renderWordsCard();
  });
}

export { renderCategories, wordsList };

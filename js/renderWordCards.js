import { wordsList } from "./renderCategoryCards.js";

export default function renderWordsCard() {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  const fragment = new DocumentFragment();

  for (let i = 0; i < wordsList.length; i++) {
    const wordCard = document.createElement("div");
    wordCard.classList.add("card");

    const wordCardAudio = document.createElement("audio");
    wordCardAudio.src = wordsList[i].audioSrc;

    const flipCardInner = document.createElement("div");
    flipCardInner.classList.add("flip-card-inner");
    wordCard.append(flipCardInner, wordCardAudio);

    const flipCardFront = document.createElement("div");
    flipCardFront.classList.add("flip-card-front");

    const flipCardBack = document.createElement("div");
    flipCardBack.classList.add("flip-card-back");
    flipCardInner.append(flipCardFront, flipCardBack);

    const cardImageFront = document.createElement("img");
    cardImageFront.classList.add("card-image");
    cardImageFront.src = wordsList[i].image;

    const cardTitleFront = document.createElement("div");
    cardTitleFront.classList.add("card-title");
    flipCardFront.append(cardImageFront, cardTitleFront);

    const cardImageBack = document.createElement("img");
    cardImageBack.classList.add("card-image-back");
    cardImageBack.src = wordsList[i].image;

    const cardTitleBack = document.createElement("div");
    cardTitleBack.classList.add("card-title");
    flipCardBack.append(cardImageBack, cardTitleBack);

    const wordCardTextBack = document.createElement("p");
    wordCardTextBack.textContent = wordsList[i].translation;
    cardTitleBack.append(wordCardTextBack);

    const wordCardTextFront = document.createElement("p");
    wordCardTextFront.textContent = wordsList[i].word;

    const wordCardIcon = document.createElement("img");
    wordCardIcon.src = "./Assets/icon/rotate.png";
    wordCardIcon.classList.add("card-icon");
    cardTitleFront.append(wordCardTextFront, wordCardIcon);

    wordCardIcon.addEventListener("click", rotateWordCard);
    wordCard.addEventListener("click", playAudio);
    wordCard.addEventListener("mouseleave", rotateWordCardBack);

    function playAudio() {
      wordCardAudio.play();
    }

    function rotateWordCard(e) {
      e.stopPropagation();
      flipCardInner.classList.add("flip-card-inner-active");
    }

    function rotateWordCardBack() {
      flipCardInner.classList.remove("flip-card-inner-active");
    }

    fragment.appendChild(wordCard);
  }
  container.append(fragment);
}

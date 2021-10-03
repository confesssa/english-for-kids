const cards = [
  [
    "Action",
    "Animals",
    "Clothes",
    "Emotions",
    "Fruits",
    "Vegetables",
    "Family",
    "House",
  ],
  [
    {
      word: "dive",
      translation: "нырять",
      image: "Assets/images/dive.jpg",
      audioSrc: "./Assets/audio/dive.mp3",
    },
    {
      word: "fly",
      translation: "летать",
      image: "Assets/images/fly.jpg",
      audioSrc: "./Assets/audio/fly.mp3",
    },
    {
      word: "hug",
      translation: "обнимать",
      image: "Assets/images/hug.jpg",
      audioSrc: "./Assets/audio/hug.mp3",
    },
    {
      word: "jump",
      translation: "прыгать",
      image: "Assets/images/jump.jpg",
      audioSrc: "./Assets/audio/jump.mp3",
    },
    {
      word: "open",
      translation: "открывать",
      image: "Assets/images/open.jpg",
      audioSrc: "Assets/audio/open.mp3",
    },
    {
      word: "run",
      translation: "бегать",
      image: "Assets/images/run.jpg",
      audioSrc: "Assets/audio/run.mp3",
    },
    {
      word: "sing",
      translation: "петь",
      image: "./Assets/images/sing.jpg",
      audioSrc: "Assets/audio/sing.mp3",
    },
    {
      word: "swim",
      translation: "плавать",
      image: "./Assets/images/swim.jpg",
      audioSrc: "Assets/audio/swim.mp3",
    },
  ],
  [
    {
      word: "cat",
      translation: "кот",
      image: "./Assets/images/cat.jpg",
      audioSrc: "./Assets/audio/cat.mp3",
    },
    {
      word: "chicken",
      translation: "курица",
      image: "./Assets/images/chicken.jpg",
      audioSrc: "Assets/audio/chicken.mp3",
    },
    {
      word: "dog",
      translation: "собака",
      image: "./Assets/images/dog.jpg",
      audioSrc: "Assets/audio/dog.mp3",
    },
    {
      word: "horse",
      translation: "лошадь",
      image: "./Assets/images/horse.jpg",
      audioSrc: "Assets/audio/horse.mp3",
    },
    {
      word: "bird",
      translation: "птица",
      image: "./Assets/images/bird.jpg",
      audioSrc: "Assets/audio/bird.mp3",
    },
    {
      word: "giraffe",
      translation: "жирафа",
      image: "./Assets/images/giraffe.jpg",
      audioSrc: "Assets/audio/giraffe.mp3",
    },
    {
      word: "lion",
      translation: "лев",
      image: "./Assets/images/lion.jpg",
      audioSrc: "Assets/audio/lion.mp3",
    },
    {
      word: "dolphin",
      translation: "дельфин",
      image: "./Assets/images/dolphin.jpg",
      audioSrc: "Assets/audio/dolphin.mp3",
    },
  ],
  [
    {
      word: "skirt",
      translation: "юбка",
      image: "./Assets/images/skirt.jpg",
      audioSrc: "Assets/audio/skirt.mp3",
    },
    {
      word: "pants",
      translation: "брюки",
      image: "./Assets/images/pants.jpg",
      audioSrc: "Assets/audio/pants.mp3",
    },
    {
      word: "blouse",
      translation: "блузка",
      image: "./Assets/images/blouse.jpg",
      audioSrc: "Assets/audio/blouse.mp3",
    },
    {
      word: "dress",
      translation: "платье",
      image: "./Assets/images/dress.jpg",
      audioSrc: "Assets/audio/dress.mp3",
    },
    {
      word: "boot",
      translation: "ботинок",
      image: "./Assets/images/boot.jpg",
      audioSrc: "Assets/audio/boot.mp3",
    },
    {
      word: "shirt",
      translation: "рубашка",
      image: "./Assets/images/shirt.jpg",
      audioSrc: "Assets/audio/shirt.mp3",
    },
    {
      word: "coat",
      translation: "пальто",
      image: "./Assets/images/coat.jpg",
      audioSrc: "Assets/audio/coat.mp3",
    },
    {
      word: "shoe",
      translation: "туфли",
      image: "./Assets/images/shoe.jpg",
      audioSrc: "Assets/audio/shoe.mp3",
    },
  ],
  [
    {
      word: "laugh",
      translation: "смех",
      image: "./Assets/images/laugh.jpg",
      audioSrc: "Assets/audio/laugh.mp3",
    },
    {
      word: "angry",
      translation: "сердитый",
      image: "./Assets/images/angry.jpg",
      audioSrc: "Assets/audio/angry.mp3",
    },
    {
      word: "happy",
      translation: "счастливый",
      image: "./Assets/images/happy.jpg",
      audioSrc: "Assets/audio/happy.mp3",
    },
    {
      word: "tired",
      translation: "уставший",
      image: "./Assets/images/tired.jpg",
      audioSrc: "Assets/audio/tired.mp3",
    },
    {
      word: "surprised",
      translation: "удивлённый",
      image: "./Assets/images/surprised.jpg",
      audioSrc: "Assets/audio/surprised.mp3",
    },
    {
      word: "scared",
      translation: "испуганный",
      image: "./Assets/images/scared.jpg",
      audioSrc: "Assets/audio/scared.mp3",
    },
    {
      word: "smile",
      translation: "улыбка",
      image: "./Assets/images/smile.jpg",
      audioSrc: "Assets/audio/smile.mp3",
    },
    {
      word: "sad",
      translation: "грустный",
      image: "./Assets/images/sad.jpg",
      audioSrc: "Assets/audio/sad.mp3",
    },
  ],
  [
    {
      word: "strawberry",
      translation: "клубника",
      image: "./Assets/images/fruits-strawberry.jpg",
      audioSrc: "Assets/audio/fruits-strawberry.mp3",
    },
    {
      word: "watermelon",
      translation: "арбуз",
      image: "./Assets/images/fruits-watermelon.jpg",
      audioSrc: "Assets/audio/fruits-watermelon.mp3",
    },
    {
      word: "pears",
      translation: "груша",
      image: "./Assets/images/fruits-pears.jpg",
      audioSrc: "Assets/audio/fruits-pears.mp3",
    },
    {
      word: "orange",
      translation: "апельсин",
      image: "./Assets/images/fruits-orange.jpg",
      audioSrc: "Assets/audio/fruits-orange.mp3",
    },
    {
      word: "lemon",
      translation: "лимон",
      image: "./Assets/images/fruits-lemon.jpg",
      audioSrc: "Assets/audio/fruits-lemon.mp3",
    },
    {
      word: "kiwi",
      translation: "киви",
      image: "./Assets/images/fruits-kiwi.jpg",
      audioSrc: "Assets/audio/fruits-kiwi.mp3",
    },
    {
      word: "banana",
      translation: "банан",
      image: "./Assets/images/fruits-banana.jpg",
      audioSrc: "Assets/audio/fruits-banana.mp3",
    },
    {
      word: "apple",
      translation: "яблоко",
      image: "./Assets/images/fruits-apple.jpg",
      audioSrc: "Assets/audio/fruits-apple.mp3",
    },
  ],
  [
    {
      word: "pumpkin",
      translation: "тыква",
      image: "./Assets/images/vegetable-pumpkin.jpg",
      audioSrc: "./Assets/audio/vegetable-pumpkin.mp3",
    },
    {
      word: "broccoli",
      translation: "брокколи",
      image: "./Assets/images/vegetable-broccoli.jpg",
      audioSrc: "./Assets/audio/vegetable-broccoli.mp3",
    },
    {
      word: "cabbage",
      translation: "капуста",
      image: "./Assets/images/vegetable-cabbage.jpg",
      audioSrc: "Assets/audio/vegetable-cabbage.mp3",
    },
    {
      word: "carrot",
      translation: "морковь",
      image: "./Assets/images/vegetable-carrot.jpg",
      audioSrc: "Assets/audio/vegetable-carrot.mp3",
    },
    {
      word: "onion",
      translation: "лук",
      image: "./Assets/images/vegetable-onion.jpg",
      audioSrc: "Assets/audio/vegetable-onion.mp3",
    },
    {
      word: "beet",
      translation: "свекла",
      image: "./Assets/images/vegetable-beet.jpg",
      audioSrc: "Assets/audio/vegetable-beet.mp3",
    },
    {
      word: "paprika",
      translation: "паприка",
      image: "./Assets/images/vegetable-paprika.jpg",
      audioSrc: "Assets/audio/vegetable-paprika.mp3",
    },
    {
      word: "tomato",
      translation: "помидор",
      image: "./Assets/images/vegetable-tomato.jpg",
      audioSrc: "Assets/audio/vegetable-tomato.mp3",
    },
  ],
  [
    {
      word: "family",
      translation: "семья",
      image: "./Assets/images/family-family.jpg",
      audioSrc: "Assets/audio/family-family.mp3",
    },
    {
      word: "brother",
      translation: "брат",
      image: "./Assets/images/family-brother.jpg",
      audioSrc: "Assets/audio/family-brother.mp3",
    },
    {
      word: "father",
      translation: "отец",
      image: "./Assets/images/family-father.jpg",
      audioSrc: "./Assets/audio/family-father.mp3",
    },
    {
      word: "grandfather",
      translation: "дедушка",
      image: "./Assets/images/family-grandfather.jpg",
      audioSrc: "./Assets/audio/family-grandfather.mp3",
    },
    {
      word: "grandmother",
      translation: "бабушка",
      image: "./Assets/images/family-grandmother.jpg",
      audioSrc: "./Assets/audio/family-grandmother.mp3",
    },
    {
      word: "mother",
      translation: "мать",
      image: "./Assets/images/family-mother.jpg",
      audioSrc: "./Assets/audio/family-mother.mp3",
    },
    {
      word: "parents",
      translation: "родители",
      image: "./Assets/images/family-parents.jpg",
      audioSrc: "./Assets/audio/family-parents.mp3",
    },
    {
      word: "sister",
      translation: "сестра",
      image: "./Assets/images/family-sister.jpg",
      audioSrc: "./Assets/audio/family-sister.mp3",
    },
  ],
  [
    {
      word: "lamp",
      translation: "лампа",
      image: "./Assets/images/house-lamp.jpg",
      audioSrc: "./Assets/audio/house-lamp.mp3",
    },
    {
      word: "couch",
      translation: "диван",
      image: "./Assets/images/house-couch.jpg",
      audioSrc: "./Assets/audio/house-couch.mp3",
    },
    {
      word: "cupboard",
      translation: "шкаф",
      image: "./Assets/images/house-cupboard.jpg",
      audioSrc: "./Assets/audio/house-cupboard.mp3",
    },
    {
      word: "fridge",
      translation: "холодильник",
      image: "./Assets/images/house-fridge.jpg",
      audioSrc: "./Assets/audio/house-fridge.mp3",
    },
    {
      word: "bed",
      translation: "кровать",
      image: "./Assets/images/house-bed.jpg",
      audioSrc: "./Assets/audio/house-bed.mp3",
    },
    {
      word: "table",
      translation: "стол",
      image: "./Assets/images/house-table.jpg",
      audioSrc: "./Assets/audio/house-table.mp3",
    },
    {
      word: "television",
      translation: "телевизор",
      image: "./Assets/images/house-television.jpg",
      audioSrc: "./Assets/audio/house-television.mp3",
    },
    {
      word: "window",
      translation: "окно",
      image: "./Assets/images/house-window.jpg",
      audioSrc: "./Assets/audio/house-window.mp3",
    },
  ],
]; // Иван, здесь я вынуждена была продублировать массив с данными,
// потому что импорт почему-то не работал. Если тебе очевидно, в
// чем проблема с импортами - расскажи, пожалуйста

function renderWordsCard() {
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

    wordCard.addEventListener("click", playAudio);
    wordCardIcon.addEventListener("click", rotateWordCard);
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
} // Иван, аналогично здесь

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
} // Иван, и здесь

const body = document.querySelector("body");
const burgerBtn = document.querySelector("#burger-btn");
const menu = document.querySelector("#menu");

menu.addEventListener("click", hideMenu);

function hideMenu(e) {
  if (!e.target.id) {
    // Иван, в открывшемся меню есть "слепая зона" на уровне кнопки открытия/закрытия меню,
    // при нажатии на нее все рушится. В этой строке я пыталась задать исключение, чтобы меню
    // не реагировало на клик, но не получилось. Может есть идеи, в чем могло бы быть дело?
    return;
  }
  if (e.target.id === "0") {
    let elements = document.querySelectorAll(".menu-item");
    elements.forEach((el) => el.classList.remove("menu-item-active"));

    e.target.classList.add("menu-item-active");

    renderCategories();
  } else {
    let elements = document.querySelectorAll(".menu-item");
    elements.forEach((el) => el.classList.remove("menu-item-active"));

    e.target.classList.add("menu-item-active");
    wordsList = cards[e.target.id];

    renderWordsCard();
  }
}

export function showCloseMenu(event) {
  menu.classList.toggle("active");
  burgerBtn.classList.toggle("active");
}

export function closeMenuOverlay(event) {
  if (event.target != burgerBtn && event.target != menu) {
    menu.classList.remove("active");
    burgerBtn.classList.remove("active");
  }
}

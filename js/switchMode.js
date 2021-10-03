const toggle = document.querySelector(".toggle-wrapper");
const menu = document.querySelector("#menu");
const switchHandle = document.querySelector(".switch-handle");
const burgerBtn = document.querySelector("#burger-btn");
const categoryCard = document.querySelectorAll(".categoryCard");

export default function switchMode() {
  // Поскольку режим игры пока не реализован - у чекбокса стоит аргумент disabled
  toggle.addEventListener("change", () => {
    menu.classList.toggle("menu-play-mode");
    switchHandle.classList.toggle("switch-handle-play-mode");
    burgerBtn.classList.toggle("burger-btn-play-mode");
    categoryCard.forEach((el) => {
      // Иван, вот эта штука почему-то не работает. Это связано
      // с тем, что сама карточка categoryCard генерируется в цикле for, а не в forEach?
      el.classList.toggle("categoryCard-play-mode");
    });
  });
}

switchMode();

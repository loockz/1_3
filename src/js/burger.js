let btnBurger = document.querySelector(".burger");
let sidebar = document.querySelector(".sidebar");
let tint = document.querySelector(".sidebar-tint");
let profileMenu = document.querySelector(".profile--menu");

export default function burger() {
  btnBurger.addEventListener("click", function () {
    btnBurger.classList.toggle("burger--expanded");
    sidebar.classList.toggle("sidebar--expanded");
    tint.classList.toggle("sidebar-tint--hidden");
    profileMenu.classList.toggle("profile--hidden");
  });

  tint.addEventListener("click", function () {
    btnBurger.classList.toggle("burger--expanded");
    sidebar.classList.toggle("sidebar--expanded");
    tint.classList.toggle("sidebar-tint--hidden");
    profileMenu.classList.toggle("profile--hidden");
  });
}

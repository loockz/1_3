let expanderArticle = document.querySelector(".expander--article");
let article = document.querySelector(".article__text");

let expanderDeviceBrand = document.querySelector(".expander--device-brand");
let deviceBrand = document.querySelector(".items-list--device-brand");

let expanderDeviceType = document.querySelector(".expander--device-type");
let deviceType = document.querySelector(".items-list--device-type");

export default function expander() {
  expanderArticle.addEventListener("click", function (evt) {
    evt.preventDefault();
    expanderArticle.classList.toggle("expander--expanded");
    article.classList.toggle("article__text--expanded");
  });

  expanderDeviceBrand.addEventListener("click", function (evt) {
    evt.preventDefault();
    expanderDeviceBrand.classList.toggle("expander--expanded");
    deviceBrand.classList.toggle("items-list--expanded");
  });

  expanderDeviceType.addEventListener("click", function (evt) {
    evt.preventDefault();
    expanderDeviceType.classList.toggle("expander--expanded");
    deviceType.classList.toggle("items-list--expanded");
  });
}

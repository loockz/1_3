export default function swiperInit() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    var swiper = new Swiper(".swiper--items-list", {
      slidesPerView: "auto",
      centeredSlides: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var swiper = new Swiper(".swiper--device-type", {
      slidesPerView: "auto",
      centeredSlides: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var swiper = new Swiper(".swiper--prices", {
      slidesPerView: "auto",
      centeredSlides: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

export default function swiperInit() {
  if (window.matchMedia('(max-width: 768px)').matches) {
    let swiperList = [
      '.swiper--brands',
      '.swiper--device-type',
      '.swiper--prices'
    ]

    for (let i = 0; i < swiperList.length; i++) {
      var swiper = new Swiper(swiperList[i], {
        slidesPerView: 'auto',
        centeredSlides: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    }
  }
}

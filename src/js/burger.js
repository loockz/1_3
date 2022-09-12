let btnBurger = document.querySelector('.burger')
let sidebar = document.querySelector('.sidebar')
let tint = document.querySelector('.sidebar-tint')
let profileMenu = document.querySelector('.profile--menu')
let btnBurgerClose = document.querySelector('.burger--close')
let wrapper = document.querySelector('.wrapper')

let toggleList = [btnBurger, btnBurgerClose, tint]

export default function burger() {
  for (let i = 0; i < toggleList.length; i++) {
    toggleList[i].addEventListener('click', function (e) {
      e.preventDefault()
      btnBurger.classList.toggle('burger--expanded')
      sidebar.classList.toggle('sidebar--expanded')
      tint.classList.toggle('sidebar-tint--hidden')
      profileMenu.classList.toggle('profile--hidden')
      wrapper.classList.toggle('wrapper--tinted')
    })
  }
}

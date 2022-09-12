let expanderArticle = document.querySelector('.expander--article')
let article = document.querySelector('.article__text')

let expanderDeviceBrand = document.querySelector('.expander--device-brand')
let deviceBrand = document.querySelector('.items-list--device-brand')

let expanderDeviceType = document.querySelector('.expander--device-type')
let deviceType = document.querySelector('.items-list--device-type')

let expandableList = [article, deviceBrand, deviceType]
let expanderList = [expanderArticle, expanderDeviceBrand, expanderDeviceType]

export default function expander() {
  for (let i = 0; i < expanderList.length; i++) {
    expanderList[i].addEventListener('click', function (e) {
      e.preventDefault()
      expanderList[i].classList.toggle('expander--expanded')
      expandableList[i].classList.toggle('expandable--expanded')
    })
  }
}

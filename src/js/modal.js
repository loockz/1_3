let feedback = document.querySelector('.modal.feedback')
let callback = document.querySelector('.modal.callback')
let feedbackMenuBtn = document.querySelector('.menu .chat')
let feedbackSideBtn = document.querySelector('.sidebar__bottom .chat')
let callbackMenuBtn = document.querySelector('.menu .call')
let callbackSideBtn = document.querySelector('.sidebar__bottom .call')
let feedbackClose = document.querySelector('.feedback .modal__close')
let callbackClose = document.querySelector('.callback .modal__close')
let tintModal = document.querySelector('.modal-tint')
let wrapper = document.querySelector('.wrapper')

let feedbackList = [feedbackMenuBtn, feedbackSideBtn]
let callbackList = [callbackMenuBtn, callbackSideBtn]
let modalCloseList = [feedbackClose, callbackClose]

export default function modal() {
  let closeModal = function (e) {
    if (e.key == 'Escape') {
      let isSidebarOpen = document.querySelector('.sidebar--expanded')
      feedback.classList.remove('modal--active')
      callback.classList.remove('modal--active')
      tintModal.classList.add('modal-tint--hidden')
      if (!isSidebarOpen) {
        wrapper.classList.remove('wrapper--tinted')
      }

      document.removeEventListener('keydown', closeModal)
    }
  }

  for (let i = 0; i < feedbackList.length; i++) {
    feedbackList[i].addEventListener('click', function () {
      feedback.classList.add('modal--active')
      tintModal.classList.remove('modal-tint--hidden')
      wrapper.classList.add('wrapper--tinted')
      document.getElementById('modal__name').focus()
      document.addEventListener('keydown', closeModal)
    })
  }

  for (let i = 0; i < callbackList.length; i++) {
    callbackList[i].addEventListener('click', function () {
      callback.classList.add('modal--active')
      tintModal.classList.remove('modal-tint--hidden')
      wrapper.classList.add('wrapper--tinted')
      document.getElementById('modal__phone').focus()
      document.addEventListener('keydown', closeModal)
    })
  }

  for (let i = 0; i < modalCloseList.length; i++) {
    modalCloseList[i].addEventListener('click', function () {
      let isSidebarOpen = document.querySelector('.sidebar--expanded')
      feedback.classList.remove('modal--active')
      callback.classList.remove('modal--active')
      tintModal.classList.add('modal-tint--hidden')
      if (!isSidebarOpen) {
        wrapper.classList.remove('wrapper--tinted')
      }
    })
  }
}

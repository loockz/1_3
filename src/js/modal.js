let feedback = document.querySelector('.modal.feedback')
let callback = document.querySelector('.modal.callback')
let feedbackMenuBtn = document.querySelector('.menu .chat')
let feedbackSideBtn = document.querySelector('.sidebar__bottom .chat')
let callbackMenuBtn = document.querySelector('.menu .call')
let callbackSideBtn = document.querySelector('.sidebar__bottom .call')
let feedbackClose = document.querySelector('.feedback .modal__close')
let callbackClose = document.querySelector('.callback .modal__close')
let tintModal = document.querySelector('.modal-tint')

let feedbackList = [feedbackMenuBtn, feedbackSideBtn, feedbackClose]
let callbackList = [callbackMenuBtn, callbackSideBtn, callbackClose]
let modalType = ''

export default function modal() {
  for (let i = 0; i < feedbackList.length; i++) {
    feedbackList[i].addEventListener('click', function () {
      feedback.classList.toggle('modal--active')
      tintModal.classList.toggle('modal-tint--hidden')
      document.getElementById('modal__name').focus()
      let closeModal = function (e) {
        if (e.key == 'Escape') {
          feedback.classList.toggle('modal--active')
          tintModal.classList.toggle('modal-tint--hidden')
          document.removeEventListener('keydown', closeModal)
        }
      }
      document.addEventListener('keydown', closeModal)
    })
  }

  for (let i = 0; i < callbackList.length; i++) {
    callbackList[i].addEventListener('click', function () {
      callback.classList.toggle('modal--active')
      tintModal.classList.toggle('modal-tint--hidden')
      document.getElementById('modal__phone').focus()
      let closeModal = function (e) {
        if (e.key == 'Escape') {
          callback.classList.toggle('modal--active')
          tintModal.classList.toggle('modal-tint--hidden')
          document.removeEventListener('keydown', closeModal)
        }
      }
      document.addEventListener('keydown', closeModal)
    })
  }

  // feedbackMenuBtn.addEventListener('click', function () {
  //   feedback.classList.toggle('modal--active')
  //   tintModal.classList.toggle('modal-tint--hidden')
  // })

  // feedbackSideBtn.addEventListener('click', function () {
  //   feedback.classList.toggle('modal--active')
  //   tintModal.classList.toggle('modal-tint--hidden')
  // })

  // callbackMenuBtn.addEventListener('click', function () {
  //   callback.classList.toggle('modal--active')
  //   tintModal.classList.toggle('modal-tint--hidden')
  // })

  // callbackSideBtn.addEventListener('click', function () {
  //   callback.classList.toggle('modal--active')
  //   tintModal.classList.toggle('modal-tint--hidden')
  // })

  // feedbackClose.addEventListener('click', function () {
  //   feedback.classList.toggle('modal--active')
  //   tintModal.classList.toggle('modal-tint--hidden')
  // })

  // callbackClose.addEventListener('click', function () {
  //   document.getElementById('modal__phone').focus()
  // })
}

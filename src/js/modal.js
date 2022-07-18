let feedback = document.querySelector(".modal.feedback");
let callback = document.querySelector(".modal.callback");
let feedbackMenuBtn = document.querySelector(".menu .chat");
let feedbackSideBtn = document.querySelector(".sidebar__bottom .chat");
let callbackMenuBtn = document.querySelector(".menu .call");
let callbackSideBtn = document.querySelector(".sidebar__bottom .call");
let feedbackClose = document.querySelector(".feedback .modal__close");
let callbackClose = document.querySelector(".callback .modal__close");
let tintModal = document.querySelector(".modal-tint");

export default function modal() {
  feedbackMenuBtn.addEventListener("click", function () {
    feedback.classList.toggle("modal--active");
    tintModal.classList.toggle("modal-tint--hidden");
  });

  feedbackSideBtn.addEventListener("click", function () {
    feedback.classList.toggle("modal--active");
    tintModal.classList.toggle("modal-tint--hidden");
  });

  callbackMenuBtn.addEventListener("click", function () {
    callback.classList.toggle("modal--active");
    tintModal.classList.toggle("modal-tint--hidden");
  });

  callbackSideBtn.addEventListener("click", function () {
    callback.classList.toggle("modal--active");
    tintModal.classList.toggle("modal-tint--hidden");
  });

  feedbackClose.addEventListener("click", function () {
    feedback.classList.toggle("modal--active");
    tintModal.classList.toggle("modal-tint--hidden");
  });

  callbackClose.addEventListener("click", function () {
    callback.classList.toggle("modal--active");
    tintModal.classList.toggle("modal-tint--hidden");
  });
}

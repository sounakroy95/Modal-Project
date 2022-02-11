'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden'); //no dot in this case
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for loop since we have three modal buttons, hence looping through all required.
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Keyboard events are global events. For that we need to listen to the whole document and not just a element of the page.
// By adding event listener directly to the document we are listening for events everywhere.
// There are three types of key actions - key up, key down and key press

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

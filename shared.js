let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let modalNoButton = document.querySelector('.modal__action--negative')
let selectPlanButtons = document.querySelectorAll('.plan button');

let openModal = () => {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
}

let closeModal = () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}

for(el of selectPlanButtons) {
    el.addEventListener('click', openModal);
}

modalNoButton.addEventListener('click', closeModal);
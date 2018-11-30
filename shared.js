let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let modalNoButton = document.querySelector('.modal__action--negative')
let selectPlanButtons = document.querySelectorAll('.plan button');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

let openModal = () => {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
}

let closeModal = () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}

let showMobileNav = () => {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
}

for(el of selectPlanButtons) {
    el.addEventListener('click', openModal);
}

modalNoButton.addEventListener('click', closeModal);

toggleButton.addEventListener('click', showMobileNav);

backdrop.addEventListener('click', () => {
    closeModal();
    mobileNav.style.display = 'none';
});
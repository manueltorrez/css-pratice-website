let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let modalNoButton = document.querySelector('.modal__action--negative')
let selectPlanButtons = document.querySelectorAll('.plan button');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

let openModal = () => {
    /* backdrop.style.display = 'block';
    modal.style.display = 'block'; */
    backdrop.classList.add('open');
    modal.classList.add('open');
}

let closeModal = () => {
    backdrop.classList.remove('open');
    modal.classList.remove('open');
}

let showMobileNav = () => {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
}

for(el of selectPlanButtons) {
    el.addEventListener('click', openModal);
}

modalNoButton.addEventListener('click', closeModal);

toggleButton.addEventListener('click', showMobileNav);

backdrop.addEventListener('click', () => {
    closeModal();
    mobileNav.classList.remove('open');
});
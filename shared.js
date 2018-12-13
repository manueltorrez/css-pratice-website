let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let modalNoButton = document.querySelector('.modal__action--negative')
let selectPlanButtons = document.querySelectorAll('.plan button');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');
let ctaButton = document.querySelector('.main-nav__item--cta');

let openModal = () => {
    /* backdrop.style.display = 'block';
    modal.style.display = 'block'; */
    backdrop.classList.add('open');
    modal.classList.add('open');
}

let closeModal = () => {
    backdrop.classList.remove('open');
    if(modal) modal.classList.remove('open');
}

let showMobileNav = () => {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
}

for(el of selectPlanButtons) {
    el.addEventListener('click', openModal);
}

if(modalNoButton) modalNoButton.addEventListener('click', closeModal);

toggleButton.addEventListener('click', showMobileNav);

backdrop.addEventListener('click', () => {
    closeModal();
    mobileNav.classList.remove('open');
});

ctaButton.addEventListener('animationstart', event => {
    console.log('Animation started', event);
});

ctaButton.addEventListener('animationend', event => {
    console.log('Animation ended', event);
})

ctaButton.addEventListener('animationiteration', event => {
    console.log('Animation iteration', event);
})
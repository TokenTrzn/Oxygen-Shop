const menu = document.querySelector('.header__menu')
const menuButton = document.querySelector('.header__menu__icon')
const closeButton = document.querySelector('.header__menu__close-icon')

const showMenu = () => {
    menu.classList.toggle('show')
    menuButton.classList.toggle('hidden')
    closeButton.classList.toggle('hidden')
};

menuButton.addEventListener('click', showMenu)
closeButton.addEventListener('click', showMenu)
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close');
const menu = document.querySelector('.menu-mobile');


const openMenu = () => {
    menuIcon.classList.remove('menu-icon-available');
    menuIcon.classList.add('menu-icon-unavailable');

    closeIcon.classList.remove('close-unavailable');
    closeIcon.classList.add('close-available');

    menu.classList.remove('menu-closed');
    menu.classList.add('menu-open');

}

const closeMenu = () => {
    menuIcon.classList.add('menu-icon-available');
    menuIcon.classList.remove('menu-icon-unavailable');

    closeIcon.classList.add('close-unavailable');
    closeIcon.classList.remove('close-available');

    menu.classList.add('menu-closed');
    menu.classList.remove('menu-open');
}


menuIcon.addEventListener('click', () => {
    openMenu();
});

closeIcon.addEventListener('click', () => {
    closeMenu();
})









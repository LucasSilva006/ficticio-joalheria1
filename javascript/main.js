function mostrarMenu() {
    const navMenu = document.querySelector('.menu-sidebar');
    const overlay = document.querySelector('.overlay-menu');
    navMenu.classList.add('menu-aberto');
    overlay.classList.add('overlay-visivel');
}

function fecharMenu() {
    const navMenu = document.querySelector('.menu-sidebar');
    const overlay = document.querySelector('.overlay-menu');
    navMenu.classList.remove('menu-aberto');
    overlay.classList.remove('overlay-visivel');
}
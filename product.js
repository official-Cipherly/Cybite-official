// **********************************************NAVIGATION MENU*******************************************
let menu = document.querySelector('.bx-menu');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', function () {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('nav-toggle');
})
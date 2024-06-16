// **********************************************NAVIGATION MENU*******************************************
let menu = document.querySelector('.bx-menu');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', function () {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('nav-toggle');
})

// ********************************************SERVICES ANIMATION**************************


var typed = new Typed('#element1', {
    strings: ['Cyber Security'],
    typeSpeed: 100,
    loop: true
});

var typed = new Typed('#element2', {
    strings: ['Web Development'],
    typeSpeed: 100,
    loop: true
});

var typed = new Typed('#element3', {
    strings: ['Mobile Applications'],
    typeSpeed: 100,
    loop: true
});
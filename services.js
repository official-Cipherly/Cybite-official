// **********************************************NAVIGATION MENU*******************************************
let menu = document.querySelector('.bx-menu');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', function () {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('nav-toggle');
})

// **************************************** Home sliding effect ***********

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".home .container");
    const sliderContainer = document.querySelector(".home");
    let currentIndex = 0;
  
    function showSlide(index) {
      const totalSlides = slides.length;
      const newTransform = -index * 100;
      sliderContainer.querySelector(".slider-container").style.transform = `translateX(${newTransform}%)`;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    setInterval(nextSlide, 3000); 
  });
  

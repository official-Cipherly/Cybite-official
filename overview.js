// **********************************************NAVIGATION MENU*******************************************
let menu = document.querySelector('.bx-menu');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', function () {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('nav-toggle');
});

// MISSION
window.addEventListener('resize', missionContentHeight);
window.addEventListener('load', missionContentHeight);

function missionContentHeight() {
    requestAnimationFrame(() => {
        const missionContainer = document.querySelector('.mission-container');
        const image = document.querySelector('.mission-container img');
        const content = document.querySelector('.mission-container .mission-content');
        const frame = document.querySelector('.mission-container .gradient-frame');
        const missionContainerWidth = missionContainer.clientWidth;

        let imageWidth;
        if (window.matchMedia("(max-width: 430px)").matches) {
            imageWidth = missionContainerWidth * 0.7; 
        } else if (window.matchMedia("(max-width: 600px)").matches) {
            imageWidth = missionContainerWidth * 0.6; 
        } else {
            imageWidth = missionContainerWidth * 0.50; 
        }

        image.style.width = `${imageWidth}px`;

        const imageHeight = image.clientHeight;

        let contentHeight;
        if (window.matchMedia("(max-width: 430px)").matches){
            contentHeight = imageHeight * 1.5;
        } else if (window.matchMedia("(max-width: 600px)").matches) {
            contentHeight = imageHeight * 1.4; 
        } else {
            contentHeight = imageHeight; 
        }

        content.style.height = `${contentHeight}px`;

        const frameHeight = 1.2 * contentHeight;
        frame.style.height = `${frameHeight}px`;

        missionContainer.style.height = `${frameHeight}px`;
    });
}

// VISION
window.addEventListener('resize', visionContentHeight);
window.addEventListener('load', visionContentHeight);

function visionContentHeight() {
    requestAnimationFrame(() => {
        const visionContainer = document.querySelector('.vision-container');
        const image = document.querySelector('.vision-container img');
        const content = document.querySelector('.vision-container .vision-content');
        const frame = document.querySelector('.vision-container .gradient-frame');
        const visionContainerWidth = visionContainer.clientWidth;

        let imageWidth;
        if (window.matchMedia("(max-width: 600px)").matches) {
            imageWidth = visionContainerWidth * 0.6; 
        } else {
            imageWidth = visionContainerWidth * 0.50; 
        }

        image.style.width = `${imageWidth}px`;

        const imageHeight = image.clientHeight;

        let contentHeight;
        if (window.matchMedia("(max-width: 600px)").matches) {
            contentHeight = imageHeight * 1.4; 
        } else {
            contentHeight = imageHeight; 
        }

        content.style.height = `${contentHeight}px`;

        const frameHeight = 1.2 * contentHeight;
        frame.style.height = `${frameHeight}px`;

        visionContainer.style.height = `${frameHeight}px`;
    });
}

// VALUES
window.addEventListener('resize', valuesContentHeight);
window.addEventListener('load', valuesContentHeight);

function valuesContentHeight() {
    requestAnimationFrame(() => {
        const valuesContainer = document.querySelector('.values-container');
        const image = document.querySelector('.values-container img');
        const content = document.querySelector('.values-container .values-content');
        const frame = document.querySelector('.values-container .gradient-frame');
        const valuesContainerWidth = valuesContainer.clientWidth;

        let imageWidth;
        if (window.matchMedia("(max-width: 430px)").matches) {
            imageWidth = valuesContainerWidth * 0.7; 
        } else if (window.matchMedia("(max-width: 600px)").matches) {
            imageWidth = valuesContainerWidth * 0.6; 
        } else {
            imageWidth = valuesContainerWidth * 0.50; 
        }

        image.style.width = `${imageWidth}px`;

        const imageHeight = image.clientHeight;

        let contentHeight;
        if (window.matchMedia("(max-width: 430px)").matches){
            contentHeight = imageHeight * 1.5;
        } else if (window.matchMedia("(max-width: 600px)").matches) {
            contentHeight = imageHeight * 1.4; 
        } else {
            contentHeight = imageHeight; 
        }

        content.style.height = `${contentHeight}px`;

        const frameHeight = 1.2 * contentHeight;
        frame.style.height = `${frameHeight}px`;

        valuesContainer.style.height = `${frameHeight}px`;
    });
}

// WHY CHOOSE CYBITE SECTION
window.addEventListener('resize', adjustElements);
window.addEventListener('load', adjustElements);

function adjustElements() {
    requestAnimationFrame(() => {
        const container = document.querySelector('.reason-container');
        const square = document.querySelector('.holding-image');
        const circles = document.querySelectorAll('.reason-container .holding-image .circle');
        const containerWidth = container.clientWidth;
    
        let squareSize ;
        if (window.matchMedia("(max-width: 600px)").matches){
            squareSize  = containerWidth * 0.55; 
        } else if (window.matchMedia("(max-width: 600px)").matches) {
            squareSize  = containerWidth * 0.5; 
        } else {
            squareSize  = containerWidth * 0.3; 
        }
 
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
    
        const circleSize = (2 / 3) * squareSize;
        circles.forEach(circle => {
            circle.style.width = `${circleSize}px`;
            circle.style.height = `${circleSize}px`;
        });
    });
}

// FORM CONTAINER

window.addEventListener('resize', formContentHeight);
window.addEventListener('load', formContentHeight);

function formContentHeight() {
    requestAnimationFrame(() => {
        const formContainer = document.querySelector('.form-container');
        const image = document.querySelector('.form-container img');
        const content = document.querySelector('.form-container .form-content');
        const frame = document.querySelector('.form-container .gradient-frame');

        if (window.matchMedia("(max-width: 430px)").matches) {
            image.style.width = '';
            content.style.height = '';
            frame.style.height = '';
            formContainer.style.height = '';
            return;
        }

        const formContainerWidth = formContainer.clientWidth;
        let imageWidth = formContainerWidth * 0.55; // Default width

        image.style.width = `${imageWidth}px`;

        const imageHeight = image.clientHeight;
        let contentHeight =  imageHeight;

        if (window.matchMedia("(max-width: 601px)").matches){
            contentHeight = 1.6 * imageHeight;
        }

        content.style.height = `${contentHeight}px`;

        const frameHeight = 1.2 * contentHeight;
        frame.style.height = `${frameHeight}px`;

        formContainer.style.height = `${frameHeight}px`;
    });
}

// for cv label
document.getElementById('cv').addEventListener('change', function() {
    var fileName = this.value.split('\\').pop();
    var label = document.getElementById('cv-label');
    if (fileName) {
        label.textContent = fileName;
    } else {
        label.textContent = "Upload Your CV";
    }
});

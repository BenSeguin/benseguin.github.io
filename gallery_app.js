const imageContainer = 
    document.querySelector('.image-container');
const prevBtn = 
    document.getElementById('prev');
const nextBtn = 
    document.getElementById('next');
const overlay = 
    document.getElementById('overlay');
const popupImg = 
    document.getElementById('popup-img');
const images = 
    document.querySelectorAll('.image-container span img');

let x = 0;
prevBtn.addEventListener('click', () => {
    x = x + 60;
    rotate();
});
nextBtn.addEventListener('click', () => {
    x = x - 60;
    rotate();
});

images.forEach(image => {
    image.addEventListener('click', () => {
        const src = image.getAttribute('src');
        popupImg.setAttribute('src', src);
        overlay.classList.add('active');
    });
});

overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
});

function rotate() {
    imageContainer.style.transform = 
        `perspective(1000px) rotateY(${x}deg)`;
}

// Listener event to open hamburger menu when clicked
const navbar_hamburger = document.querySelector('#navbar_hamburger')
const navbar_items = document.querySelector('.navbar_items')
navbar_hamburger.addEventListener('click', function() {
    navbar_hamburger.classList.toggle('is-active');
    navbar_items.classList.toggle('active');
})
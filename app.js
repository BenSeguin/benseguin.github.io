// Listener event to open hamburger menu when clicked
const navbar_hamburger = document.querySelector('#navbar_hamburger')
const navbar_items = document.querySelector('.navbar_items')
navbar_hamburger.addEventListener('click', function() {
    navbar_hamburger.classList.toggle('is-active');
    navbar_items.classList.toggle('active');
})
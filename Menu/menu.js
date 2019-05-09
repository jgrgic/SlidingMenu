var menuButton = document.querySelector('.menu-btn');
var nav = document.querySelector('nav');
var line1 = document.querySelector('nav .menu-btn .line--1');
var line2 = document.querySelector('nav .menu-btn .line--2');
var line3 = document.querySelector('nav .menu-btn .line--3');
var link = document.querySelector('nav .nav-links');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    line1.classList.toggle('line-cross');
    line2.classList.toggle('line-fade-out');
    line3.classList.toggle('line-cross');
    link.classList.toggle('fade-in');

})
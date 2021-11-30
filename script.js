//Menu-Toggler
var menuBtn = document.querySelector('.menu-toggle-open')
var menuBtn2 = document.querySelector('.menu-toggle-close')
var navBar = document.querySelector('.nav-bar')
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    navBar.classList.add('active')
    menuBtn.classList.add('slide')
    menuOpen = true;
})

menuBtn2.addEventListener('click', () => {
    navBar.classList.remove('active')
    menuBtn.classList.remove('slide')
    menuOpen = false;
})

//Typing Animation
var typed = new Typed('.text', {
    strings: [
        "John Gabriel",
        "A Developer",
        "A Programmer",
        "A Designer"
    ], 
    typeSpeed: 70,
    backSpeed: 70,
    loop: true
});

//Navigation bar
$(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings ().removeClass('active')
     })

//Page Nav
var Home = document.querySelector('.home')
var Homebtn = document.querySelector('.home-button')
var About = document.querySelector('.about')
var Aboutbtn = document.querySelector('.abt-btn')
var Menudark = document.querySelector('.color')
var Logo = document.querySelector('.logo')

Homebtn.addEventListener('click', () => {
    Home.classList.add('active')
    About.classList.remove('active')
    Menudark.classList.remove('dark')
    Logo.classList.remove('dark')
})

Aboutbtn.addEventListener('click', () => {
    Home.classList.remove('active')
    About.classList.add('active')
    Menudark.classList.add('dark')
    Logo.classList.add('dark')
})
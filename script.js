//Menu-Toggler
var menuBtn = document.querySelector('.menu-toggle-open')
var menuBtn2 = document.querySelector('.menu-toggle-close')
var navBar = document.querySelector('.nav-bar')
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    navBar.classList.add('active')
    menuBtn.classList.add('slide')
    Home.classList.add('blur')
    About.classList.add('blur')
    menuOpen = true;
})

menuBtn2.addEventListener('click', () => {
    navBar.classList.remove('active')
    menuBtn.classList.remove('slide')
    Home.classList.remove('blur')
    About.classList.remove('blur')
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


//Page Nav
var Home = document.querySelector('.home')
var Homebtn = document.querySelector('.home-button')
var About = document.querySelector('.about')
var Aboutbtn = document.querySelector('.abt-btn')
var Menudark = document.querySelector('.color')
var Logo = document.querySelector('.logo')
var NavBckgrnd = document.querySelector('.nav-bg')

Homebtn.addEventListener('click', () => {
    Home.classList.add('active')
    Homebtn.classList.add('present')
    About.classList.remove('active')
    Aboutbtn.classList.remove('present')
    Menudark.classList.remove('dark')
    Logo.classList.remove('dark')
    NavBckgrnd.classList.remove('white')
    navBar.classList.remove('active')
    menuBtn.classList.remove('slide')
    Home.classList.remove('blur')
    About.classList.remove('blur')

})

Aboutbtn.addEventListener('click', () => {
    Home.classList.remove('active')
    Homebtn.classList.remove('present')
    About.classList.add('active')
    Aboutbtn.classList.add('present')
    Menudark.classList.add('dark')
    Logo.classList.add('dark')
    NavBckgrnd.classList.add('white')
    navBar.classList.remove('active')
    menuBtn.classList.remove('slide')
    Home.classList.remove('blur')
    About.classList.remove('blur')
})
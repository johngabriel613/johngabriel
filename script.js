//Menu-Toggler
var menuBtn = document.querySelector('.menu-toggle-open')
var menuBtn2 = document.querySelector('.menu-toggle-close')
var navBar = document.querySelector('.nav-bar')


menuBtn.addEventListener('click', () => {
    navBar.classList.add('active')
    menuBtn.classList.add('slide')
    Home.classList.add('blur')
    About.classList.add('blur')
    Education.classList.add('blur')
    Projects.classList.add('blur')
    Contact.classList.add('blur')
    Logo.classList.add('blur')

    
})

menuBtn2.addEventListener('click', () => {
    navBar.classList.remove('active')
    menuBtn.classList.remove('slide')
    Home.classList.remove('blur')
    About.classList.remove('blur')
    Education.classList.remove('blur')
    Projects.classList.remove('blur')
    Contact.classList.remove('blur')
    Logo.classList.remove('blur')
    
})



//Page Nav
var Home = document.querySelector('.home')
var Homebtn = document.querySelector('.home-button')
var About = document.querySelector('.about')
var Aboutbtn = document.querySelector('.abt-btn')
var Education = document.querySelector('.education')
var Educbtn = document.querySelector('.educ-btn')
var Projects = document.querySelector('.projects')
var Projbtn = document.querySelector ('.proj-btn')
var Contact = document.querySelector('.contact')
var Contactbtn = document.querySelector('.contact-btn')
var Contactme = document.querySelector('.contact-me')
var Menudark = document.querySelector('.color')
var Logo = document.querySelector('.logo')
var NavBckgrnd = document.querySelector('.nav-bg')
var Goback = document.querySelector('.back-btn')

Homebtn.addEventListener('click', () => {
    Home.classList.add('active')
    Homebtn.classList.add('present')
    About.classList.remove('active')
    Aboutbtn.classList.remove('present')
    Education.classList.remove('active')
    Educbtn.classList.remove('present')
    Projects.classList.remove('active')
    Projbtn.classList.remove('present')
    Contactbtn.classList.remove('present')
    Menudark.classList.remove('dark')
    Logo.classList.remove('dark')
    NavBckgrnd.classList.remove('white')
    navBar.classList.remove('active')
    menuBtn.classList.remove('slide')
    Home.classList.remove('blur')
    About.classList.remove('blur')
    Education.classList.remove('blur')
    Projects.classList.remove('blur')
    Logo.classList.remove('blur')

    //Nav change color
    Homebtn.classList.remove('dark')
    Aboutbtn.classList.remove('dark')
    Educbtn.classList.remove('dark')
    Projbtn.classList.remove('dark')
    Contactbtn.classList.remove('dark')

})

Aboutbtn.addEventListener('click', () => {
    Home.classList.remove('active')
    Homebtn.classList.remove('present')
    About.classList.add('active')
    Aboutbtn.classList.add('present')
    Education.classList.remove('active')
    Educbtn.classList.remove('present')
    Projects.classList.remove('active')
    Projbtn.classList.remove('present')
    Contact.classList.remove('active')
    Contactbtn.classList.remove('present')
    Menudark.classList.add('dark')
    Logo.classList.add('dark')
    NavBckgrnd.classList.add('white')
    navBar.classList.remove('active')
    menuBtn.classList.remove('slide')
    Home.classList.remove('blur')
    About.classList.remove('blur')
    Education.classList.remove('blur')
    Projects.classList.remove('blur')
    Logo.classList.remove('blur')

    Homebtn.classList.add('dark')
    Aboutbtn.classList.add('dark')
    Educbtn.classList.add('dark')
    Projbtn.classList.add('dark')
    Contactbtn.classList.add('dark')
})

Educbtn.addEventListener('click', () => {
    Home.classList.remove('active')
    Homebtn.classList.remove('present')
    About.classList.remove('active')
    Aboutbtn.classList.remove('present')
    Education.classList.add('active')
    Educbtn.classList.add('present')
    Projects.classList.remove('active')
    Projbtn.classList.remove('present')
    Contact.classList.remove('active')
    Contactbtn.classList.remove('present')
    Menudark.classList.add('dark')
    Logo.classList.add('dark')
    NavBckgrnd.classList.add('white')
    navBar.classList.remove('active')
    menuBtn.classList.remove('slide')
    Home.classList.remove('blur')
    About.classList.remove('blur')
    Education.classList.remove('blur')
    Projects.classList.remove('blur')
    Logo.classList.remove('blur')

    Homebtn.classList.add('dark')
    Aboutbtn.classList.add('dark')
    Educbtn.classList.add('dark')
    Projbtn.classList.add('dark')
    Contactbtn.classList.add('dark')
})

Projbtn.addEventListener('click', () => {
    Home.classList.remove('active')
    Homebtn.classList.remove('present')
    About.classList.remove('active')
    Aboutbtn.classList.remove('present')
    Education.classList.remove('active')
    Educbtn.classList.remove('present')
    Projects.classList.add('active')
    Projbtn.classList.add('present')
    Contact.classList.remove('active')
    Contactbtn.classList.remove('present')
    Menudark.classList.add('dark')
    Logo.classList.add('dark')
    NavBckgrnd.classList.add('white')
    navBar.classList.remove('active')
    menuBtn.classList.remove('slide')
    Home.classList.remove('blur')
    About.classList.remove('blur')
    Education.classList.remove('blur')
    Projects.classList.remove('blur')
    Logo.classList.remove('blur')

    Homebtn.classList.add('dark')
    Aboutbtn.classList.add('dark')
    Educbtn.classList.add('dark')
    Projbtn.classList.add('dark')
    Contactbtn.classList.add('dark')
})

Goback.addEventListener('click', () => {
    Home.classList.add('active')
    Homebtn.classList.add('present')
    Projects.classList.remove('active')
    Projbtn.classList.remove('present')
    Menudark.classList.remove('dark')
    Logo.classList.remove('dark')
    NavBckgrnd.classList.remove('white')

    Homebtn.classList.remove('dark')
    Aboutbtn.classList.remove('dark')
    Educbtn.classList.remove('dark')
    Projbtn.classList.remove('dark')
    Contactbtn.classList.remove('dark')
})

Contactbtn.addEventListener('click', () => {
    Home.classList.remove('active')
    Homebtn.classList.remove('present')
    About.classList.remove('active')
    Aboutbtn.classList.remove('present')
    Education.classList.remove('active')
    Educbtn.classList.remove('present')
    Projects.classList.remove('active')
    Projbtn.classList.remove('present')
    Contact.classList.add('active')
    Contactbtn.classList.add('present')
    Menudark.classList.add('dark')
    Logo.classList.add('dark')
    NavBckgrnd.classList.add('white')
    navBar.classList.remove('active')
    menuBtn.classList.remove('slide')
    Home.classList.remove('blur')
    About.classList.remove('blur')
    Education.classList.remove('blur')
    Projects.classList.remove('blur')
    Contact.classList.remove('blur')
    Logo.classList.remove('blur')

    Homebtn.classList.add('dark')
    Aboutbtn.classList.add('dark')
    Educbtn.classList.add('dark')
    Projbtn.classList.add('dark')
    Contactbtn.classList.add('dark')
})

Contactme.addEventListener('click', () => {
    Home.classList.remove('active')
    Homebtn.classList.remove('present')
    Contact.classList.add('active')
    Contactbtn.classList.add('present')
    Menudark.classList.add('dark')
    Logo.classList.add('dark')
    NavBckgrnd.classList.add('white')

    Homebtn.classList.add('dark')
    Aboutbtn.classList.add('dark')
    Educbtn.classList.add('dark')
    Projbtn.classList.add('dark')
    Contactbtn.classList.add('dark')

    Contact.classList.remove('blur')
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



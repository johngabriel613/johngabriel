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
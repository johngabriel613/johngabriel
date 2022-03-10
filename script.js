const OpenMenu = document.querySelector('.open-menu')
const CloseMenu = document.querySelector('.close-menu')
const Nav = document.querySelector('.nav-bar')

OpenMenu.addEventListener('click', () => {
    Nav.classList.add('open')
})

CloseMenu.addEventListener('click', () => {
    Nav.classList.remove('open')
})


//Nav-bar scroll 
const NavBg = document.querySelector('header')

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    NavBg.classList.add('sticky')
  } else {
    NavBg.classList.remove('sticky')
  }
}

//Typing Animation
var typed = new Typed('#typed', {
  strings: [' John Gabriel',
            ' A Developer',
            ' A Programmer'
],
          loop: true,
          typeSpeed: 40,
          backSpeed: 40
});
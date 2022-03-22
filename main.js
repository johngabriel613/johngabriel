
const OpenMenu = document.querySelector('.open-menu')
const menuBar = document.querySelectorAll('.open-menu span')
const Nav = document.querySelector('.navlist')

console.log(menuBar)

OpenMenu.addEventListener('click', () => {
    Nav.classList.toggle('open')
    menuBar[0].classList.toggle('open')
    menuBar[1].classList.toggle('open')
    menuBar[2].classList.toggle('open')
})


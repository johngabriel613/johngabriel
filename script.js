const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navbar')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen)  {
        menuBtn.classList.add('open');
        navigation.classList.add('active')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        navigation.classList.remove('active')
        menuOpen = false;
    }
    
});


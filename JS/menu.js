const btnMenu = document.getElementById('menu')
const menuMobile = document.getElementById('menu-mobile')
const navLink = Array.from(document.querySelectorAll('.nav__link'))

btnMenu.addEventListener('click', () => {
    menuMobile.style.display = menuMobile.style.display === 'block' ? 'none' : 'block'
})

document.addEventListener('click', (e) => {
    if (
        navLink.includes(e.target) ||
        (!menuMobile.contains(e.target) && !btnMenu.contains(e.target)))
    {
        menuMobile.style.display = 'none'
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) {
        menuMobile.style.display = 'none'
    }
})
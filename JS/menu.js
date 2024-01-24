const menuInput = document.querySelector('.menu__input')
const contentNav = document.querySelector('.content__nav')
const userActionsNav = document.querySelector('.user-actions__nav')

menuInput.addEventListener('click', () => {
    if (menuInput.checked) {
        contentNav.style.display = 'block'
        userActionsNav.style.display = 'block'
    } else {
        contentNav.style.display = 'none'
        userActionsNav.style.display = 'none'
    }
})
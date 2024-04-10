const btnTop = document.getElementById('btn-top')

btnTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

window.onscroll = () => scrollFunction()

//  HACK:  fazer com intersection observer
const windowHeight = 4293.6
function scrollFunction() {
    let viewHeight = Math.round(document.documentElement.scrollTop * 100) / 100

    if (viewHeight > 700) btnTop.style.display = 'block'
    else btnTop.style.display = 'none'
}
const input = document.getElementById('input-search')
const mag = document.getElementById('mag')

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && input.value !== '') {
        alert(`Pesquisando por: ${input.value}`)
    } else if (e.key === 'Enter' && input.value === '') {
        alert('Digite algo para pesquisar')
    }
})

mag.addEventListener('click', function () {
    if (input.value !== '') {
        alert(`Pesquisando por: ${input.value}`)
    } else {
        alert('Digite algo para pesquisar')
    }
})
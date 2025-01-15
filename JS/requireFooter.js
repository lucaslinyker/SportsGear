function requireFooter() {
    fetch('../footer.html')
    .then(response => response.text())
    .then(footer => {
        document.getElementById('footer').innerHTML = footer
    })
    .catch(error => console.error('Erro ao buscar o footer:', error))
}

requireFooter()
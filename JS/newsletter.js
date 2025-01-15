const frm = document.getElementById('newsletter-form')

frm.addEventListener('submit', function (e) {
    e.preventDefault()
    const email = document.getElementById('newsletter-email')

    if (email.value !== '') {
        const res = confirm('Ao clicar em OK você confirma com os termos de uso e privacidade da Sports Gear')

        if (res) {
            alert(`O e-mail ${email.value} foi cadastrado com sucesso!`)
            email.value = ''
        } else {
            alert(`O e-mail ${email.value} não foi cadastrado.`)
            email.value = ''
        }
    } else {
        alert('Digite o seu email para se cadastrar')
    }
})
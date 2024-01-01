const frm = document.getElementById('form')

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
}

function validatePassword(password) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    return re.test(password)
}

const invalidEmailMessage = 'Email inválido'

const invalidPasswordMessage =
'A senha não atende aos seguintes requisitos:\n\n' +
'A senha deve conter pelo menos 8 caracteres\n' +
'A senha deve conter pelo menos uma letra maiúscula ou minúscula\n' +
'A senha deve conter pelo menos um número\n' +
'A senha deve conter pelo menos um caractere especial (@$!%*#?&)'

const successMessage =
'Login realizado com sucesso!\n\n' +
'Você será redirecionado para a página inicial...'

frm.addEventListener('submit', function (e) {
    e.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    if (!validateEmail(email)) return alert(invalidEmailMessage)
    if (!validatePassword(password)) return alert(invalidPasswordMessage)

    alert(successMessage)
    window.location.href = '../index.html'
})
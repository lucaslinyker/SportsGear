const frm = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')

const regexEmail = /\S+@\S+\.\S+/
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

const emailMessage = 'Email inválido: Deve conter um @ e um .'

const passwordMessage =
`A senha não atende aos seguintes requisitos:
  8+ caracteres
  Maiúscula ou minúscula
  Número
  Caractere especial (@$!%*#?&)`

const confirmPasswordMessage = 'As senhas não conferem'

const successMessage = `Login realizado com sucesso!
Você será redirecionado para a página inicial...`

function validateFields(email, password, confirm) {
    if (!regexEmail.test(email)) {
        return alert(emailMessage)
    }

    if (!regexPassword.test(password)) {
        return alert(passwordMessage)
    }

    if (password !== confirm) {
        confirmPassword.focus()
        return alert(confirmPasswordMessage)
        //  NOTE:  o alert é executado antes do focus
    }

    return success(email, password)
}

function success(email, password) {
    /* localStorage.setItem('email', email)
    localStorage.setItem('password', password)
    localStorage.setItem('logged', true)
     TODO:  implementar depois */

    alert(successMessage)
    return window.location.href = '/'
    //  NOTE:  '/' aponta para o index
}

frm.addEventListener('submit', function (e) {
    e.preventDefault()

    return validateFields(
        email.value,
        password.value,
        confirmPassword.value
    )
})
//  HACK:  não funciona se não importar da cdn
import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

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

const userAlreadyExists = 'Email já cadastrado'

const successMessage = `Cadastro realizado com sucesso!
Você será redirecionado para a página inicial...`

let users = []
let dateFetch = 0
async function requestBdUsers() {
    //  HACK:  deveria ser uma variável de ambiente
    const response = await fetch('https://sports-gear-database.vercel.app/users', { cache: 'no-cache' })
    const data = await response.json().then(data => data.map((user) => user.email))
    console.log(data)

    dateFetch = Date.now()
    return users = data
}

function success(email, password) {
    localStorage.setItem('logged', true)
    //  NOTE:  todos item do localStorage são strings

    //  HACK:  deveria ser uma variável de ambiente
    password = CryptoJS.AES.encrypt(password, 'G*onDdpc7h.BTaUiDZ*96g;,mS-%m4W&').toString()
    console.log(password)

    //  HACK:  deveria ser uma variável de ambiente
    fetch('https://sports-gear-database.vercel.app/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
            id: uuidv4()
        })
    })

    alert(successMessage)
    return window.location.href = '/'
}

frm.addEventListener('submit', async function (e) {
    e.preventDefault()

    if (!regexEmail.test(email.value)) {
        return alert(emailMessage)
    } else if (!regexPassword.test(password.value)) {
        return alert(passwordMessage)
    } else if (password.value !== confirmPassword.value) {
        confirmPassword.focus()
        return alert(confirmPasswordMessage)
    }

    const dateSubmit = Date.now()
    //  NOTE:  verifica se já passou 30 segundos desde a última requisição
    if ((dateSubmit - dateFetch) > (1000 * 30)) await requestBdUsers()

    if (users.some(user => user.email === email.value)) return alert(userAlreadyExists)

    return success(email.value, password.value)
})
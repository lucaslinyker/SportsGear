const frm = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')

const emailCorrect = localStorage.getItem('email')
const passwordCorrect = localStorage.getItem('password')

let users = []
let dateFetch = 0
async function requestBdUsers() {
    //  HACK:  process.env.NEXT_PUBLIC_API_URL
    const response = await fetch('https://sports-gear-database.vercel.app/users', { cache: 'no-cache' })
    const data = await response.json().then(data => data.map(function (user) {
        return {
            email: user.email,
            //  HACK:  process.env.PUBLIC_CHAVE
            password: CryptoJS.AES.decrypt(user.password, 'G*onDdpc7h.BTaUiDZ*96g;,mS-%m4W&').toString(CryptoJS.enc.Utf8)
        }
    }))

    dateFetch = Date.now()
    return users = data
}

function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
}

function validatePassword(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    return regex.test(password)
}

const emailMessage = 'Email já em uso ou inexistente'
const passwordMessage = 'Senha incorreta'
const successMessage = `Login realizado com sucesso!\n\nVocê será redirecionado para a página inicial...`

frm.addEventListener('submit', async function (e) {
    e.preventDefault()

    if (!validateEmail(email.value)) return alert(emailMessage)
    if (!validatePassword(password.value)) return alert(passwordMessage)

    const dateSubmit = Date.now()
    //  NOTE:  verifica se já passou 30 segundos desde a última requisição
    if ((dateSubmit - dateFetch) > (1000 * 30)) await requestBdUsers()
    if (!users.some(user => user.email === email.value)) return alert(emailMessage)
    if (!users.some(user => user.password === password.value)) return alert(passwordMessage)

    localStorage.setItem('logged', true)
    alert(successMessage)
    return window.location.href = '../'
})
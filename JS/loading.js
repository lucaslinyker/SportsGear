window.addEventListener('load', function() {
    const loading = document.getElementById('loading')
    loading.style.display = 'none'

    const singInUp = document.getElementById('sign-in-up')
    const singInUpMobile = document.getElementById('sign-in-up--mobile')
    if (localStorage.getItem('logged') === 'true') {
        singInUp.style.display = 'none'
        singInUpMobile.style.display = 'none'
    }
})
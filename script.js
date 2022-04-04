let user = window.document.getElementsByClassName('inputText')[0]
let pass = window.document.getElementsByClassName('inputPassword')[0]
let loginInput = window.document.getElementsByClassName('loginInput')[0]
let passwordInput = window.document.getElementsByClassName('loginInput')[1]
let button = window.document.getElementsByClassName('loginButton')[0]

function logar() {
    if (user.value.length == 0) {
        window.alert('Por favor verifique as credenciais')
        loginInput.style.border = 'red 1px solid'
        passwordInput.style.border = 'none'
    } else if (pass.value.length == 0) {
        window.alert('Por favor verifique as credenciais')
        passwordInput.style.border = 'red 1px solid'
        loginInput.style.border = 'none'
    } else {
        window.alert('Você digitou qualquer coisa mas o dev não fez nada quanto a isso.')
        loginInput.style.border = 'none'
        passwordInput.style.border = 'none'
    }
  
}

function loginBorder() {
    loginInput.style.border = 'none'
}

function passBorder() {
    passwordInput.style.border = 'none'
}

function redesocial() {
    window.alert('Você tentou logar por alguma rede social')
}

function forgotten() {
    window.alert('O dev não sabe recuperar conta')
}

function criaConta() {
    window.alert('O dev não fez página de registro')
}
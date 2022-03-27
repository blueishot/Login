function logar() {
    let user = window.document.getElementsByClassName('inputText')[0]
    let pass = window.document.getElementsByClassName('inputPassword')[0]

    if (user.value.length == 0 || pass.value.length ==0) {
        window.alert('Por favor verifique as credenciais')
    } else {
        window.alert('Você digitou qualquer coisa mas o dev não fez nada quanto a isso.')
    }
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
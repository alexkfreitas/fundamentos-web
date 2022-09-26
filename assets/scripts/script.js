// // var nome = 'Alex' // variavel de escopo global
// let nome = 'Alex' // variavel de escopo local, pode alterar o valor
// // const nome = 'Alex' // variavel de escopo local, não pode alterar o valor

// // const perfil = document.getElementById('perfil') -> pega pelo perfil
// // const perfil = document.getElementsByClassName('perfil') -> pega pelo classe
// // const perfil = document.getElementByName('name') -> pega pelo atributo name
// // const perfil = document.getElementByTagName('name') -> pega pela tag

// const perfil = document.querySelector('.perfil')

// function aparecerNome(){
//     let data = new Date()
//     alert(data)

//     console.log(perfil)

//     perfil.style.backgroundColor = "red"
//     perfil.innerHTML
// }


// let nome = window.document.getElementById('nome')
let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'O nome precisa ter no mínimo três caracteres!'
        txtNome.style.color='red'
    } else{
        txtNome.innerHTML = ''
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail=document.querySelector('#txtEmail')

    if(email.value.indexOf('@')==-1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML='E-mail inválido!'
        txtEmail.style.color='red'
    } else{
        txtEmail.innerHTML = ''
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML='Texto muito grande! Digite no máximo 100 caracteres!'
        txtAssunto.style.color='red'
        txtAssunto.style.display='block'
    }else{
        txtAssunto.style.display='none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk==true && emailOk==true && assuntoOk==true){
        alert('Formulário enviado com sucesso!')
    } else{
        alert('Preencha todos os campos corretamente!')
    }
}

function mapaZoom(){
    mapa.style.width = '900px'
    mapa.style.height = '700px'
}

function mapaNormal(){
    mapa.style.width = '600px'
    mapa.style.height = '450px'
}


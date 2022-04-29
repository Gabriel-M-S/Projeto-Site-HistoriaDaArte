/*
Case Sensitive = reconhece letras maiusculas e minusculas
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')
let video = document.querySelector('#video')

function validaNome() {

    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
       txtNome.innerHTML = 'Nome Inválido'
       txtNome.style.color = 'red' 
    } else {
       txtNome.innerHTML = 'Nome Válido'
       txtNome.style.color = 'green'
       nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'

    } else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }    
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >=100) {
            txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
            txtAssunto.style.color = 'red'
            txtAssunto.style.display = 'block'
        } else{
            txtAssunto.style.display = 'none'
            assuntoOk = true
        }    

    }

function Enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    }
    else{
        alert('Preencha todos os campos do formulário')
    }
}

function mapaZoom(){
mapa.style.width = '420px'
mapa.style.height = '500px'

}

function videoZoom(){
    video.style.width = '840px'
    video.style.height = '472.5px'
}

function mapaNormal(){
    mapa.style.width = '350px'
    mapa.style.height = '300px'
}

function videoNormal(){
    video.style.width = '560px'
    video.style.height = '315px'
}
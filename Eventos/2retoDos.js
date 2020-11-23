'use strict'

const registro = document.querySelector('.entrada');

function tipButton() {
    let nombre = document.getElementById('nombre').value;
    console.log(`¡HOLA! ${nombre}`);
}
registro.addEventListener('click', tipButton);
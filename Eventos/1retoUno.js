'use strict'

const button = document.querySelector('.alert');

function mensaje() {
    document.getElementById('mensaje').innerHTML="Mi primer click, ¡ole yo y la mujer que me parió!";
}

button.addEventListener('click', mensaje);







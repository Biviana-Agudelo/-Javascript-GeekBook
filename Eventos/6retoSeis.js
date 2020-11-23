'use strict'

const fondo = document.querySelector('body');

function colors(event) {
    if (event.key === 'r') {
        fondo.style.backgroundColor = 'red';
    }
    if (event.key === 'm') {
        fondo.style.backgroundColor = 'purple';
    }
}

fondo.addEventListener('keypress', colors);
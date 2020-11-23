'use strict'

const boton = document.querySelector('.button_');
const peli = document.querySelector('#lista');

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

function listado() {
    const lista = document.querySelector('#lista')
    lista.innerHTML =  `<li class='peli_1'>${inception}</li>
                        <li class='peli_2'>${theButterFlyEffect}</li>
                        <li class='peli_3'>${eternalSunshineOfTheSM}</li>
                        <li class='peli_4'>${blueVelvet}</li>
                        <li class='peli_5'>${split}</li>`;
}

function vinculo(event) {
    const selected = event.target;
    console.log(selected.innerHTML)
}

boton.addEventListener('click', listado);
peli.addEventListener('click', vinculo);


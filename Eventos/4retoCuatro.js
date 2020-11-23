'use strict'

const boton = document.querySelector('.button_');
let peli_1
let peli_2
let peli_3
let peli_4
let peli_5

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
    peli_1 = document.querySelector('.peli_1');
    peli_2 = document.querySelector('.peli_2');
    peli_3 = document.querySelector('.peli_3');
    peli_4 = document.querySelector('.peli_4');
    peli_5 = document.querySelector('.peli_5');
    peli_1.addEventListener('click', vinculo);
    peli_2.addEventListener('click', vinculo);
    peli_3.addEventListener('click', vinculo);
    peli_4.addEventListener('click', vinculo);
    peli_5.addEventListener('click', vinculo);
}

function vinculo(event) {
    const selected = event.currentTarget;
    console.log(selected.innerHTML)
}

boton.addEventListener('click', listado);
'use strict'

const teacher1 =document.querySelector('.teacher--isra');
const teacher2 =document.querySelector('.teacher--tuerto');
const teacher3 =document.querySelector('.teacher--nasi');

function clase(event) {
    const selected = event.currentTarget;
    selected.classList.toggle('teacher--selected');
    let quitar = selected.querySelector('.favorite');
    if (selected.classList.contains('teacher--selected')) {
        quitar.innerHTML = 'Quitar';
    }
    else {
        quitar.innerHTML = 'Añadir';
    }
}


teacher1.addEventListener('click', clase);
teacher2.addEventListener('click', clase);
teacher3.addEventListener('click', clase);


'use strict'

let parrafo =document.querySelector('.parrafo');

function mouse() {
    
    let parrafoNuevo = document.createElement('p');
    parrafoNuevo.innerHTML= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque possimus, officia perspiciatis, tempore iure ea accusamus, ipsam harum molestias fuga consequatur qui veritatis? Nobis animi at rerum vero deleniti sequi.'
    parrafo.appendChild(parrafoNuevo);
}

parrafo.addEventListener('mouseover', mouse);


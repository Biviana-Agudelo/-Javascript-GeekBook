'use strict'
function caja(booleano, ancho, padding, borde){
    let result = 0;
    if (booleano === true){
        result = ancho - 2 * padding - 2 * borde;
        console.log(`El ancho del contenido es de: ${result}`)
    }
    else {
        result = ancho + 2 * padding + 2 * borde;
        console.log(`El ancho de la caja es de: ${result}`)
    }
}

caja(false, 40, 10, 2);


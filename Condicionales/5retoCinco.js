'use strict'

var etiqueta = document.querySelector('div');

if (etiqueta.classList.contains('warning')){
    document.getElementById('titulo').innerHTML = '"AVISO"'
    document.getElementById('texto').innerHTML = 'Tenga Cuidado'
}
else if (etiqueta.classList.contains('error')){
    document.getElementById('titulo').innerHTML = '"ERROR"' 
    document.getElementById('texto').innerHTML = 'Ha surgido un error'
}
else if (etiqueta.classList.contains('success')){
    document.getElementById('titulo').innerHTML = '"CORRECTO"' 
    document.getElementById('texto').innerHTML = 'Los datos son correctos'
}


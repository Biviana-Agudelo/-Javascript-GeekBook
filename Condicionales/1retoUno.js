'use strict';

const classAvatar = document.querySelector('div');

const avatarUsuario =  'http://www.fillmurray.com/300/300';

const avatarDefecto = 'http://placehold.it/300x300';

var Usuario = ('******')

var prueba = (Usuario !== '') && avatarUsuario;
var prueba2 = (Usuario === '') && avatarDefecto;

classAvatar.innerHTML = `<img src = ${(prueba||prueba2)}/>`







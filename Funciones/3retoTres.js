'use strict'

function numero(precio){
        let iva = precio * 21/100;
        let total = precio + iva;
        return `Precio= ${precio}, IVA=${iva}, total=${total}`;
}
let total = numero(5000);

console.log(total);




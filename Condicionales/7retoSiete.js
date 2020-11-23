'use strict'

var año = 3000;

if (año % 4 === 0){
    if (año % 100 === 0){
        if (año % 400 === 0){
            document.write("'El año si es Bisiesto'");
        }
        else {
            document.write("'El año no es Bisiesto'");
        }
    }
    else {
        document.write("'El año si es Bisiesto'"); 
    }
}
else {
    document.write("'El año no es Bisiesto'");
}
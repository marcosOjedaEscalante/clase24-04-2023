/* Operador ternario y operadores AND y OR */

/* condición ? valorSiVerdadero : varlorSiFalso */

/* AND Y OR */

/* Se solicita generar un login de acceso para validar los datos de un usuario con respecto
a su nombre de usuario y su contraseña, estos serán recibidos mediante un prompt, los datos
del único usuario que tiene acceso son nombreDeUsuario: ADMIN y contraseña: 987654321 */

var nombreDeUsuario = prompt('Ingrese su nobmre de usuario: ');
var contrasena = prompt('Ingrese su contraseña:');

/* if(nombreDeUsuario === 'ADMIN'){
    if(contrasena === '987654321'){
        console.log('Acceso admitido');
    }else{
        console.log('Acceso denegado');
    }
}else{
    console.log('Acceso denegado');
} */

/* Este sería el planeteamiento para la solución de validación de ingreso */
/* if(nombreDeUsuario === 'ADMIN' && contrasena === '987654321'){
    console.log('Acceso permitido');
}else{
    console.log('Acceso denegado');
}

if(nombreDeUsuario === 'ADMIN' || contrasena === '987654321'){
    console.log('Acceso permitido');
}else{
    console.log('Acceso denegado');
} */

/* Uso de ternario */
/* condición ? valorSiVerdadero : varlorSiFalso */
(nombreDeUsuario === 'ADMIN' && contrasena === '987654321') 
    ? console.log('Acceso permitido') 
    : console.log('Acceso denegado');
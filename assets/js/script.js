/* FUNCIONES - modular el código */

/* function nombre_funcion(){
    
} */

/* se necesitan crear procesos de suma, resta, multiplicación y división  */
/* con dos número por pantalla */
/* el resultado debe ser mostrado, por consola, por alert, por bd, por csv, por excel,
por un JSON para una API */

function solicitarDatos(){
    var numeroUno = parseInt(prompt('Ingresa número uno:'));
    var numeroDos = parseInt(prompt('Ingresa número dos:'));
    var arregloNumeros = [numeroUno, numeroDos]
    return arregloNumeros;
}

function sumar(arregloNumeros){
    var resultado = arregloNumeros[0] + arregloNumeros[1];
    return resultado;
}

function restar(arregloNumeros){
    var resultado = arregloNumeros[0] - arregloNumeros[1];
    return resultado;
}

function dividir(arregloNumeros){
    var resultado = arregloNumeros[0] / arregloNumeros[1];
    return resultado;
}

function multiplicar(arregloNumeros){
    var resultado = arregloNumeros[0] * arregloNumeros[1];
    return resultado;
}

function mostrarPorConsola(resultado){
    console.log(resultado);
}

function mostrarPorAlert(resultado){
    alert(resultado);
}

function guardarEnExcel(resultado){
    console.log('El resultado fue almacenado en un excel: ' + resultado);
}

function guardarEnCSV(resultado){
    console.log('El resultado fue almacenado en un CSV: ' + resultado);
}

function guardarEnBD(resultado){
    console.log('El resultado fue almacenado en un BD: ' + resultado);
}

function guardarAPI(resultado){
    console.log('El resultado fue almacenado en la API: ' + resultado);
}

var arregloDatosRecibidos = solicitarDatos();
var restultadoSuma = sumar(arregloDatosRecibidos);
mostrarPorConsola(restultadoSuma);

var arregloDatosRecibidosDos = solicitarDatos();
var resultadoMultiplicar = multiplicar(arregloDatosRecibidosDos);
mostrarPorAlert(resultadoMultiplicar);
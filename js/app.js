//Esto es un comentario
//Aqui vamos a comenzar con javascript
console.log('Hola Mundo!!');

//Tipos de datos:

//String: cadenas de caracteres, se lo representa por que esta contenido entre comillas simples o dobles
//Number: todos los numeros
// Booleanos: logicos solo toman dos valores true o false

//Array: 
//Obejct:
//Empty: null, nada.

//Variables (var - let - const)

//var deprecada --> no se usa.
//crear o declarar una variable

//sintaxis:
/*
tipo de variable [nombre de la variable (camelCase | nombre-de-la-variable | nombre_de_la_variable)] = [string o number o boolean o array o object];
*/ 

let mensaje = "Esto es un mensaje"
console.log(mensaje);
document.write('<br>' + mensaje);
const token = 'token';
//console.log('let mensaje-->',mensaje);
console.log('const token-->',token);

//cambiar valor de una variable

mensaje='Esto es otro mensaje distinto'
console.log(mensaje);
document.write('<br>' + mensaje);

mensaje=50;
console.log(mensaje);
document.write('<br>' + mensaje);

// Esto es un error --> token='Otro token'; (NO SE PUEDE CAMBIAR EL VALOR DE UNA CONSTANTE);

//imprimir datos en el documento html

//document.write("Esto es un document.write");


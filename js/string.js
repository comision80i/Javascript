console.log('Clase String');

let texto='  Hola Valentin ';

console.log('El valor de texto es:', texto);

//Propiedad unica propiedad segun Doc.Oficial

//length sirve para obtener la longitud de un string

let longitud = texto.length;

console.log('La longitud de texto es:', longitud);

//Metodos

let mayusculas=texto.toUpperCase();
console.log('El resultado de mayuscula es:', mayusculas);

let minus=texto.toLowerCase();
console.log('El resultado de minus es:', minus);

let posicion= texto.indexOf(' ');

console.log('El resultado de posicion es:', posicion);

let subCadena=texto.slice(0,4);

console.log('El resultado de subCadena es:', subCadena);

let reemplazo=texto.replace('Valentin', 'Alan');
console.log('El resultado de reemplazo es:', reemplazo);

//eliminar espacios en blanco al principio y final del string

let sinEsp=texto.trim();
console.log('El resultado de aplicar trim es:', sinEsp.length);

let trimStart=texto.trimStart();
console.log('El resultado de aplicar trimStart es:', trimStart.length);

//## MATH

let num=-5;
let valorAbs=Math.abs(num);
console.log('El valor absoluto de num es:', valorAbs);

/**ARRAYS -->  */ let arrayNumeros=[3,5,7,78,90,0, num];
console.log('El contenido del array de numeros es:', arrayNumeros);

//max y min

let max=Math.max(...arrayNumeros);
console.log('El valor maximo del array de numeros es:', max);

let max2=Math.max(num, 10, 100, 25);
console.log('El valor max2 es:', max2);

let min=Math.min(0,6,3,Math.abs(num));
console.log('El valor minimo es:', min);

//El método Math.round() devuelve el valor de un número redondeado al entero más cercano. Por ejemplo:

let numero2 =5.5;
let numeroRedondeado2 = Math.round(numero2);
console.log(numeroRedondeado2); 

let numero3 = 5.6;
let numeroRedondeado3 = Math.floor(numero3);
console.log(numeroRedondeado3);

let numero4 = 5.4;
let numeroRedondeado4 = Math.ceil(numero4);
console.log(numeroRedondeado4);

//El método Math.random() devuelve un número pseudoaleatorio entre 0 y 1. Por ejemplo:
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);
console.log('Array');

/**
 * 
 * let dias=[0,1,2,3,....n];
 * 
 */

let dias=['Lunes', 'Martes', 'Miercoles'];

let longitud=dias.length;

console.log('La longitud del array dias es:', longitud);

//acceder a los elementos de un array

console.log('El valor de la posicion 0 del array es:', dias[0]);
console.log('El valor de la posicion 0 del array es:', dias[6]);//esta es una posicion que no existe
console.log(dias.length);

//agregar elementos a un array
//array.push() agrega un nuevo elemento al final del array
longitud=dias.push('jueves');
longitud=dias.push('Viernes');
console.log('El valor del longitud es:',longitud);
console.log(dias);

//array.unshift() agrega un nuevo elemento al inicio del array

dias.unshift('Domingo');
console.log('El array modificado es:', dias);

//agregar un elemento a un array en una posicion especifica--splice

let array=[1,2,3];
console.log('el array es-->', array);
array.splice(1,0,5,6,7,7);
console.log('el array es-->', array);

//borrar elementos de un array

//eliminar el ultimo elemento
let arr=[1,2,3,4,5,6,7];
console.log('el arr es -->', arr);
arr.pop();
console.log('el arr es -->', arr);
//eliminar el primer elemento
arr.shift();
console.log('el arr es -->', arr);
//eliminar un elemento de cierta posicion de un array
arr.splice(3,2);
console.log('el arr es -->', arr);
//averiguar la posicion de un elemento
let arrayNumeros=[1,2,3,4,5,6,7,8,9];
let index=arrayNumeros.indexOf(5);
arrayNumeros.splice(index, 1);
console.log('ArrayNumeros-->', arrayNumeros);

//averiguar el valor maximo de un array de numeros

let precios=[100,23,45,67,324,32,65];
let valorMax=Math.max(...precios);
console.log('El precio es maximo es:', valorMax);
//averiguar el min
let valorMin=Math.min(...precios);
console.log('El precio minimo es:', valorMin);


//ORDENAR ARRAY

let arrString=['a','z','x','c','h'];

console.log('El array original-->', arrString);

let arrSortStr=arrString.sort();

console.log('El array ordenado-->', arrSortStr);

let arrNum=[2,10,54,3,6,9];

console.log('El arrNum original es-->', arrNum);

arrNum.sort((a,b)=> b - a);

console.log('El arrNum ordenado es-->', arrNum);

//Filtrar array

let arrOriginal=['perro','gato','conejo','elefante','rata'];

console.log('Array Original-->', arrOriginal);

let arrFilter=arrOriginal.filter((element)=> element !== 'perro' );

console.log('Array Filtrado es-->', arrFilter);
console.log('Array Original-->', arrOriginal);
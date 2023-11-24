console.log('Desde funciones');
//EJEMPLO DE QUE LA FUNCION SE LA PUEDE LLAMAR ANTES DE LA LINEA DE DECLARACION
funcionSuma(2, 2);
let a=2;

let b=3;

let suma=a + b;

console.log('El resultado de sumar a + b es:', suma);

a = 5;
b=10;

funcionSuma(a , b);

console.log('El resultado de sumar a + b es:', suma);

//FUNCIONES DECLARATIVAS

function funcionSuma(a,b){
    let resultado = a + b;
    console.log('El resultado de sumar numero1 y numero2 es:', resultado);
}
//NO SE PUEDE ACCEDER DESDE FUERA DE UNA FUNCION A CUALQUIER VARIABLE DECLARADA DENTRO DEL SCOPE DE ESTA
//console.log('El valor de resultado de la funcion es: ', resultado);

a=100;
b=200;

//utilizo una funcion

funcionSuma(a,b);

a=27;
b=13;

funcionSuma(a,b);
//esta es una funcion que no retorna nada
function saludar(nombre, apellido){
    console.log('Hola, mucho gusto '+nombre+' '+apellido+', ¿como estas?');
}

saludar('Alan', 'Chibilisco');

saludar('Chibilisco', 'Alan');
//Esta es una funcion que retorna un numero
function division(divisor, dividendo){
    return divisor / dividendo;
}

let resultado=division(4,2);
console.log('El resultado de division es:', resultado);

console.log('El resultado de dividir  4 en 0 es:', division(4,0));

console.log('El resultado de dividir 0 en 0 es:', division(0,0));

/*let nombreUsuario=prompt('Ingresa tu nombre por favor');
let apellidoUsuario=prompt('Ingresa tu apellido por favor');

saludar(nombreUsuario, apellidoUsuario);*/

//FUNCIONES ANONIMAS
//NO SE PUEDE INVOCAR A UN FUNCIONA ANONIMA ANTES DE SU DECLARACION
//miFuncion(3,2);

const miFuncion=function(a,b){
    console.log(a+b);
}

miFuncion(2,2);

// FUNCIONES FLECHA - ARROW FUNCTION
//NO SE PUEDE INVOCAR A UN FUNCION FLECHA ANTES DE SU DECLARACION
//console.log(miFuncionFlecha(2,2));

const miFuncionFlecha=(a,b)=>{
    return a * b;
}

/*console.log('El resultado de utilizar miFuncionFlecha es:',miFuncionFlecha(5,parseInt(prompt('Hola por favor ingresa un numero'))));*/

console.log('El resultado de utilizar miFuncionFlecha es:',miFuncionFlecha(5,5));


//CALLBACKS

const funcionCallback=(nombre, apellido, callback)=>{
    callback(nombre, apellido);
};

funcionCallback('Valentin', 'Quiroga', saludar);

let arrOriginal=['perro','gato','conejo','elefante','rata'];

console.log('Array Original-->', arrOriginal);

const filtro=(cadena, index)=>{
    console.log('Analizando el elemento de la posicion', index);
    if (cadena!=='perro') {
        return cadena;
    }else{
        return false;
    }

};

//let arrFilter=arrOriginal.filter((element, index)=> filtro(element, index));

let arrFilter=arrOriginal.filter((element, index)=>{
    console.log('Analizando el elemento de la posicion', index);
    if (element!=='perro') {
        return element;
    }else{
        return false;
    }
})

console.log('Array Filtrado es-->', arrFilter);

funcionCallback('Alan', 'Apellido',(a,b)=>{
    console.log(a,b);
});

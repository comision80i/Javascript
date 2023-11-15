console.log('estoy en operadores');

//##Operadores de asignacion =
let numero=5 //declarando una variable del tipo let y la estamos asignando/inicializando con el operador = y con valor 5
console.log('Valor de numero: ', numero);

let numero2=3;
console.log('Valor de numero2: ', numero2);

numero2=numero;
console.log('Valor de numero2 luego de igualarla a numero: ', numero2);

//##OPERADORES ARITMETICOS +, -, *, /, %

let valor=10;
let valor2=10;

//operador suma

let suma=valor + valor2; //tener en cuenta que si el valor de las variables es distinto de numeros el operador funciona como concatenacion;
console.log('El valor de suma es: ', suma);

//operador resta

let resta=valor - valor2;

console.log('El valor de resta es: ', resta);

//operador multiplicacion

let multiplicacion=valor * valor2;
console.log('El valor de multiplicacion es: ', multiplicacion);

//operador division

let division=valor/valor2;
console.log('El valor de division es: ', division);

//operador modulo o resto

let resto=valor % valor2;
console.log('El valor de resto es: ', resto);

//##OPERADORES UNITARIOS

//operador de incremento

// opc:1 valor = valor + 1;
//valor++; // esto siginifica que se va a incrementar en 1 el valor de la variable
//valor+=valor2;
valor+=3;
console.log('El valor de  let valor es: ', valor);

//operador de decremento
//valor--;
//valor-='b'; esto devuelve NaN
valor-=3;
console.log('El valor de  let valor es: ', valor);

//operador de negacion solo funciona con variables del tipo boolean

let logica=true;
console.log('El valor de la let logica es:', logica);
console.log('El valor de la let logica NEGADO es:', !logica);


//##OPERADORES CONDICIONALES (RELACIONALES - LOGICOS)

//relacionales

let variable1='10';
let variable2='10';

//op == 'igual a'
console.log('el op ==', variable1==valor);
//op === 'estrictamente igual' comprueba el valor de la variable sino tambien los tipos de las mismas
console.log('El resultado del op === es:' ,variable1===valor);
 //op != 'es distinto'
 console.log('el op != es:', variable1!=valor);
 //op !== 'estrictamente distinto'
 console.log('el op !== es:', variable1!==valor);
 // >, <, >=, <=

 console.log('el valor de > es:', valor>valor2);
 console.log('el valor de < es:', valor<valor2);
 console.log('el valor de >= es:', valor>=valor2);
 console.log('el valor de <= es:', valor<=valor2);

 //logico

 //--AND LOGICO &&; es true si ambas condiciones son true, caso contrario es false

 console.log('PROBANDO EL &&',variable1!=valor && variable1!==valor );
//--OR LOGICO ||, retorna true si al menos una de las condiciones evaluadas es true;
console.log('PROBANDO EL ||',variable1!=valor || variable1!==valor );


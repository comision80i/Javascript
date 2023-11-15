console.log('Condicionales');

//IF --> SI
//sintaxis
/**
 * if(condicion logica a evaluar){
 *  accion a efectuar en caso de que se cumpla condicion 
 * }
 */
let edad=60;
/*
if (!(edad>18)) {
    console.log('Eres mayor de edad');
}*/

/*if (edad>=21) {
    console.log('Eres legalmente responsable');
}else{
    console.log('Eres menor de 21 años')
};*/

if(edad<21){
    console.log('Eres menor de edad, tu edad es:', edad);
}else if(edad>=21 && edad<50){
    console.log('Eres un joven adulto tu edad es:', edad);
}else if(edad>=50 && edad<60){
    console.log('Eres adulto, tu edad es:',edad);
}else{
    console.log('Eres anciano, tu edad es:', edad);
}
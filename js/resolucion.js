console.log('Resolucion');

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.

//pedirle al usuario que ingrese la contraseña --> prompt
//almacenar lo que el usuario ingreso --> variable o constante
/*validar la longitud -->{
   1_conocer la longitud de la contraseña--.lenght
   2_compararla con las condiciones establecidas 
   3_que hacemos si coincide
}*/
// validar caracteres especiales

let contraseña=prompt('Ingrese una contraseña por favor, entre 3 y 7 caracteres con al menos un ! o -');

console.log('Contraseña-->', contraseña);

const regexContraseña=/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
const regexMayus=/([A-Z])$/;
const regexMinus=/([a-z])$/;
//condiciones minimo 3 caract, max 7 caract.
/*if (contraseña!==null) {
    if (contraseña.length>=3 && contraseña.length<=7) {
        console.log('La contraseña tiene una longitud valida');
    }else{
        console.log('La contraseña no cumple con la longitud');
    }    
}else{
    console.log('El usuario presiono cancelar');
}*/

if (contraseña===null) {
    console.log('El usuario presiono cancelar');
} /*else if(3<=contraseña.length<=7 && (contraseña.includes(caracteres)||contraseña.includes(terminacion))){
    console.log('La contraseña tiene una longitud valida y contiene caracteres especiales');
}*/else if(regexContraseña.test(contraseña.trim())){
    console.log('La contraseña tiene una longitud valida y contiene caracteres especiales');
}
else{
    console.log('La contraseña no cumple con la longitud o no contiene caracteres especiales');
}

//condicion de presencia de ciertos caracteres especiales


/*if (contraseña.includes(caracteres)||contraseña.includes(terminacion)) {
    console.log('La contraseña incluye los caracteres especiales');
}else{
    console.log('La contraseña no incluye los caracteres especiales');
}*/

let letra='4';

if(regexMayus.test(letra)){
    console.log('Es una letra mayuscula');
}else if(regexMinus.test(letra)){
    console.log('Es una letra minuscula');
}else{
    console.log('No es un caracter valido');
}

switch (letra) {
    case letra.toUpperCase(): //A
        console.log('Resultado-->Es mayuscula');
        break;
    default:
        console.log('Es minuscula');
        break;
}

//ternario
let apellido='alan';

console.log(apellido.length>=3?'Verdadero':'Falso');
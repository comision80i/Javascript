console.log('POO');

/**
 * EN OBJETOS TENEMOS PROPIEDAS O ATRIBUTOS Y METODOS O FUNCIONALIDADES
 * 
 * ANALOGIA PROPIEDAD O ATRIBUTO = VARIABLE
 * METODOS O FUNCIONALIDADES = FUNCIONES
 * 
 * 
 */

let nombre='Alan';
let apellido='Chibilisco'
let edad='35'

let nombre1='Valentin';
let apellido1='Quiroga';
let edad1=27;

console.log(nombre+apellido+edad);
console.log(nombre1+apellido1+edad);

/** CREACION DE UN OBJETO LITERAL
 * SINTAXIS
 * 
 *  CONST [NOMBRE-IDENTIFICADOR]={
 *  PROPIEDADES O ATRIBUTOS...
 *  KEY: VALOR
 * 
 * }
 */



const profesor={
    nombre: 'Alan',
    apellido:'Chibilisco',
    edad:35,

    saludar(){
        console.log('Hola soy el profesor: ' + this.nombre );
    },

    mostrarInformacion(){
        console.log(`Hola mi nombre es ${this.nombre}, mi apellido es ${this.apellido} y mi edad es ${this.edad}`);
    }
};

const tutor={
    nombre:'Valentin',
    apellido:'Quiroga',
    edad:27,
    saludar(){
        console.log('Hola soy el tutor: ' + this.nombre );
    }
}

const profesor2={
    nombre: 'Alan',
    apellido:'Chibilisco',
    edad:35
};

console.log('Este es el objeto profesor-->', profesor);
console.log('Este es el objeto tutor-->', tutor);

//ACCEDER AL VALOR DE LOS ATRIBUTOS
//1- OBJETO.PROPIEDAD
//2- OBJETO["PROPIEDAD"]

console.log('El nombre del profesor es:', profesor.nombre);
console.log('El apellido del profesor es:', profesor['apellido']);

console.log('El nombre del tutor es:', tutor.nombre);
console.log('La edad del tutor es:', tutor.edad);

//AGREGAR UNA NUEVA PROPIEDAD O ATRIBUTO A UN OBJETO

//OBJETO.NUEVAPROP=NUEVO-VALOR;

profesor.sexo='Masculino';
tutor.sexo='Masculino';
console.log('El objeto tutor modificado es-->', tutor);
console.log('El sexo del profesor es:', profesor.sexo);

//MODIFICAR UN VALOR DE UN ATRIBUTO DE UN OBJETO
// OBJETO.PROPIEDAD=NUEVO-VALOR;
profesor.edad=40;
console.log('Profesor modificado-->', profesor);

//ELIMINAR UNA PROPIEDAD DE UN OBJETO
// delete OBJETO.PROPIEDAD

 delete profesor.sexo;

console.log('Profesor con prop.sexo eliminado-->', profesor);


//COMPARAR OBJETOS
let a=1;
let b=1;
console.log(a===b);

console.log('profesor==tutor',profesor==tutor);//false
console.log('profesor==profesor2',profesor.nombre==profesor2.nombre);//true
console.log('profesor==profesor2',profesor==profesor2);//false

const profesor1=profesor;

console.log('profesor1==profesor',profesor1===profesor);//true


//RECORRER LAS PROPIEDADES DE UN OBJETO

for (const value in profesor) {
    console.log(profesor[value]);   
};

//UTILIZAR LOS METODOS DE UN OBEJTO

profesor.saludar();

tutor.saludar();

profesor1.saludar();


profesor.mostrarInformacion();


//Funcion Constructora

function Auto(marca, color){
    this.brand=marca;
    this.colour=color;
}


const ford=new Auto('ford', 'azul');
console.log(ford);

const fiat=new Auto('FIAT','NEGRO');

console.log(fiat);
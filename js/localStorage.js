let arrUsuarios=[];

const user1={
    nombre:'Alan',
    rol:'Admin'
};

const user2={
    nombre:'Valentin',
    rol:'Admin'
};

arrUsuarios.push(user1);
arrUsuarios.push(user2);

console.log(arrUsuarios);

//LOCAL STORAGE
/**
 * ALMACENA DE LA SIGUIENTE MANERA KEY - VALOR (string - string)
 * 
 * METODOS:
 * 
 * SET ITEM --> ES PARA CREAR NUEVO REGISTROS
 * 
 * GET ITEM --> ES PARA OBTENER UN REGISTRO
 * 
 */
//GUARDAMOS ALGO EN EL LS
localStorage.setItem('TEST','PROBANDO EL ALMACENAMIENTO EN EL LOCAL STORAGE');

//OBTENER UN REGISTRO DEL LS

console.log(localStorage.getItem('TEST'));

//MODIFICAR EL VALOR DE UN REGISTRO YA CREADO

localStorage.setItem('TEST','PROBANDO LA MODIFICACION')

//ELIMINAR UN REGISTRO DEL LS
localStorage.removeItem('TEST');

localStorage.setItem('TEST','PROBANDO EL ALMACENAMIENTO EN EL LOCAL STORAGE');
localStorage.setItem('TEST1','PROBANDO EL ALMACENAMIENTO EN EL LOCAL STORAGE');

localStorage.clear();


//JSON 

localStorage.setItem('usuarios', JSON.stringify(arrUsuarios));

const user=localStorage.getItem('usuarios');
const usersLS=JSON.parse(user);
console.log(user);
console.log(usersLS);
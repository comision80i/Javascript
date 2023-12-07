/**CREAR UN SISTEMA DONDE SE LE MUESTRE AL USUARIO UN MENU DE OPCIONES PARA CREAR MENTOR, ALUMNO, LISTAR TODO, LISTAR MENTOR, LISTAR ALUMNO Y QUE LOS DATOS ESTEN PERSISTIDOS, EL SISTEMA SE DETENDRA CUANDO EL USUARIO LO INDIQUE */

class Persona {
  constructor(nombre, apellido, dni) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
  }

  mostrarInformacion() {
    return `Nombre: ${this.nombre}, Apellido: ${this.apellido}, DNI: ${this.dni}`;
  }
}

class Mentor extends Persona {
  constructor(nombre, apellido, dni, materia) {
    super(nombre, apellido, dni);
    this.materia = materia;
    this.rol = "Mentor";
  }

  mostrarInformacion() {
    return `Rol: ${this.rol}, Apellido: ${this.apellido}, Nombre: ${this.nombre}, DNI: ${this.dni}, Materia: ${this.materia}`;
  }
}

class Alumno extends Persona {
  constructor(nombre, apellido, dni, curso, becado) {
    super(nombre, apellido, dni);
    this.rol = "Alumno";
    this.curso = curso;
    this.becado = becado;
  }

  mostrarInformacion() {
    return `Rol: ${this.rol}, Becado: ${this.becado}, Apellido: ${this.apellido}, Nombre: ${this.nombre}, DNI: ${this.dni}, Curso: ${this.curso}`;
  }
}

class Sistema {
  constructor() {
    /*const lsValue=localStorage.getItem('almacenamiento');
    if (lsValue!==null) {
      const array=JSON.parse(lsValue);
      this.almacenamiento = array;
      console.log(this.almacenamiento);
    }else{
      this.almacenamiento=[]
    }*/
    this.almacenamiento=JSON.parse(localStorage.getItem('almacenamiento')) || [];
  }

  existeUsuario(usuario) {
    const exist = this.almacenamiento.find(
      (element) => element.dni === usuario.dni
    );
    if (exist !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  existeUsuarioPorDNI(dni){
    const prueba=(element)=>element.dni===dni;
    const exist=this.almacenamiento.some(prueba);
    return exist;
  }

  crearMentor(mentor) {
    if (this.existeUsuario(mentor)) {
      console.log("El usuario ya existe");
    } else {
      this.almacenamiento.push(mentor);
      console.log('Exito se creo el registro');
    }
  }

  crearAlumno(alumno) {
    if (this.existeUsuario(alumno)) {
      console.log("El usuario ya existe");
    } else {
      this.almacenamiento.push(alumno);
      console.log('Exito se creo el registro');
    }
  };

  mostrarInformacion(object){
    let str='';
    for (const key in object) {
     str+=` ${key.toUpperCase()}: ${object[key]} `
    }
    return str;
  }

  listarTodo(){
    if (this.almacenamiento.length===0) {
        console.log('Aun no existen registros');
    }else{        
        this.almacenamiento.forEach((element, index)=>{
            //console.log(`${index+1}: ${element.mostrarInformacion()}`);
            console.log(`${index+1}: ${this.mostrarInformacion(element)}`);
        });
    }
  };

  listarMentor(){
    const mentores=this.almacenamiento.filter((element)=>element.rol==='Mentor');
    if (mentores.length>0) {
        mentores.forEach((element, index)=>{
            console.log(`${index+1}: ${this.mostrarInformacion(element)}`);
        })
    }else{
        console.log('Aun no hay registros de MENTORES');
    }
  };

  listarAlumnos(){
    const alumnos=this.almacenamiento.filter((element)=>element.rol==='Alumno');
    if (alumnos.length>0) {
        alumnos.forEach((element, index)=>{
            console.log(`${index+1}: ${this.mostrarInformacion(element)}`);
        })
    }else{
        console.log('Aun no hay registros de ALUMNOS');
    }
  };


  eliminarRegistro(dni){
    const almacenamientoActualizado=this.almacenamiento.filter((element)=>element.dni!==dni);
    if (almacenamientoActualizado.length>0) {
      this.almacenamiento=almacenamientoActualizado;  
    }
    
  }




};


const system=new Sistema();

do {
    let opcion=parseInt(prompt('Seleccione una opcion, 1-CREAR MENTOR, 2-CREAR ALUMNO, 3-LISTAR TODO, 4-LISTAR MENTORES, 5-LISTAR ALUMNOS, 6-ELIMINAR UN RESGISTRO'));

    switch (opcion) {
        case 1:
            let nombreM=prompt('Ingrese el nombre');
            let apellidoM=prompt('Ingrese el apellido');
            let dniM=prompt('Ingrese el dni');
            let materiaM=prompt('Ingrese la materia');
            const mentor=new Mentor(nombreM, apellidoM, dniM, materiaM);
            system.crearMentor(mentor);
            break;
        case 2:
            let nombreA=prompt('Ingrese el nombre');
            let apellidoA=prompt('Ingrese el apellido');
            let dniA=prompt('Ingrese el dni');
            let cursoA=prompt('Ingrese el curso');
            let becadoA=confirm('Es becado si es si seleccione aceptar caso contrario cancelar');
            const alumno=new Alumno(nombreA, apellidoA, dniA, cursoA, becadoA);
            system.crearAlumno(alumno);
            break;
        case 3:
            system.listarTodo();
            break;
        case 4:
            system.listarMentor();
          break;    
        case 5:
          system.listarAlumnos();
          break;

        case 6:
          let dniBuscado=prompt('Por favor ingrese el DNI del registro que desea eliminar');
          const resultadoBusqueda=system.existeUsuarioPorDNI(dniBuscado);
          if (resultadoBusqueda) {
            const eleccionUsuario=confirm('¿Esta seguro de eliminar el registro?');
            if (eleccionUsuario) {
              system.eliminarRegistro(dniBuscado);
              console.log('Exito se elimino el registro deseado!');
            }
          } else {
            console.log('No se encontro el usuario.');
          }
          

          break;
        default:
            console.error(`OPCION INGRESADA INVALIDA: INGRESO--> ${opcion}`);
            break;
    }
} while (confirm('¿Desea continuar operando?'));


console.log('###Alamcenamiento-->',system.almacenamiento);

localStorage.setItem('almacenamiento',JSON.stringify(system.almacenamiento));
/**
 * PASOS:
 * primero tendriamos que discriminar el usuario que queremos eliminar, mediante el dni{
 * caso 1 encuentra el usuario buscado-->mostrar un msj de confirmacion, en caso de aceptar, mostrar msj indicando que se elimino y luego persistir el nuevo array filtrado el cual ya no tiene el usuario que deseamos eliminar;, en caso de que cancele mostrar el msj de que si quiere seguir operando
 * caso 2 no encuentra el usuario--> mostrar msj indicando que no se encontro el usuario--HECHO
 * }
 * 
 * 
 * 
 * 
 */
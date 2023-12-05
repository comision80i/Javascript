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
    const lsValue=localStorage.getItem('almacenamiento');
    if (lsValue!==null) {
      const array=JSON.parse(lsValue);
      this.almacenamiento = array;
    }
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

  listarTodo(){
    if (this.almacenamiento.length===0) {
        console.log('Aun no existen registros');
    }else{        
        this.almacenamiento.forEach((element, index)=>{
            console.log(`${index+1}: ${element.mostrarInformacion()}`);
        });
    }
  };

  listarMentor(){
    const mentores=this.almacenamiento.filter((element)=>element.rol==='Mentor');
    if (mentores.length>0) {
        mentores.forEach((element, index)=>{
            console.log(`${index+1}: ${element.mostrarInformacion()}`);
        })
    }else{
        console.log('Aun no hay registros de MENTORES');
    }
  };

  listarAlumnos(){
    const alumnos=this.almacenamiento.filter((element)=>element.rol==='Alumno');
    if (alumnos.length>0) {
        alumnos.forEach((element, index)=>{
            console.log(`${index+1}: ${element.mostrarInformacion()}`);
        })
    }else{
        console.log('Aun no hay registros de ALUMNOS');
    }
  };

};


const system=new Sistema();

do {
    let opcion=parseInt(prompt('Seleccione una opcion, 1-CREAR MENTOR, 2-CREAR ALUMNO, 3-LISTAR TODO, 4-LISTAR MENTORES, 5-LISTAR ALUMNOS'));

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
        default:
            console.error(`OPCION INGRESADA INVALIDA: INGRESO--> ${opcion}`);
            break;
    }
} while (confirm('¿Desea continuar operando?'));


console.log('###Alamcenamiento-->',system.almacenamiento);

localStorage.setItem('almacenamiento',JSON.stringify(system.almacenamiento));
/**
 * PASOS:
 * 1-COMPROBAR SI EXISTE UN LS ALMACENADO --> localStorage.getItem(almacenamiento); string | null
 * 1-a-si es string necesito convertirlo de nuevo a un array --> JSON.parse[resultado localStorage];
 * 1-b-si es null necesitamos crear localStorage --> localStorage.setItem('almacenamiento', JSON.stringify([]));
 * 
 * 
 */
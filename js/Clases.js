// class Persona {
//   constructor(nombre, apellido, edad) {
//     this.name = nombre;
//     this.surName = apellido;
//     this.age = edad;
//   }

//   saludar() {
//     console.log(`Hola soy ${this.name}`);
//   }

//   mostrarInformacion() {
//     console.log(
//       `Hola mi nombre es ${this.name}, mi apellido es ${this.surName} y mi edad es ${this.age}`
//     );
//   }

//   cambiarDatos(nuevoNombre, nuevoApellido, nuevaEdad) {
//     this.name = nuevoNombre;
//     this.surName = nuevoApellido;
//     this.edad = nuevaEdad;

//     console.log(`Exito!, los datos fueron actualizados`);
//     this.mostrarInformacion();
//   }
//   obtenerEdad() {
//     return this.age;
//   }

//   get GetDatos() {
//     return `${this.name}, ${this.surName}, ${this.age}`;
//   }

//   get GetEdad() {
//     return this.edad;
//   }
//   set SetName(newName) {
//     this.name = newName;
//   }

//   get GetName() {
//     return this.name;
//   }
// }

// //CREAR UN OBJETO EN BASE A LA CLASE --> INSTANCIAR UNA CLASE, QUE ES LO MISMO QUE DECIR QUE CREO UNA NUEVA INSTANCIA DE UNA CLASE

// const alan = new Persona("Alan", "Chibilisco", 35);

// console.log(alan);

// alan.mostrarInformacion();

// const valentin = new Persona("Valentin", "Quiroga", 27);

// valentin.mostrarInformacion();

// alan.cambiarDatos("Pedro", "Gomez", 36);

// //alan.mostrarInformacion();

// console.log(alan.obtenerEdad());

// const edadTutor = valentin.obtenerEdad();

// if (edadTutor < 40) {
//   console.log("Es menor de 40 años");
// } else {
//   console.log("Es mayor de 40 años");
// }

// alan.name = "Jose";

// console.log(alan);

// alan.SetName = "Alan";

// console.log(alan.GetEdad);

// class A{

// }
// class Alumno extends Persona{
//     constructor(nombre, apellido, edad, rol, curso){
//         super(nombre, apellido, edad);
//         this.rol=rol;
//         this.curso=curso;
//     }

//     mostrarInformacion(){
//         console.log(
//             `Hola mi nombre es ${this.name}, mi apellido es ${this.surName}, mi edad es ${this.age}, mi rol es: ${this.rol} y estoy en el curso de: ${this.curso}`
//           );
//     }
// }


// const alumno=new Alumno('pepe', 'guardiola', 90, 'alumno', 'FullStack');

// alumno.saludar();
// alumno.mostrarInformacion();
// //alumno.mostrarInformacionAlumno();


// class Mentor extends Persona{
//     constructor(nombre, apellido, edad, materia){
//         super(nombre, apellido, edad);
//         this.rol='Mentor';
//         this.materia=materia;
//     }

//     mostrarInformacion(){
//         console.log(  `Hola mi nombre es ${this.name}, mi apellido es ${this.surName}, mi edad es ${this.age}, mi rol es: ${this.rol} y dicto el curso de: ${this.materia}`);
//     }
// }

// const mentor=new Mentor('juan','arze',45,'JAVA');

// mentor.mostrarInformacion();


// BOM -> Browser Object Model= Nos permite manipular el navegador: su historial, su barra de direcciones, la informacion del navegador, la camara , la pantalla, entre otras cosas.

//* Funciones de Tiempo

// setInterval --> ejecuta una tarea cada un determinado lapso de tiempo
// const idInterval = setInterval(() => console.log("hola Alan"), 1000);

// // setTimeout --> ejecuta una tarea una sola vez, pasado determinado tiempo

// setTimeout(() => {
//   console.log("detenemos el intervalo");
//   clearInterval(idInterval);
// }, 10000);

// clearInterval(id) detiene la ejecucion del setInterval que le pasamos su ID

//! Cuenta Regresiva
let contador = 10;
const cuentaRegresiva = setInterval(() => {
  console.log("Despegue en ", contador);
  contador--;
}, 1000);

setTimeout(() => {
  console.log("despegueeeee");
  clearInterval(cuentaRegresiva);
}, 11000);

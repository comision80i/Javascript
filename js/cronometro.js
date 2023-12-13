console.log("Cronometro");
let horas = 0;
let minutos = 0;
let segundos = 0;
let idInterval=undefined;

let pantallaCronometro = document.getElementById("pantallaCronometro");

console.log(pantallaCronometro);

function Iniciar() {
  console.log("desde iniciar");
  if (idInterval===undefined) {      
      idInterval = window.setInterval(tiempo, 999);
  }else{
    console.log('id interval ya tiene valor asignado');
  }
}

function Pausar() {
  window.clearInterval(idInterval);
  idInterval=undefined;
  
}

function Reiniciar() {
  window.clearInterval(idInterval);
  idInterval=undefined;
  horas = 0;
  minutos = 0;
  segundos = 0;
  pantallaCronometro.innerHTML = `0${horas}:0${minutos}:0${segundos}`;
}

function tiempo() {
  /*let horaAux='';
    let minutoAux='';
    let segundoAux='';*/
  let horaAux, minutoAux, segundoAux;

  segundos++;

  if (segundos > 59) {
    segundos = 0;
    minutos++;
  }

  if (minutos > 59) {
    minutos = 0;
    horas++;
  }

  if (horas > 23) {
    horas = 0;
    minutos = 0;
    segundos = 0;
  }

  if (segundos < 10) {
    segundoAux = `0${segundos}`;
  } else {
    segundoAux = `${segundos}`;
  }

  if (minutos < 10) {
    minutoAux = `0${minutos}`;
  } else {
    minutoAux = minutos;
  }

  if (horas < 10) {
    horaAux = `0${horas}`;
  } else {
    horaAux = horas;
  }

  pantallaCronometro.innerHTML = `${horaAux}:${minutoAux}:${segundoAux}`;
}

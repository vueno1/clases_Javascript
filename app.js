// consulta nombre al usuario....

let nombre = prompt ("cual es tu nombre?");
let bienvenida = "bienvenida" + " " + nombre;
alert (bienvenida);

// consulta numero de socio....

let numeroDeSocio = prompt ("ingrese numero de socio")
let socio = "socio" + " " + numeroDeSocio;

console.log (nombre + " " + socio);

// consulta edad y calculo ....
let edadSocio = prompt ("indique su edad");

let añoActual = 2021;
let calculoAñoNacimiento = añoActual - edadSocio;
let nacimientoParrafo = "usted nacio en el año";
console.log (nacimientoParrafo + " " + calculoAñoNacimiento);

// calculo egresado escuela .....

let añoFinEscolar = Number (prompt ("indique año de egresado escuela"));
let calculoAñoFinEscolar = añoActual - añoFinEscolar;
console.log (nombre + " " + "finalizo la escuela hace" + " " + calculoAñoFinEscolar + " " + "años");










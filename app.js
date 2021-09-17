//entrega 1...................................................
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


//-------------------------------------------------------------------------------------------------------
// entrega 2.........................................

// pedido de merchandising.....

const merch1 = "cuaderno"
const merch2 = "llavero"
const merch3 = "sticker"
const merch4 = "medias"

let merchandising = prompt ("que producto elige?")

if (merchandising == merch1 || merchandising == merch2 || merchandising == merch3) {
    console.log ('disponible');
}  else {
    console.log ('no esta disponible')
}

let merch1Cant = 2
let merch2Cant = 1
let merch3Cant = 3
let merch4Cant = 0

let merchChoose = Number (prompt ("cantidad?"))

//eleccion cuadernos ....................
if (merchChoose === merch1 || merchChoose ===1) {
    console.log ("1 unidad en el carrito")
} else if (merchChoose === merch1 || merchChoose ===2) {
    console.log ("2 unidades en el carrito")
} else {
    console.log ("no hay suficiente")
}

//eleccion llavero..........
if (merchChoose === merch2 || merchChoose ===1) {
    console.log ("1 unidad en el carrito")
} else {
    console.log ("no hay suficiente")
}

//eleccion stickers.......
if (merchChoose === merch3 || merchChoose ===1) {
    console.log ("1 unidad en el carrito")
} else if (merchChoose === merch3 || merchChoose ===2) {
    console.log ("2 unidades en el carrito")
} else if (merchChoose === merch3 || merchChoose ===3) {
    console.log ("3 unidades en el carrito")
} else {
    console.log ("no hay suficiente")
}













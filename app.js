//-----------
// entrega 4 - funciones 

// boton: inicio de sesion: ingreso de datos del usuario.///

//declaro nombre y contraseñas correctas del usuario (ingresados en el registro)

/*
let usuario1 = "valeria"
let contraseña1 = 2536

// funcion para pedir datos al momento de iniciar sesion:
// usuario + contraseña
function ingreso () {

    //pido datos al usuario
    let nombreUs = prompt ("ingrese id usuario")
    let contraseñaUs = Number (prompt ("ingrese contraseña"))

    // dato ingresado a minuscula
    let nombreMin = nombreUs.toLowerCase ()
    
    // condiciones de datos ingresados
    if (nombreMin === usuario1 && contraseñaUs === contraseña1) {
        console.log (`bienvenida ${nombreMin}`)
        return `bienvenida ${nombreMin}`

    } else {
        console.log ("usuario o contraseña incorrectos")
        return "usuario o contraseña incorrectos"
    }

}

ingreso ();

*/
//--------------------------------------------------------------------------------------------------

// compra de producto: ////

let producto1 = "the last of us"
let producto2 = "god of war"
let producto3 = "ghost of tsushima"

let netoPrecio1 = 500
let netoPrecio2 = 600
let netoPrecio3 = 800

const suma = (neto, iva) => neto + iva ;
const iva = (x) => x *0.21
const mult = (unidad, cantidad) => unidad * cantidad


let productoSeleccion = prompt ("elija juego")
let productoCantidad = Number (prompt ("cantidad?"))

let precioFinal = 0

if (productoSeleccion === producto1) {
    precioFinal = mult (suma (netoPrecio1, iva (netoPrecio1)), productoCantidad)
    alert (`carrito de compras: ${precioFinal}`)

} else if (productoSeleccion === producto2) {
    precioFinal = mult (suma (netoPrecio2, iva (netoPrecio2)), productoCantidad)
    alert (`carrito de compras: ${precioFinal}`)    

} else if (productoSeleccion === producto3) {
    precioFinal = mult (suma (netoPrecio3, iva (netoPrecio3)), productoCantidad)
    alert (`carrito de compras: ${precioFinal}`) 

} else {
    alert (`no esta disponible`)
}

console.log (precioFinal)

let descuentoCupon = 2525
let consultaDescuento = Number (prompt ("ingrese numero descuento"))

let precioConDescuento = 0

const descuento = (y) => y *0.9

if (consultaDescuento === descuentoCupon) {
    precioConDescuento = descuento (precioFinal)
    alert (`precio con 10% descuento = ${precioConDescuento}`)
} else {
    alert (`No corresponde descuento, precio final = ${precioFinal}`)
}


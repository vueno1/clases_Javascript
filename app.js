/*****************************************************************
* 
* 
-----------PAGINA DE VENTA DE VIDEOJUEGOS + MERCHANDISING---------
*
*
******************************************************************/

//-----------constructor de usuarios --------------------------------
class Usuarios {

    constructor (nombrePP, apellidoPP, mailPP, idPP, contraseñaPP) {
        this.nombreUs = nombrePP;
        this.apellidoUs = apellidoPP;
        this.mailUs = mailPP;
        this.idUs = idPP;
        this.contraseñaUs = contraseñaPP;
    }
}

//---------declaracion de propiedades para luego preguntarlas x prompt----
let nombreUs = prompt ("ingrese nombre:")
let apellidoUs = prompt ("ingrese apellido:")
let mailUs = prompt ("ingrese email:")
let idUs = prompt ("seleccione su ID")
let contraseñaUs = prompt ("ingrese contraseña:")

//---------llamo al Constructor y creo nuevo Usuario1----------------------
const usuario1 = new Usuarios (nombreUs, apellidoUs, mailUs, idUs, contraseñaUs)

//--------lo muestro x consola y x alert------------------------------------
console.log (usuario1)
alert (`Bienvenida ${nombreUs}!`)



//------------se vuelve a pedir ingreso a la pagina-----------------------
let usuarioId = prompt ("ingrese ID")
let contraseñaId = prompt ("ingrese contraseña")

//-----------se corrobora si los datos son correctos----------------------
if (usuarioId === idUs & contraseñaId === contraseñaUs) {
    console.log ("bienvenido de vuelta!")
} else {
    console.log ("ID o contraseña incorrecto")
}

/****************************************************************************
* 
*************************************************************************** */
//----------creacion del constructor de Productos--------------------------
class Productos {
    
    constructor (tituloPP, generoPP, precioPP, stockPP) {
        this.titulo = tituloPP;
        this.genero = generoPP;
        this.precio = precioPP;
        this.stock = stockPP;
    }

    comprar (cantidad) {

        if (this.stock <= 0) {
            console.log ("no hay stock!")

        }   else {
            this.stock = this.stock - cantidad
            console.log (`carrito de compras: ${this.titulo} a Usd: ${this.precio*cantidad}`)
        }
    }
}

//----------se cargan productos = juegos------------------------------------

const juego1 = new Productos ("the last of us 2", "violencia", 26, 5)
const juego2 = new Productos ("fifa 22", "deportes", 60, 10)
const juego3 = new Productos ("horizon zero dawn", "aventura", 20, 2)
const juego4 = new Productos ("lego marvels", "infantil", 20, 5)

//---------muestro x consola el producto comprado y cantidad---------------
console.log (juego1.comprar (2))



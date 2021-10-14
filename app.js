/*****************************************************************
* 
* 
-----------PAGINA DE VENTA DE VIDEOJUEGOS + MERCHANDISING---------
*
*
******************************************************************/

//-----------constructor de usuarios --------------------------------
class Usuarios {

    constructor (nombreUS, apellidoUS, mailUS, idUS, contraseñaUS) {
        this.nombreUs = nombreUS;
        this.apellidoUs = apellidoUS;
        this.mailUs = mailUS;
        this.idUs = idUS;
        this.contraseñaUs = contraseñaUS;
    }
}

//------declarar array = listaUsuario------------------------------------
let listaUsuario = []

//------declaro globalmente variables---------------------------
let nombreUs = 0
let apellidoUs = 0
let mailUs = 0
let idUs = 0
let contraseñaUs = 0

//------funcion para agregar usuarios-------------------------------------
const agregarUsuario = () => {

    //---------declaracion de propiedades para luego preguntarlas x prompt----
    nombreUs = prompt ("ingrese nombre:")
    apellidoUs = prompt ("ingrese apellido:")
    mailUs = prompt ("ingrese email:")
    idUs = prompt ("seleccione su ID")
    contraseñaUs = Number (prompt ("ingrese contraseña:"))

    //---------llamo al Constructor y creo nuevo Usuario----------------------
    const usuario = new Usuarios (nombreUs, apellidoUs, mailUs, idUs, contraseñaUs)

    // -----BOTON: "agregarUsuario ()" para dicha funcion------------------

    //-----condicional en el caso que el localstorage este vacio, o lleno-------

    if (localStorage.getItem ("usuario") == null) {
        listaUsuario.push (usuario)
        localStorage.setItem ("usuario", JSON.stringify (listaUsuario))
    } else {
        const nuevaListaUsuario = JSON.parse (localStorage.getItem ("usuario"))
        nuevaListaUsuario.push (usuario)
        localStorage.setItem ("usuario", JSON.stringify (nuevaListaUsuario))
    }
}

//---------funcion para iniciar sesion -------------------------------
const inicioSesion = () => {

    //pido datos al usuario---------------------------------------
    let nombreUs = prompt ("ingrese ID:")
    let contraseñaUs = Number (prompt ("ingrese contraseña:"))

    // dato ingresado a minuscula----------------------------------
    let nombreMin = nombreUs.toLowerCase ()
    
    // condiciones de datos ingresados-------------------------------
    if (nombreMin === idUs && contraseñaUs === contraseñaUs) {
        console.log (`bienvenida ${nombreMin}`)
        return `bienvenida ${nombreMin}`

    } else {
        console.log ("usuario o contraseña incorrectos")
        return "usuario o contraseña incorrectos"
    }

}

//------BOTON = "inicioSesion" para ingreso del usuario al sistema-----------
//---------------------------------------------------------------------------

/****************************************************************************
* 
*
*******************PRODUCTOS************************************************
*
*************************************************************************** */

//----------creacion del constructor de Productos--------------------------
class Productos {
    
    constructor (nombrePP,categoriaPP,precioPP,stockPP) 
    {
        this.nombreProducto = nombrePP;
        this.categoriaProducto = categoriaPP;
        this.precioProducto = precioPP;
        this.stockProducto = stockPP;
    }

    //-----creo boton de compra → y comparativos segun cantidad de compra-------------------
    comprar (cantidad) {

        if (this.stock <= 0) {
            console.log ("no hay stock!")

        }   else {
            this.stock = this.stock - cantidad
            console.log (`carrito de compras: ${this.nombre} a Usd: ${this.precio *cantidad}`)
        }
    }

    //-------------listaProductos [n°lista].comprar (cantidad) en consola.....

}

//---------declaro constante = boton "listaProductos"--------------------------------
const listaProductos = []

//---------creo el boton "agregarProductos" para que active los prompt----
const agregarProductos = () => {

    //-----pido datos a ingresar----------------------
    const nombreProducto = prompt ("ingrese producto")
    const categoriaProducto = prompt ("ingrese categoria")
    const precioProducto = Number (prompt ("ingrese precio"))
    const stockProducto = Number (prompt ("ingrese stock"))

    //-------BOTON = "agregarProductos" para ir agregando productos x prompt-----------
    //------BOTON = "listaProductos" para mostrar la lista de productos ingresados-----

    //---por cada dato ingresado, creo un objeto a mi lista----------------
    const producto = new Productos (nombreProducto, categoriaProducto,precioProducto,stockProducto)

    //---creo el condicional para guardar la informacion ingresada--------------
    //-----si no hay informacion en el storage, lo guardo.
    if (localStorage.getItem("producto") == null) { // si busco en local storage y no hay informacion.... = null
        listaProductos.push (producto) // pusheo info y agrego a listaproducto.
        localStorage.setItem ("producto", JSON.stringify(listaProductos)) // y esa informacion de "listaproductos" la transformo a JSON y 
        //guardo en local storage.

    } else { // pero, si el local storage no esta vacio.
        const nuevalistaProductos = JSON.parse(localStorage.getItem("producto")) // creo una nueva array (nuevalista....) donde
        //parseo lo que esta en local storage a nombre de "producto" 

        nuevalistaProductos.push(producto) // pusheo ese nuevo elemento a mi nueva array
        localStorage.setItem("producto", JSON.stringify(nuevalistaProductos))  // y guardo en local storage pasando la info a JSON.
    }
    
}

//-----------------------------------------------------------------------------------------------------------------------------
//------ejemplos de cambios en una especifica seccion del html----------


//ejemplo 1)
// hago un cambio en la imagen central, en la seccion = mainNoticiasImg ----------------------------------
document.getElementsByClassName ("mainNoticiasImg")[1].src = "https://i0.wp.com/hipertextual.com/wp-content/uploads/2020/04/hipertextual-the-last-of-us-part-ii-y-otros-exclusivos-playstation-podrian-llegar-pc-2020610272-scaled.jpg?fit=2560%2C1518&ssl=1"


// creo el elemento span en esta seccion para comentario extra-----
const span = document.createElement ("span")  // creo la constante "span" con el elemento "span"
span.setAttribute = ("class", "extra")  // FIXME: aca no se por q no me crea la clase "extra"
span.textContent = "Nuevas Noticias sobre esta img!" // agrego el texto a mi span
span.style.color = "violet" //agrego color a ese nuevo span 
span.style.fontFamily = "roboto" // agrego un font-family
span.style.textAlign = "center" // lo centro 
span.style.fontWeight = "bold" // agrego un fontWeight a ese span

document.getElementsByClassName ("mainNoticiasCuadrosDentro") [1].appendChild (span) // se agrega el hijo "span" en el padre "div = class adicional"

//----------------------------------------------------------------------------------------------------------------

//ejemplo 2) 
// creo un h2 en la seccion TECONOLOGIA para nuevo comentario-----------------------------------
const h3 = document.createElement ("h3") 
h3.setAttribute = ("id", "nuevaNoticiaTech")
h3.textContent = "Hay nuevas novedades en el mundo de la teconologia!"

document.getElementsByClassName ("mainElectronica")[0].appendChild (h3)
h3.style.color = "white"
h3.style.textAlign = "center"
h3.style.fontSize = "30px"

//------------------------------------------------------------------------------------------------------------------------------

//ejemplo 3) 
//creamos un parrafo, cuando vemos que el elemento fue seleccionado por el usuario-------

const consultarAlCliente =() => { // creo una funcion para "consultar pedido"

    const eleccionJuego = prompt ("ingrese juego:") // hago la pregunta x prompt y creo una constante 

    if (eleccionJuego === "the last of us 2") {  // aca no supe como traer la informacion del localstorage

        // realizo los cambios en el html segun la eleccion del cliente 
        const eleccion1 = document.createElement ("p") // creo un elemento "parrafo" dentro de la constante eleccion 1
        eleccion1.setAttribute ("id", "juegoEleccion1") // le seteo el atributo id con el nombre juegoEleccion1
        eleccion1.textContent = "el usuario eligio THE LAST OF US 2" // texto que aparecera segun la eleccion del ususario
        eleccion1.style.textAlign = "center" // estilos del texto para que sea mas visible.
        eleccion1.style.backgroundColor = "green"
        eleccion1.style.fontSize = "50px"

        document.getElementById ("eleccionDelJugador").appendChild (eleccion1)
        
    } else if (eleccionJuego === "fifa 22") { // en el caso que eliga FIFA 22......

        const eleccion2 = document.createElement ("p")
        eleccion2.setAttribute ("id", "juegoEleccion1")
        eleccion2.textContent = "el usuario eligio FIFA 22"
        eleccion2.style.textAlign = "center"
        eleccion2.style.backgroundColor = "green"
        eleccion2.style.fontSize = "50px"

        
        document.getElementById ("eleccionDelJugador").appendChild (eleccion2)


    } else if (eleccionJuego === "lego marvels"){ // en el caso que eliga LEGO MARVELS .....

        const eleccion3 = document.createElement ("p")
        eleccion3.setAttribute ("id", "juegoEleccion1")
        eleccion3.textContent = "el usuario eligio LEGOS MARVEL"
        eleccion3.style.textAlign = "center"
        eleccion3.style.backgroundColor = "green"
        eleccion3.style.fontSize = "50px"

        document.getElementById ("eleccionDelJugador").appendChild (eleccion3)


    } else { // En el caso que elija otro juego y no haya stock.
        console.log ("no hay stock!")
    }
     
}


//-----------------------------------------------------------------------------------------------------------------





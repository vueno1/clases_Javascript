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

//------declarar listaUsuario------------------------------------
let listaUsusario = []

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

    //------voy agregando + usuarios a la lista con PUSH --------------------
    listaUsusario.push (usuario)

    //--------lo muestro x alert------------------------------------
    alert (`Bienvenide ${nombreUs}!`)
}

// -----BOTON: "agregarUsuario ()" para dicha funcion------------------
//----------------------------------------------------------------------

//-----BOTON: "listaUsuarios" para ver lista de Ususarios---------------

//------------------------------------------------------------------------------------

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
    
    constructor ({
        nombrePP, 
        categoriaPP, 
        precioPP, 
        stockPP
    }) {
        this.nombre = nombrePP;
        this.categoria = categoriaPP;
        this.precio = precioPP;
        this.stock = stockPP;
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
        const nombreProducto = prompt ("ingrese nombre del producto:")
        const categoriaProducto = prompt ("ingrese categoria:")
        const precioProducto = Number (prompt ("ingrese precio:"))
        const stockProducto = Number (prompt ("actualice stock:"))

        //-------BOTON = "agregarProductos" para ir agregando productos x prompt-----------
        //------BOTON = "listaProductos" para mostrar la lista de productos ingresados-----

        //---por cada dato ingresado, creo un objeto a mi lista----------------
        const catalogo = new Productos ( {
            nombre: nombreProducto,
            precio: precioProducto,
            categoria: categoriaProducto,
            stock: stockProducto
        })

        listaProductos.push (catalogo)

        /*

        //---creo el condicional para guardar la informacion ingresada--------------
        //-----si no hay informacion en el storage, lo guardo.
        if (localStorage.getItem("dato") == null) { // si busco en local storage y no hay informacion.... = null

            listaProductos.push(catalogo) // pusheo info y agrego a listaproducto.

            localStorage.setItem("dato", JSON.stringify(listaProductos)) // y esa informacion de "listaproductos" la transformo a JSON y 
            //guardo en local storage.

        } else { // pero, si el local storage no esta vacio.

            const nuevalista = JSON.parse(localStorage.getItem("dato")) // creo una nueva array (nuevalista....) donde
            //parseo lo que esta en local storage a nombre de "producto" 

            nuevalista.push(catalogo) // pusheo ese nuevo elemento a mi nueva array

            localStorage.setItem("dato", JSON.stringify(nuevalista))  // y guardo en local storage pasando la info a JSON.

        }
        */
}


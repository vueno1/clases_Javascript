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
*
*
*************************************************************************** */

//----------creacion del constructor de Productos--------------------------
class Productos {
    
    constructor (tituloPP, generoPP, precioPP, stockPP) {
        this.nombre = tituloPP;
        this.categoria = generoPP;
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

//---------declaro boton "listaProductos"--------------------------------
let listaProductos = []

//---------creo el boton "agregarProductos" para que active los prompt----
const agregarProductos = () => {

    //-----pido datos a ingresar----------------------
    let nombre = prompt ("ingrese nombre del producto:")
    let categoria = prompt ("ingrese categoria:")
    let precio = Number (prompt ("ingrese precio:"))
    let stock = Number (prompt ("actualice stock:"))

    let nombreProductoMin = nombre.toLowerCase ()
    let categoriaProductoMin = categoria.toLowerCase ()


    //---por cada dato ingresado, creo un objeto a mi lista----------------
    const catalogo = new Productos (nombreProductoMin, categoriaProductoMin, precio, stock)

    //---agrego mas datos a mi lista de objetos-------------------------------
    listaProductos.push (catalogo)

    
//-------BOTON = "agregarProductos" para ir agregando productos x prompt-----------
//------BOTON = "listaProductos" para mostrar la lista de productos ingresados-----

//----------------------------------------------------------------------------------------------------


    //-----------ordeno la lista alfabeticamente--------------------------
    listaProductos.sort ( (a,b) => {

        if (a.nombre > b.nombre) {
            return 1        
        }
    
        if (a.nombre < b.nombre) {
            return -1
        }
         
        return 0
    }
    ) 
    
    //------lo muestro en consola
    console.log (listaProductos)

    //----------ordeno por precio menor a mayor ----------------------------
    listaProductos.sort ( (a,b) => {
        
        if (a.precio < b.precio) {
            return -1
        } 

        if (a.precio > b.precio) {
            return 1
        }

        return 0
    }
    )
    //----lo muestro en consola
    console.log (listaProductos)

}


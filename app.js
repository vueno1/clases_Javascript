/*****************************************************************
* 
* 
-----------PAGINA DE VENTA DE VIDEOJUEGOS + MERCHANDISING---------
*
*
******************************************************************/


/*//////////////////////
DECLARACION FORMULARIOS
/////////////////////*/

let formulario = document.getElementById ("formUsuario") // declaro "formulario" = log in 
let formularioRegistro = document.getElementById ("formRegistro") // declaro "formularioRegistro" = sign in


/*//////////////////////////////////////////
FUNCION = CUANDO CLICKEO BOTON INICIAR SESION
//////////////////////////////////////////*/

const botonInicio = () => { // declaro una funcion para el boton = "botonInicio"
    
    if (formulario.style.display === "none") {

        formulario.style.display = "flex" // al clickear, me despliega el formulario q estaba en display = none
        formulario.style.position = "absolute" // y le declaro estilos
        formulario.style.flexDirection = "column"

    } else {
        formulario.style.display = "none"
    }
}

/*/////////////////
BOTON=INICIAR SESION
//////////////////*/

document.getElementById ("botonInicioSesion").addEventListener ("click", () => { // llamo al boton inicio sesion para que loggee al usuario ya registrado.
    botonInicio ()
})



/*-//////////////////////////////////////
FUNCION = CUANDO TOCO BOTON PARA REGISTRO
////////////////////////////////////////*/

const registro = () => {
    formulario.style.display = "none" // desaparece el div formulario 

    formularioRegistro.style.display = "flex" // y aparece el otro formulario para registrarse 
    formularioRegistro.style.position = "absolute"
    formularioRegistro.style.flexDirection = "column"

}

/*/////////////////
BOTON = REGISTRESE
//////////////////*/
document.getElementById ("usuarioNuevo").addEventListener ("click", (e) => {
    e.preventDefault ()
    registro ()
})






/*///////////////////////////////
FUNCION CONSTRUCTORA = USUARIOS
////////////////////////////////*/
class Usuarios {

    constructor (nombreUS, apellidoUS, mailUS, idUS, contraseñaUS) {
        this.nombreUs = nombreUS;
        this.apellidoUs = apellidoUS;
        this.mailUs = mailUS;
        this.idUs = idUS;
        this.contraseñaUs = contraseñaUS;
    }
}

let listaUsuario = [] //declaracion array listado



/*//////////////////////////////////////////
FUNCION = CUANDO TOCO BOTON PARA AGREGAR USUARIO
///////////////////////////////////////////*/
const agregarUsuario = () => {

    const usuario = new Usuarios ({

        nombreUs: document.getElementById("nombre").value,
        apellidoUs: document.getElementById("apellido").value,
        mailUs: document.getElementById("mail").value,
        idUs: document.getElementById ("id").value,
        contraseñaUs: document.getElementById ("contraseña").value,

    })

    


    /*//////////////////////////////////
    SE GUARDA INFORMACION EN LOCALSTORAGE
    /////////////////////////////////////*/

    if (localStorage.getItem ("usuario") == null) {
        listaUsuario.push (usuario)
        localStorage.setItem ("usuario", JSON.stringify (listaUsuario))
    } else {
        const nuevaListaUsuario = JSON.parse (localStorage.getItem ("usuario"))
        nuevaListaUsuario.push (usuario)
        localStorage.setItem ("usuario", JSON.stringify (nuevaListaUsuario))
    }
}


/*////////////////
BOTON=REGISTRO
///////////////*/
document.getElementById ("btn_ingresar").addEventListener ("click", ()  => {
    agregarUsuario ()
})




/*///////////////////////////////////
TRAIGO INFORMACION DE MI LOCALSTORAGE
//////////////////////////////////*/
let usuarioParseados = JSON.parse(localStorage.getItem ("usuario")) // parseo informacion y la declaro.
let idOk;
let passOk;


usuarioParseados.forEach (element => {     
    idOk = (element.nombreUs.idUs)
    passOk = (element.nombreUs.contraseñaUs)
    
})

/*//////////////////////////////
FUNCION = PARA BOTON DE LOG IN 
//////////////////////////////*/
const login = () => {

    const idUsuario = document.getElementById ("idUsuario").value // valor del input consultando ID, y declaracion de variable.
    const passUsuario = document.getElementById ("passUsuario").value // valor del input consultando password, y declaracion de variable.
  
    if (idUsuario === idOk && passUsuario === passOk) {

        console.log (`bienvenida ${idUsuario}`)
        alert (`Bienvenida ${idUsuario}`)
        return `bienvenida ${idUsuario}`

    } else {
        console.log ("usuario o contraseña incorrectos")
        return "usuario o contraseña incorrectos"
    }

}

/*///////////////
BOTON = LOG IN
///////////////*/
document.getElementById ("logIn").addEventListener ("click", (e) => {
    e.preventDefault ()
    login ()
})







//------------------------------------------------------------------------------------------------------------------
/*//////////////////////////////////////////////
                PRODUCTOS
////////////////////////////////////////////// */


/*//////////////////////////////
FUNCION CONSTRUCTORA = PRODUCTOS
/////////////////////////////*/
class Productos {
    
    constructor (nombrePP,categoriaPP,precioPP,stockPP) 
    {
        this.nombreProducto = nombrePP;
        this.categoriaProducto = categoriaPP;
        this.precioProducto = precioPP;
        this.stockProducto = stockPP;
    }    
}

const listaProductos = [] // declaracion lista array LISTAPRODUCTOS---------


/*////////////////////////////
FUNCION PARA AGREGAR PRODUCTOS
////////////////////////////*/
const agregarProductos = () => {

    const producto = new Productos ({

        nombreProducto: document.getElementById ("nombreP").value, 
        categoriaProducto: document.getElementById ("categoriaP").value,
        precioProducto: document.getElementById ("precioP").value,
        stockProducto: document.getElementById ("stockP").value,

    })



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

document.getElementById ("btn_nuevoProducto").addEventListener ("click", ()=> {
    agregarProductos ()
})

//-----------------------------------------------------------------------------------------------------------------





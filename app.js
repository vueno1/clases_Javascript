
/*//////////////////////
DECLARACION FORMULARIOS
/////////////////////*/

    let formulario = document.getElementById ("formUsuario") // declaro "formulario" = log in 
    let formularioRegistro = document.getElementById ("formRegistro") // declaro "formularioRegistro" = sign in
    let listaUsuario = [] //declaracion array listado
    const listadoProductosNuevos = JSON.parse (localStorage.getItem ("producto"))
    let inputBuscador;
    let botonBuscador = document.getElementById ("boton_busqueda")


/*///////////////////////////////
CLASES  - FUNCION CONSTRUCTORA = USUARIOS
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

    
/*///////////////////////////////////////////
FUNCION = CUANDO CLICKEO BOTON INICIAR SESION
///////////////////////////////////////////*/

    const botonInicio = () => { // declaro una funcion para el boton = "botonInicio"    
        if (formulario.style.display === "none") {
            formulario.style.display = "flex" // al clickear, me despliega el formulario q estaba en display = none
            formulario.style.position = "absolute" // y le declaro estilos
            formulario.style.flexDirection = "column"
        } else {
            formulario.style.display = "none"
        }
    }


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

    document.getElementById ("usuarioNuevo").addEventListener ("click", (e) => {
        e.preventDefault ()
        registro ()
    })

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

    document.getElementById ("btn_ingresar").addEventListener ("click", ()  => {
        agregarUsuario ()
    })

/*//////////////////////////////
FUNCION = PARA BOTON DE LOG IN 
//////////////////////////////*/
    const login = () => {
        const idUsuario = document.getElementById ("idUsuario").value // valor del input consultando ID, y declaracion de variable.
        const passUsuario = document.getElementById ("passUsuario").value // valor del input consultando password, y declaracion de variable.
    
        let usuarioParseados = JSON.parse(localStorage.getItem ("usuario")) // parseo informacion y la declaro.
        let idOk = [];
        let passOk = [];

        usuarioParseados.forEach (element => {     
            idOk.push(element.nombreUs.idUs)
            passOk.push(element.nombreUs.contraseñaUs)        
        })

        if (idOk.includes(idUsuario) && passOk.includes(passUsuario)) {

            document.getElementById ("botonInicioSesion").style.display = "none"

            const hola = document.createElement ("button")
                hola.setAttribute ("id", "botonInicioSesion")
                hola.textContent = `Bienvenido ${idUsuario}`
                document.getElementById ("hola").appendChild (hola)

            document.getElementById ("formUsuario").style.display = "none"

            return `bienvenida ${idUsuario}`

        } else {
            console.log ("usuario o contraseña incorrectos")
            return "usuario o contraseña incorrectos"
        }
    } 

    document.getElementById ("logIn").addEventListener ("click", (e) => {
        e.preventDefault ()
        login ()
    })

/*///////////////////////////////////////////////
FUNCION PARA TOCAR EN EL BODY Y CERRAR FORMULARIOS
//////////////////////////////////////////////*/
    const tocarMain = () => {
        document.getElementById ("formUsuario").style.display = "none"
        document.getElementById ("formRegistro").style.display = "none"
    }

    document.getElementsByTagName ("main") [0].addEventListener ("click", () => {
        tocarMain ()
    })

/*////////////////////
FUNCION: BUSCADOR 
////////////////////*/

const busqueda = () => {  
    inputBuscador = document.getElementById ("inputBusqueda").value  

    listadoProductosNuevos.forEach (element => {
        if (inputBuscador === element.nombreProducto.nombreProducto) {
            window.location.href = "pages/juegos.html"
        }
        else {
           console.log ("error")
        }        
    })
}

botonBuscador.addEventListener ("click", (e) => { 
    e.preventDefault ()
    busqueda ()
})



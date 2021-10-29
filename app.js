
/*//////////////////////////////////
DECLARACION VARIABLES Y CONSTANTES
//////////////////////////////////*/

    let btnInicio = document.getElementById ("botonInicioSesion")
    let formulario = document.getElementById ("formUsuario") // declaro "formulario" = log in 
    let formularioRegistro = document.getElementById ("formRegistro") // declaro "formularioRegistro" = sign in
    let listaUsuario = [] //declaracion array listado
    const listadoProductosNuevos = JSON.parse (localStorage.getItem ("producto"))
    let inputBuscador = document.getElementById ("inputBusqueda")
    let botonBuscador = document.getElementById ("boton_busqueda")

    let imagen1 = document.getElementById ("img_1")
    let imagen2 = document.getElementById ("img_2")
    let imagen3 = document.getElementById ("img_3")

    let boton1 = document.getElementById ("btn1")
    let boton2 = document.getElementById ("btn2")
    let boton3 = document.getElementById ("btn3")


/*/////////////////////////////////////////
CLASES  - FUNCION CONSTRUCTORA = USUARIOS
////////////////////////////////////////*/
    class Usuarios {

        constructor (nombreUS, apellidoUS, mailUS, idUS, contraseñaUS) {
            this.nombreUs = nombreUS;
            this.apellidoUs = apellidoUS;
            this.mailUs = mailUS;
            this.idUs = idUS;
            this.contraseñaUs = contraseñaUS;
        }
    }


/*//////////////////////////
JQUERY → FUNCIONES = FADE IN / FADE OUT
////////////////////////*/

$(boton1).on ("click", () => {
    $(imagen1).fadeIn (1000)
    $(imagen3).hide ()
    $(imagen2).hide ()

})

$(boton2).on ("click", () => {
    $(imagen2).fadeIn (1000)
    $(imagen1).hide ()
    $(imagen3).hide ()
})

$(boton3).on ("click", () => {
    $(imagen3).fadeIn (1000)
    $(imagen2).hide ()
    $(imagen1).hide ()
})


/*///////////////////////////////////////////////////////////////////////
JQUERY → FUNCION ANIMATE PARA SCROLLEAR DESDE +INFO HASTA LAS NOTICIAS
/////////////////////////////////////////////////////////////////////*/
$("#btn_img1").click (function () {

    $('html, body').animate({
    scrollTop: $(".Noticia").offset().top
    }, 
    
    2000);
});

$("#btn_img2").click (function () {

    $('html, body').animate({
    scrollTop: $(".Noticia").offset().top
    }, 
    
    2000);
});

$("#btn_img3").click (function () {

    $('html, body').animate({
    scrollTop: $(".Noticia").offset().top
    }, 
    
    2000);
});
    
/*///////////////////////////////////////////
FUNCION = CUANDO CLICKEO BOTON INICIAR SESION
///////////////////////////////////////////*/

    /*///////////////////
    JQUERY → SLIDETOGGLE 
    ////////////////////*/
    $("#botonInicioSesion").on ("click", () => {
        $(formulario).slideToggle (1000)
        formulario.style.display = "flex"
        formulario.style.position = "absolute"
        formulario.style.flexDirection = "column"
    })

    /*
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
    */

/*-//////////////////////////////////////
FUNCION = CUANDO TOCO BOTON PARA REGISTRO
////////////////////////////////////////*/

    const registro = () => {

        formulario.style.display = "none" // desaparece el div formulario 
        formularioRegistro.style.display = "flex" // y aparece el otro formulario para registrarse 
        formularioRegistro.style.position = "absolute"
        formularioRegistro.style.flexDirection = "column"

        btnInicio.addEventListener ("click", () => {
            formularioRegistro.style.display = "none"
        })
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

/*
    const tocarMain = () => {
        document.getElementById ("formUsuario").style.display = "none"
        document.getElementById ("formRegistro").style.display = "none"
    }

    document.getElementsByTagName ("main") [0].addEventListener ("click", () => {
        tocarMain ()
    })

    */


/*////////////////////
FUNCION: BUSCADOR 
////////////////////*/

// FIXME: tengo que averiguar como evitar los espacios en blanco en busqueda.

const busqueda = () => {  
    
    listadoProductosNuevos.forEach (element => {

        let valorBusqueda = inputBuscador.value  

        if (valorBusqueda === element.imagenProducto.nombreProducto) {

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


/*//////////////
DIV DE NOTICIAS
//////////////*/

let info;


if (localStorage.getItem ("noti") == null) {
    console.log ("no hay noticias")  
    document.getElementById ("index_seccion_noticias").style.display = "none"           

} else {
    info = JSON.parse (localStorage.getItem ("noti"))
    document.getElementById ("index_seccion_noticias").style.display = "grid"
}

info.forEach (element => {
    
    const divN = document.createElement ("div")
    divN.setAttribute ("class", "Noticia")
    
        const imgN = document.createElement ("img")
        imgN.src = `${element.imagenNN.imagenNN}`
        imgN.setAttribute ("class", "imgNoti")
        divN.appendChild (imgN)
    
        const h5N = document.createElement ("h5")
        h5N.textContent = `${element.imagenNN.tituloNN}`
        divN.appendChild (h5N)
    
        const pN = document.createElement ("p")
        pN.textContent = `${element.imagenNN.comentariosNN}`
        divN.appendChild (pN)
    
        const spanN = document.createElement ("span")
        spanN.textContent = `${element.imagenNN.fechaNN}`
        divN.appendChild (spanN)    
    
    document.getElementById ("index_seccion_noticias").appendChild (divN)

})





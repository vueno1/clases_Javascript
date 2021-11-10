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

/*//////////////////////////////////
DECLARACION VARIABLES Y CONSTANTES
//////////////////////////////////*/

    let btnInicio = document.getElementById ("botonInicioSesion") //variable para boton inicio
    let formulario = document.getElementById ("formUsuario") //variable para formulario usuario
    let formularioRegistro = document.getElementById ("formRegistro") //variable para formulario registro

    let listaUsuario = [] //declaro lista usuario, valor array
    const listadoProductosNuevos = JSON.parse (localStorage.getItem ("producto")) //parseo lo que esta en localstorage "producto" y lo declaro la variable 

    let inputBuscador = document.getElementById ("inputBusqueda") // declaro variable del input buscador
    let botonBuscador = document.getElementById ("boton_busqueda") //declaro variable del boton busqueda

    let imagen1 = document.getElementById ("img_1") //declaro variable para imagen 1
    let imagen2 = document.getElementById ("img_2") //declaro variable para imagen 2
    let imagen3 = document.getElementById ("img_3") //declaro variable para imagen 3

    let boton1 = document.getElementById ("btn1") //declaro variable para boton 1
    let boton2 = document.getElementById ("btn2") //declaro variable para boton 2
    let boton3 = document.getElementById ("btn3") //declaro variable para boton 3
    
    let info; // declaro variable info
    
    
/*///////////////////////////////////////////
FUNCION = CUANDO CLICKEO BOTON INICIAR SESION
///////////////////////////////////////////*/

/*///////////////////////////////////////////////////////////////////////////
JQUERY → SLIDETOGGLE  → para mostrar menu despleglable en boton iniciar sesion
////////////////////////////////////////////////////////////////////////////*/
    $("#botonInicioSesion").on ("click", () => { // evento click para boton inicio sesion 
        $(formulario).slideToggle (1000) // el formulario aparece con el slidetoggle

        //estilos para formulario
        formulario.style.display = "flex" 
        formulario.style.position = "absolute"
        formulario.style.flexDirection = "column"
    })    

/*-//////////////////////////////////////
FUNCION = CUANDO TOCO BOTON PARA REGISTRO
////////////////////////////////////////*/

    const registro = () => {

        formulario.style.display = "none" // desaparece el div formulario

        //estilos para formulario registro
        formularioRegistro.style.display = "flex" 
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

/*//////////////////////////////////////////////
FUNCION = CUANDO TOCO BOTON PARA [AGREGAR USUARIO]
///////////////////////////////////////////////*/
    const agregarUsuario = () => {
        
        //creo un nuevo usuario con cada valor que ingresa en el formulario de registro
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
            listaUsuario.push (usuario) //si "carrito" esta null, se pushea usuario a listaUsuario.
            localStorage.setItem ("usuario", JSON.stringify (listaUsuario)) //y se pasa a JSON para guardarlo en "carrito"

        } else { // en el caso que haya info en el localstorage
            const nuevaListaUsuario = JSON.parse (localStorage.getItem ("usuario")) //constante nueva lista y se guarda la informacion de "carrito"
            nuevaListaUsuario.push (usuario) // ususarios creados se ingresan en nueva lista.
            localStorage.setItem ("usuario", JSON.stringify (nuevaListaUsuario)) //se parsea informacion de la nueva lista en "carrito"
        }
    }
    
    document.getElementById ("btn_ingresar").addEventListener ("click", ()  => {
        agregarUsuario ()
    })

/*//////////////////////////////
FUNCION = PARA BOTON DE [LOG IN] 
//////////////////////////////*/
    const login = () => {
        const idUsuario = document.getElementById ("idUsuario").value // valor del input consultando ID, y declaracion de variable.
        const passUsuario = document.getElementById ("passUsuario").value // valor del input consultando password, y declaracion de variable.
        
        let usuarioParseados = JSON.parse(localStorage.getItem ("usuario")) // parseo informacion y la declaro.
        let idOk = [];
        let passOk = [];
        
        usuarioParseados.forEach (element => {   //recorremos usuariosParseados   
            idOk.push(element.nombreUs.idUs) //por cada usuario nuevo, se pushea y se guarda en  idOk
            passOk.push(element.nombreUs.contraseñaUs) //por cada password nuevo, se pushea y se guarda en  passOk1
        })
        
        //condicional si coinciden los usuarios y contraseñas guardadas.
        if (idOk.includes(idUsuario) && passOk.includes(passUsuario)) {
            
            document.getElementById ("botonInicioSesion").style.display = "none"
            
            //cada vez que inicia sesion corrrectamente, se crea el boton saludo.
            const hola = document.createElement ("button")
            hola.setAttribute ("id", "botonInicioSesion")
            hola.textContent = `Bienvenido ${idUsuario}`
            document.getElementById ("hola").appendChild (hola)
            
            //desaparece el formulario.
            document.getElementById ("formUsuario").style.display = "none"
            
            return `bienvenida ${idUsuario}`
            
        } else {
            //si se equivoca, informa mensaje de error x ALERT.
            alert ("usuario o contraseña incorrectos")
            return "usuario o contraseña incorrectos"
        }
    } 
    
    document.getElementById ("logIn").addEventListener ("click", (e) => {
        e.preventDefault ()
        login ()
    })
    
    
/*//////////////////////////////
FUNCION: PARA INPUT → BUSCADOR 
//////////////////////////////*/
    
    const busqueda = () => {  
        
        listadoProductosNuevos.forEach (element => {
            let valorBusqueda = inputBuscador.value  //variable donde se guardara lo que se busca.
            
            //condicional si lo que busca hay o no en stock.
            if (valorBusqueda === element.imagenProducto.nombreProducto || valorBusqueda === element.imagenProducto.nombreProducto+ " ") {
                window.location.href = "pages/juegos.html" //cuando coincide con lo que hay en stock, se direcciona a la pagina juegos.
            
            } else {
                console.log ("no hay stock!")
            }             
        })
    }
    
    botonBuscador.addEventListener ("click", (e) => { 
        e.preventDefault ()
        busqueda ()
    })

/*///////////////////////////////////////////////////////////////////////////////
JQUERY → FUNCIONES = FADE IN / FADE OUT → PARA MUESTRA DE IMAGENES DE MAIN-INDEX
//////////////////////////////////////////////////////////////////////////////*/
    
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
    
    
/*//////////////////////////////////////////////////////////////////////////
JQUERY → FUNCION ANIMATE PARA SCROLLEAR DESDE [+INFO] HASTA SECCION NOTICIAS
////////////////////////////////////////////////////////////////////////*/
    $("#btn_img1").click (function () { //funcion para boton 1 e imagen 1
    
        $('html, body').animate({  //agrego scroll al tocar boton [+info]
        scrollTop: $("#index_noticias").offset().top
        }, 
        
        1000);
    });
    
    $("#btn_img2").click (function (e) { //funcion para boton 2 e imagen 2
        e.preventDefault ()

        $('html, body').animate({ //agrego scroll al tocar boton [+info]
        scrollTop: $("#index_noticias").offset().top
        }, 
        
        1000);
    });
    
    $("#btn_img3").click (function () { //funcion para boton 3 e imagen 3
    
        $('html, body').animate({ //agrego scroll al tocar boton [+info]
        scrollTop: $("#index_noticias").offset().top
        }, 
        
        1000);
    });
    
/*///////////////////////////////////////////////////////
CONDICIONALES EN EL CASO Q [NOTI] ESTE VACIO O LLENO
//////////////////////////////////////////////////////*/

if (localStorage.getItem ("noti") == null) {
    console.log ("no hay noticias")  
    document.getElementById ("index_seccion_noticias").style.display = "none"           

} else {
    info = JSON.parse (localStorage.getItem ("noti"))
    document.getElementById ("index_seccion_noticias").style.display = "grid"
}

/*/////////////////////////////////////////////////////////////////////////////////////////
RECORRO MI ARRAY PARA OBTENER INFORMACION  Y LA IMPRIMI EN MAIN-INDEX → SECCION NOTICIAS
/////////////////////////////////////////////////////////////////////////////////////////*/
info.forEach (element => {
    
    const divN = document.createElement ("div")
    divN.setAttribute ("class", "noticia")
    
        const imgN = document.createElement ("img")
        imgN.src = `${element.imagenNN.imagenNN}`
        imgN.setAttribute ("class", "imgNoti")
        divN.appendChild (imgN)
    
        const h5N = document.createElement ("h5")
        h5N.textContent = `${element.imagenNN.tituloNN}`
        h5N.style.fontFamily = "Noto Sans Mono"
        h5N.style.textAlign = "center"
        h5N.style.padding = "20px"
        divN.appendChild (h5N)
    
        const pN = document.createElement ("p")
        pN.textContent = `${element.imagenNN.comentariosNN}`
        pN.style.fontStyle = "italic"
        pN.style.padding = "20px"
        divN.appendChild (pN)
    
        const spanN = document.createElement ("span")
        spanN.textContent = `${element.imagenNN.fechaNN}`
        spanN.style.color = "blue"
        spanN.style.fontSize = "15px"
        spanN.style.background = "#80808042"
        divN.appendChild (spanN)    
    
    document.getElementById ("index_seccion_noticias").appendChild (divN)

})

/*/////////////////////////////////////////////////////////////////////////////////
API → FREE-TO-PLAY PARA OBTENER INFORMACION DE JUEGOS E IMPRIMO EN MI INDEX HTML.
//////////////////////////////////////////////////////////////////////////////////*/

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
		"x-rapidapi-key": "38a0c531c9mshee974d3ce2f0195p17dd9djsnb55ed776f0a6"
	}
};

$("#api").prepend (`<button id="btnApi"> CHEQUEA! → THE BEST FREE-TO-PLAY GAMES </button>`)

$(`#btnApi`).click ( () => {

    $("#api_description").css ("display", "grid")

    $.get (settings, (respuesta, estado) => {

        if (estado == "success") {

            console.log (respuesta)

            for (let i = 0; i < respuesta.length; i++ ) { 
                
                $("#api_description").prepend (
                    `
                    <div class="card" style="width: 18rem;">
                        <img src="${respuesta [i].thumbnail}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${respuesta [i].title}</h5>
                            <p class="card-text">${respuesta [i].short_description}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${respuesta [i].platform}</li>
                            <li class="list-group-item">${respuesta [i].publisher}</li>
  
                        </ul>
                        <div class="card-body">
                            <a href="#" class="card-link">${respuesta [i].game_url}</a>
                        </div>
                    </div>                 
                    `
                )
            }
        }
    })
})


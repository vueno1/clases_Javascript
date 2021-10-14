
// boton para que me aparezca el listado de usuarios --------------------------------

const aparecer = () => {
    let drowpListados = document.getElementById ("dropdownContent")
    drowpListados.style.display = "block"
}

const botonUsuario = document.getElementById ("usuarioBtn")
botonUsuario.onclick = () => { aparecer ()}

//-----------------------------------------------------------------------------------

class Usuarios {

    constructor (nombreUS, apellidoUS, mailUS, idUS, contraseñaUS) {
        this.nombreUs = nombreUS;
        this.apellidoUs = apellidoUS;
        this.mailUs = mailUS;
        this.idUs = idUS;
        this.contraseñaUs = contraseñaUS;
    }
}

const listaUsuario = []

//------funcion para agregar usuarios-------------------------------------
const agregarUsuario = () => {

    const usuario = new Usuarios ({

        nombreUs: document.getElementById("nombre").value,
        apellidoUs: document.getElementById("apellido").value,
        mailUs: document.getElementById("mail").value,
        idUs: document.getElementById ("id").value,

    })

    // guardar la informacion ingresada a mi localstorage-------------------------
    if (localStorage.getItem ("usuario") == null) {
        listaUsuario.push (usuario)
        localStorage.setItem ("usuario", JSON.stringify (listaUsuario))
    } else {
        const nuevaListaUsuario = JSON.parse (localStorage.getItem ("usuario"))
        nuevaListaUsuario.push (usuario)
        localStorage.setItem ("usuario", JSON.stringify (nuevaListaUsuario))
    }
}

// boton para
document.getElementById ("btn").addEventListener ("click", ()  => {
    agregarUsuario ()
})

//--------------------------------------------------------------------------------------------------


const mostrarUsuarios = () => {

    let listadoIngresados = JSON.parse (localStorage.getItem ("usuario"))

    const lista = document.createElement ("p")
    lista.textContent = listadoIngresados
    document.getElementById ("listado").appendChild (lista)
    
}

document.getElementById ("mostrarList").addEventListener ("click", () => {
    mostrarUsuarios ()
})
/*/////////////////////////////////////////////////////////////////////////
*
*
*
*
*
///////////////////////////////////////////////////////////////////////////*/





/*//////////////////////////////////////////////
                PANEL ADMINISTRADOR 
////////////////////////////////////////////// */


/*///////////
CLASES
///////////*/
class User {

    constructor (nombre,pass) {
        this.nombre = nombre;
        this.pass = pass
    }
}



/*////////////////////////////////////////////////////////////////////////////////*/

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



/*//////////////////////////////
DECLARO USUARIO YA CARGADO
////////////////////////////*/

const valeria = new User ("valeria", "3333")
let listaProductos; // DECLARACION LISTA PRODUCTOS


/*//////////////////////////////////////////////
CONDICIONAL SI EL LOCALSTORAGE ESTA VACIO O NO
//////////////////////////////////////////////*/
if (localStorage.getItem ("producto") == null ) {
    listaProductos = []
} else  {
    listaProductos = JSON.parse (localStorage.getItem ("producto"))
}

/*///////////////////////
FUNCION PARA VALIDAR ADM
//////////////////////*/

const confirmAdmin = () => {    
    
    let idAdm = document.getElementById ("idAdmin").value
    let contraseñaAdm = document.getElementById ("passAdm").value

    if (idAdm === valeria.nombre && contraseñaAdm === valeria.pass) {

        document.getElementById ("formAdmin").style.display = "none"
        document.getElementById ("holaAdmin").textContent = `bienvenida ${idAdm}`
        
        document.getElementById ("form_index").style.display = "flex"

    } else {
        alert ("id o contraseña incorrectos")
    }

}

/*///////////////////
BOTON PARA CONFIRMAR
////////////////////*/

document.getElementById ("btn_confirm").addEventListener ("click", (e) => {
    e.preventDefault ()
    confirmAdmin ()
})


/*//////////////////////////////////////////////////////////////////////////////////////////////////////////*/


/*/////////////////////////////
FUNCION: PARA AGREGAR PRODUCTOS 
//////////////////////////////*/

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

/*/////////////////////
BOTON: AGREGAR PRODUCTO
//////////////////////*/

document.getElementsByClassName ("btn btn-primary")[0].addEventListener ("click", (e)=> {
    e.preventDefault ()
    agregarProductos ()
})


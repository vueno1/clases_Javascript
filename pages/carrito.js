
/*//////////////////////////////////////////////////////
NUEVA CLASE PARA FILTRAR PROPIEDADES OBJETOS EN CARRITO
////////////////////////////////////////////////////*/

class Carrito { 
    constructor (imagen,nombre, precio, cantidad) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.precio = precio;
    }
}
/*////////////////
CREO MIS VARIABLES
////////////////*/

let listadoCarrito;
let carritoComprasDiv = document.getElementById ("carritoCompras")
let juegosINgresadosDiv = document.getElementById ("juegosIngresados")
let btn_finalizarDiv = document.getElementsByClassName ("btn_finalizar")[0]
let button_finalizar = document.getElementById ("finalizar")
let montoTotal = document.getElementsByClassName ("montoTotal")[0]
let card_title = document.getElementsByClassName ("card-title")[0]
let card_text = document.getElementsByClassName ("card-text")[0]
let comentario = document.getElementById ("comentario")
let listaNuevaCarrito = []


/*////////////////////////////////////////////////
CONDICIONAL EN EL CASO QUE CARRITO ESTE VACIO O NO
///////////////////////////////////////////////*/

if (localStorage.getItem ("carrito") == null) {
    listadoCarrito = []
    comentario.textContent = "no hay productos en el carrito!"
    comentario.style.paddingBottom = "350px"

} else {
    listadoCarrito = JSON.parse (localStorage.getItem ("carrito"))
    carritoComprasDiv.textContent = "CARRITO COMPRAS:"
    button_finalizar.style.display = "flex"
}


/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
RECORRO LISTACARRITO Y TRAIGO LAS PROPIEDADES QUE NECESITO PARA CREAR NUEVO OBJETOS Y GUARDO EN LISTANUEVACARRITO
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
listadoCarrito.forEach (e => {
    const imgPP = e.imagenProducto.imagenProducto
    const nombrePP = e.imagenProducto.nombreProducto
    const precioPP = e.imagenProducto.precioProducto

    const carritoNuevo = new Carrito (imgPP, nombrePP, precioPP)
    listaNuevaCarrito.push (carritoNuevo)
    
})

/*//////////////////////////////////////////////////////////////////////
CREO UNA CONSTANTE LISTANUEVACARRITOCANTIDADES PARA FILTRAR X CANTIDADES
////////////////////////////////////////////////////////////////////////*/

// Aviso: esta funcion para contar cantidades la encontre en un tutorial.
const listaNuevaCarritoCantidades = Object.values (listaNuevaCarrito.reduce ((r,e) => {

    let productosComprados = `${e.imagen} | ${e.nombre} | ${e.precio}`

    if (!r [productosComprados]) r[productosComprados] = {...e, cantidad: 1}
    else r[productosComprados].cantidad += 1

    return r
    
}, {}))

/*///////////////////////////////////////////////////////////////////////
RECORREMOS LA NUEVA LISTA "listaNuevaCarritoCantidades" E IMPRIMO EN HTML
////////////////////////////////////////////////////////////////////////*/

listaNuevaCarritoCantidades.forEach (element => {

    const divP = document.createElement ("div")
    divP.setAttribute ("class", "card-body")

        /*////
        IMAGEN
        ////*/
        const img = document.createElement ("img")
        img.src = `${element.imagen}`
        img.setAttribute ("class", "styleImg")
        divP.appendChild (img)

        /*/////
        NOMBRE
        //////*/
        const h5 = document.createElement ("h5")
        h5.setAttribute ("class", "card-title")
        h5.textContent = `${element.nombre}`
        divP.appendChild (h5)

        /*//////
        PRECIO
        /////*/
        const p = document.createElement ("p")
        p.setAttribute ("class", "precio")
        p.textContent = `PRECIO = USD ${element.precio}.00`
        divP.appendChild (p)  

        /*///////
        CANTIDAD
        //////*/
        const p2 = document.createElement ("p")
        p2.textContent = `CANTIDAD = ${element.cantidad}`
        divP.appendChild (p2)
        
    document.getElementById ("juegosIngresados").appendChild (divP)
        
})

/*///////////////////////////////////////////////////////
FUNCION PARA SUMAR PRECIOS X CANTIDADES Y FINALIZAR COMPRA
///////////////////////////////////////////////////////*/
const finalizarCompra = () => {

    //DECLARO [MONTO] PARA PRODUCTOS Y MERCH
    let montoFinalP = 0;

    //RECORRO LISTA PRODUCTOS Y SUMO PRECIOS
    listaNuevaCarritoCantidades.forEach (e => {      
        montoFinalP += parseFloat (e.precio * e.cantidad) 
    })

    //AL MOMENTO DE HACER LA SUMA: SE MUESTRA TEXTO → 
    montoTotal.style.display = "flex"
    montoTotal.style.paddingBottom = "300px"
    card_text.textContent = ` TOTAL: USD ${montoFinalP}.00`

    //Y SE BORRAN MIS CARTAS Y BOTON DE FINALIZAR
    juegosINgresadosDiv.style.display = "none"
    btn_finalizarDiv.style.display = "none"
    carritoComprasDiv.style.display = "none"    

    //SE BORRA CARRITOS
    localStorage.removeItem ("carrito")     
}

document.getElementById ("finalizar").addEventListener ("click", (e) =>{
    e.preventDefault ()
    finalizarCompra ()
})
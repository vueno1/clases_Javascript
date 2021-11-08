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


/*///////////////////////////////////////////////////////////////////////
RECORREMOS LA LISTA DE CARRITO E IMPRIMIMOS LO QUE ESTA GUARDADO EN CARRITO
///////////////////////////////////////////////////////////////////////////*/
listadoCarrito.forEach (element => {

    const divP = document.createElement ("div")
    divP.setAttribute ("class", "card-body")

        const img = document.createElement ("img")
        img.src = `${element.imagenProducto.imagenProducto}`
        img.setAttribute ("class", "styleImg")
        divP.appendChild (img)

        const h5 = document.createElement ("h5")
        h5.setAttribute ("class", "card-title")
        h5.textContent = `${element.imagenProducto.nombreProducto}`
        divP.appendChild (h5)

        const p = document.createElement ("p")
        p.setAttribute ("class", "precio")
        p.textContent = `PRECIO = USD ${element.imagenProducto.precioProducto}.00`
        divP.appendChild (p)  

    document.getElementById ("juegosIngresados").appendChild (divP)

})

/*////////////////////////////
FUNCION PARA FINALIZAR COMPRA
////////////////////////////*/
const finalizarCompra = () => {

    //DECLARO [MONTO] PARA PRODUCTOS Y MERCH
    let montoFinalP = 0;

    //RECORRO LISTA PRODUCTOS Y SUMO PRECIOS
    listadoCarrito.forEach (e => {      
        montoFinalP += parseFloat (e.imagenProducto.precioProducto) 
    })

    //AL MOMENTO DE HACER LA SUMA: SE MUESTRA TEXTO → 
    montoTotal.style.display = "flex"
    montoTotal.style.paddingBottom = "300px"
    card_text.textContent = ` TOTAL: USD ${montoFinalP}.00`

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
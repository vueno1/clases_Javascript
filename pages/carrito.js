

/*////////////////
CREO MIS VARIABLES
////////////////*/
let listadoProductosNuevos;
let imprimirProductos = document.getElementById ("carrito") //div donde imprimire mis productos. 




/*////////////////////////////////////////////////////////////////////////////
CONDICIONAL: en el caso que haya o no informacion en mi localstorage "carrito"
////////////////////////////////////////////////////////////////////////////*/

if (localStorage.getItem ("carrito") == null) {
    document.getElementById ("comentario").textContent = "no hay productos!"

} else {

    document.getElementById ("comentario").textContent = "CARRITO COMPRA:"
    listadoProductosNuevos = JSON.parse (localStorage.getItem ("carrito"))
}



/*//////////////////////////////////
imprimo cada producto en mi HTML
///////////////////////////////////*/
listadoProductosNuevos.forEach (element => {

    imprimirProductos.innerHTML += `

    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.nombreProducto.nombreProducto} </h5>
            <h6 class="card-subtitle mb-2 text-muted">Nuevo!</h6>
            <p class="card-text">el juego mas buscado!</p>
            <p class="card-text">precio: usd ${element.nombreProducto.precioProducto} </p>
    
        </div>
    </div>
    
`
})


/*////////////////
CREO MIS VARIABLES
////////////////*/
let listadoProductosNuevos;
let imprimirProductos = document.getElementById ("juegosIngresados") //div donde imprimire mis productos. 




/*/////////////////////////////////////////////////////////////////
CONDICIONAL: en el caso que haya o no informacion en mi localstorage
///////////////////////////////////////////////////////////////////*/

if (localStorage.getItem ("producto") == null) {
    document.getElementById ("vacio").textContent = "no hay productos!"
    
    document.getElementsByClassName ("mainJuegosMuestra")[0].style.display = "none" 

} else {
    listadoProductosNuevos = JSON.parse (localStorage.getItem ("producto"))
}



/*//////////////////////////////////
imprimo cada producto en mi HTML
///////////////////////////////////*/
listadoProductosNuevos.forEach (element => {

    let index = listadoProductosNuevos.indexOf (element)

    imprimirProductos.innerHTML += `

    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.nombreProducto.nombreProducto} </h5>
            <h6 class="card-subtitle mb-2 text-muted">Nuevo!</h6>
            <p class="card-text">el juego mas buscado!</p>
            <p class="card-text">precio: usd ${element.nombreProducto.precioProducto} </p>
            <button id="btn_comprar" onclick= "comprar (${index})"> comprar </button>
        </div>
    </div>
    
    `
})


/*////////////////////////////////////
FUNCION PARA COMPRAR
////////////////////////////////////*/

const comprar = (index) => {

    let carrito;

    if (localStorage.getItem ("carrito") == null) {
        carrito = []

    } else {
        carrito = JSON.parse (localStorage.getItem ("carrito"))
    }
    carrito.push (listadoProductosNuevos [index])
    localStorage.setItem ("carrito", JSON.stringify (carrito))
}

/*
document.getElementById ("btn_comprar").addEventListener ("click", (e) => {
    e.preventDefault ()
    comprar ()
})
*/

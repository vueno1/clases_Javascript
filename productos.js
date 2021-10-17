let listadoProductosNuevos;
let imprimirProductos = document.getElementById ("juegosIngresados")

if (localStorage.getItem ("producto") == null) {
    alert ("no hay productos nuevos")
} else {
    listadoProductosNuevos = JSON.parse (localStorage.getItem ("producto"))
}

listadoProductosNuevos.forEach (element => {

    imprimirProductos.innerHTML += `

    <div class="juego1">
        <h3 class="tituloJuegos">${element.nombreProducto.nombreProducto}</h3>
        <p class= "parrafoJuego">${element.nombreProducto.categoriaProducto}</p>
        <p class= "parrafoJuego"> precio: ${element.nombreProducto.precioProducto} </p>
        <p class= "parrafoJuego">stock: ${element.nombreProducto.stockProducto} </p>        
    </div>
`
})

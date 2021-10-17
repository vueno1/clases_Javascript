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
        <h3>${element.nombreProducto}</h3>
        <p>${element.categoriaProducto}</p>
        <p>${element.precioProducto} </p>
        <p>${element.stockProducto} </p>        
    </div>
`
})

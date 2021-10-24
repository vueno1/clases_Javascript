/*////////////////
CREO MIS VARIABLES
////////////////*/
    let listadoProductosNuevos= []
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


        const divP = document.createElement ("div")
        divP.setAttribute ("class", "card-body")

            const img = document.createElement ("img")
            img.src = `${element.imagenProducto.imagenProducto}`
            img.setAttribute ("class", "styleImg")
            divP.appendChild (img)

            const h5 = document.createElement ("h5")
            h5.setAttribute ("class", "card-title")
            h5.textContent = `${element.imagenProducto.nombreProducto}`
            h5.style.fontWeight = "bolder"
            h5.style.paddingTop = "20px"
            divP.appendChild (h5)

            const h6 = document.createElement ("h6")
            h6.setAttribute ("class", "card-title")
            h6.textContent = "Recien llegados!"
            divP.appendChild (h6)

            const p = document.createElement ("p")
            p.setAttribute ("class", "card-title")
            p.textContent = `USD = ${element.imagenProducto.precioProducto}.00`
            divP.appendChild (p)

            const button = document.createElement ("button")
            button.setAttribute ("id", "btn_comprar")
            button.setAttribute ("onclick", `comprar (${index})`)
            button.textContent = "COMPRAR"
            divP.appendChild (button)      

        document.getElementById ("juegosIngresados").appendChild (divP)

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
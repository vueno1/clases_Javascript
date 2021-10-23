/*////////////////
CREO MIS VARIABLES
////////////////*/
    let listadoProductosNuevos = []
    let imprimirProductos = document.getElementById ("carrito") //div donde imprimire mis productos. 
    let botonFinalizar;

/*////////////////////////////////////////////////////////////////////////////
CONDICIONAL: en el caso que haya o no informacion en mi localstorage "carrito"
////////////////////////////////////////////////////////////////////////////*/

    if (localStorage.getItem ("carrito") == null) {
        document.getElementById ("comentario").textContent = "no hay productos!"

    } else {

        document.getElementById ("comentario").textContent = "CARRITO COMPRA:"
        listadoProductosNuevos = JSON.parse (localStorage.getItem ("carrito"))

        botonFinalizar = document.getElementById ("finalizar").style.display = "flex"
    }

/*//////////////////////////////////
RECORRO MI ARRAY, E IMPRIMO EN MI HTML.
///////////////////////////////////*/
    listadoProductosNuevos.forEach (element => {

        const divP = document.createElement ("div")
        divP.setAttribute ("class", "card-body")

            const img = document.createElement ("img")
            img.src = `${element.imagenProducto.imagenProducto}`
            img.setAttribute ("class", "styleImg")
            divP.appendChild (img)

            const h5 = document.createElement ("h5")
            h5.setAttribute ("class", "card-title")
            h5.style.fontWeight = "bolder"
            h5.style.marginTop = "20px"
            h5.textContent = `${element.imagenProducto.nombreProducto}`
            divP.appendChild (h5)

            const p = document.createElement ("p")
            p.setAttribute ("class", "card-title")
            p.textContent = `USD = ${element.imagenProducto.precioProducto}.00`
            divP.appendChild (p)             

        document.getElementById ("juegosIngresados").appendChild (divP)       
    })

/*///////////////////////
FUNCION: FINALIZAR COMPRA
///////////////////////*/    

    const finalizarCompra = () => {
        let montoFinal = 0;

        listadoProductosNuevos.forEach (e => {      
            montoFinal += parseInt (e.nombreProducto.precioProducto) 
        })

        document.getElementById ("juegosIngresados").textContent = ` Carrito: usd ${montoFinal}`
        localStorage.removeItem ("carrito")
        
    }

    document.getElementById ("finalizar").addEventListener ("click", () =>{
        finalizarCompra ()
    })

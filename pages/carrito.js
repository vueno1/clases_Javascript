/*////////////////
CREO MIS VARIABLES
////////////////*/
    let listadoProductosNuevos;
    let listadoMerchCompras;
    let imprimirProductos = document.getElementById ("juegosIngresados") //div donde imprimire mis productos. 
    let botonFinalizar = document.getElementById ("finalizar")
    let montoTotal = document.getElementsByClassName ("montoTotal")[0]
    let imprimirImporte = document.getElementsByClassName ("card-title")[0]

/*////////////////////////////////////////////////////////////////////////////
CONDICIONAL: en el caso que haya o no informacion en mi localstorage "carrito"
////////////////////////////////////////////////////////////////////////////*/

    /*////////////////
    CARRITO PRODUCTOS
    ////////////////*/

    if (localStorage.getItem ("carrito") == null) {
        listadoProductosNuevos = []
        document.getElementById ("comentario").textContent = "*No hay productos seleccionados!"
        

    } else {
        document.getElementById ("carritoCompras").textContent = "CARRITO COMPRA:"
        listadoProductosNuevos = JSON.parse (localStorage.getItem ("carrito"))

        botonFinalizar.style.display = "flex"
    }

    /*//////////////
    CARRITO MERCH
    /////////////*/

    if (localStorage.getItem ("carritoM") == null) {
        listadoMerchCompras = []
        document.getElementById ("comentarioM").textContent = "*No hay merchandising seleccionado!"

    } else {
        document.getElementById ("carritoCompras").textContent = "CARRITO COMPRA:"
        listadoMerchCompras = JSON.parse (localStorage.getItem ("carritoM"))

        botonFinalizar.style.display = "flex"
    }

/*////////////////////////////////////////////////////
RECORRO LISTA DE PRODUCTOS E IMPRIMO EN CARRITO.HTML
////////////////////////////////////////////////////*/


for (let i = 0 ; i < listadoProductosNuevos.length; i++) {  
   
    const divP = document.createElement ("div")
    divP.setAttribute ("class", "card-body")
    
        const img = document.createElement ("img")
        img.src = `${listadoProductosNuevos [i].imagenProducto.imagenProducto}`
        img.setAttribute ("class", "styleImg")
        divP.appendChild (img)

        const h5 = document.createElement ("h5")
        h5.setAttribute ("class", "card-title")
        h5.textContent = `${listadoProductosNuevos [i].imagenProducto.nombreProducto}`
        divP.appendChild (h5)
    
        const p = document.createElement ("p")
        p.setAttribute ("class", "precio")
        p.textContent = `USD = ${listadoProductosNuevos [i].imagenProducto.precioProducto}.00`
        divP.appendChild (p)             
    
    document.getElementById ("juegosIngresados").appendChild (divP)         
}

/*///////////////////////////////////////////////
RECORRO LISTA DE MERCH E IMPRIMO EN CARRITO.HTML
////////////////////////////////////////////////*/
for (let i = 0 ; i < listadoMerchCompras.length; i++) {  
   
    const divPM = document.createElement ("div")
    divPM.setAttribute ("class", "card-body")
    
        const imgM = document.createElement ("img")
        imgM.src = `${listadoMerchCompras [i].imagenMerch.imagenMerch}`
        imgM.setAttribute ("class", "styleImg")
        divPM.appendChild (imgM)
    
        const h5M = document.createElement ("h5")
        h5M.setAttribute ("class", "card-title")
        h5M.textContent = `${listadoMerchCompras [i].imagenMerch.nombreMerch}`
        divPM.appendChild (h5M)
    
        const pM = document.createElement ("p")
        pM.setAttribute ("class", "precio")
        pM.textContent = `PRECIO = USD ${listadoMerchCompras [i].imagenMerch.precioMerch}.00`
        divPM.appendChild (pM)   
    
    document.getElementById ("juegosIngresados").appendChild (divPM)           

    
}


/*//////////////////////////////////////////////////////////////////////
FUNCION: FINALIZAR COMPRA DE AMBOS TIPOS DE COMPRAS = PRODUCTOS + MERCH
//////////////////////////////////////////////////////////////////////*/    

    const finalizarCompra = () => {

        //DECLARO [MONTO] PARA PRODUCTOS Y MERCH
        let montoFinalP = 0;
        let montoFinalM = 0;

        //RECORRO LISTA PRODUCTOS Y SUMO PRECIOS
        listadoProductosNuevos.forEach (e => {      
            montoFinalP += parseFloat (e.imagenProducto.precioProducto) 
        })

        //RECORRO LISTA MERCH Y SUMO PERCIOS
        listadoMerchCompras.forEach (e => {
            montoFinalM += parseFloat (e.imagenMerch.precioMerch)
        } )

        //AL MOMENTO DE HACER LA SUMA: SE MUESTRA TEXTO → 
        montoTotal.style.display = "block"
        imprimirImporte.textContent = ` TOTAL: USD ${montoFinalP+montoFinalM}.00`

        imprimirProductos.style.display = "none"
        botonFinalizar.style.display = "none"
        document.getElementById ("carritoCompras").style.display = "none"

        //SE BORRA CARRITOS
        localStorage.removeItem ("carrito")
        localStorage.removeItem ("carritoM")        
    }

    document.getElementById ("finalizar").addEventListener ("click", (e) =>{
        e.preventDefault ()
        finalizarCompra ()
    })

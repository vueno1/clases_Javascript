/*////////////////
CREO MIS VARIABLES
////////////////*/
    let listadoProductosNuevos = []
    let listadoMerchCompras = []
    let imprimirProductos = document.getElementById ("juegosIngresados") //div donde imprimire mis productos. 
    let botonFinalizar;

/*////////////////////////////////////////////////////////////////////////////
CONDICIONAL: en el caso que haya o no informacion en mi localstorage "carrito"
////////////////////////////////////////////////////////////////////////////*/

    if (localStorage.getItem ("carrito") == null) {
        document.getElementById ("comentario").textContent = "No hay productos en el carrito!"
        

    } else {
        document.getElementById ("comentario").textContent = "CARRITO COMPRA:"
        listadoProductosNuevos = JSON.parse (localStorage.getItem ("carrito"))

        botonFinalizar = document.getElementById ("finalizar").style.display = "flex"
    }



    if (localStorage.getItem ("carritoM") == null) {
        document.getElementById ("comentario").textContent = "No hay productos en el carrito!"

    } else {
        document.getElementById ("comentario").textContent = "CARRITO COMPRA:"
        listadoMerchCompras = JSON.parse (localStorage.getItem ("carritoM"))

        botonFinalizar = document.getElementById ("finalizar").style.display = "flex"
    }



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


/*///////////////////////
FUNCION: FINALIZAR COMPRA
///////////////////////*/    

    const finalizarCompra = () => {

        let montoFinalP = 0;
        let montoFinalM = 0;

        listadoProductosNuevos.forEach (e => {      
            montoFinalP += parseFloat (e.imagenProducto.precioProducto) 
        })

        listadoMerchCompras.forEach (e => {
            montoFinalM += parseFloat (e.imagenMerch.precioMerch)
        } )

        document.getElementById ("juegosIngresados").textContent = ` Carrito: usd ${montoFinalP+montoFinalM}`
        localStorage.removeItem ("carrito")
        localStorage.removeItem ("carritoM")


        
    }

    document.getElementById ("finalizar").addEventListener ("click", (e) =>{
        e.preventDefault ()
        finalizarCompra ()
    })

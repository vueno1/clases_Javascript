/*////////////////
CREO MIS VARIABLES
////////////////*/
    let listadoProductosNuevos= []
    let imprimirProductos = document.getElementById ("juegosIngresados") //div donde imprimire mis productos. 

    let listaMerchandising = []
    let imprimirMerch = document.getElementById ("listaMerch")

    let carrito;
/*/////////////////////////////////////////////////////////////////
CONDICIONAL: en el caso que haya o no informacion en mi localstorage
///////////////////////////////////////////////////////////////////*/

    /*////////////////////////////////
    CONDICIONAL PARA CLAVE: PRODUCTO 
    /////////////////////////////////*/

    if (localStorage.getItem ("producto") == null) {
        document.getElementById ("vacio").textContent = "no hay productos!"
                document.getElementsByClassName ("mainJuegosMuestra")[0].style.display = "none" 

    } else {
        listadoProductosNuevos = JSON.parse (localStorage.getItem ("producto"))
        document.getElementById ("vacio").style.display = "none"
    }


    /*////////////////////////////
    CONDICIONAL PARA CLAVE: MERCH
    ///////////////////////////*/

    if (localStorage.getItem ("merch") == null) {
        document.getElementById ("vacioM").textContent = "no hay merchandising!"
        document.getElementsByClassName ("mainMerchandising")[0].style.display = "none" 

    } else {
        listaMerchandising = JSON.parse (localStorage.getItem ("merch"))
        document.getElementById ("vacioM").style.display = "none"
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
            divP.appendChild (h5)

            const h6 = document.createElement ("h6")
            h6.setAttribute ("class", "comentario")
            h6.textContent = `${element.imagenProducto.comentarioProducto}`
            divP.appendChild (h6)

            const p = document.createElement ("p")
            p.setAttribute ("class", "precio")
            p.textContent = `PRECIO = USD ${element.imagenProducto.precioProducto}.00`
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

        if (localStorage.getItem ("carrito") == null) {
            carrito = []

        } else {
            carrito = JSON.parse (localStorage.getItem ("carrito"))
        }
        carrito.push (listadoProductosNuevos [index])
        localStorage.setItem ("carrito", JSON.stringify (carrito))
    }

/*////////////////////////////////////////////////////////////////////////////////////////////*/


/*//////////////////////////////////////////////////////////////////////
USO DEL JQUERY - IMPRIMIR MERCHANDISING EN MI HTML Y BOTON PARA COMPRAR
///////////////////////////////////////////////////////////////////////*/

for (const merchan of listaMerchandising) {

    let indexM = listaMerchandising.indexOf (merchan)

    $("#listaMerch").append (`

    <div class="card-body">
        <img class="styleImg" src= ${merchan.imagenMerch.imagenMerch}>
        <h5 class="card-title">${merchan.imagenMerch.nombreMerch} </h5>
        <p class="comentario">${merchan.imagenMerch.comentarioMerch} </p>
        <p class="precio"> USD = ${merchan.imagenMerch.precioMerch} .00</p>
        <button id= "btn_comprar" onclick= "comprarM (${indexM})">COMPRAR</button>
    </div>
    `)  
    
}


 /*//////////////////////////////////
imprimo cada MERCH en mi HTML
///////////////////////////////////*/

/*
listaMerchandising.forEach (element => {

    let indexM = listaMerchandising.indexOf (element)


    const divPM = document.createElement ("div")
    divPM.setAttribute ("class", "card-body")

        const imgM = document.createElement ("img")
        imgM.src = `${element.imagenMerch.imagenMerch}`
        imgM.setAttribute ("class", "styleImg")
        divPM.appendChild (imgM)

        const h5M = document.createElement ("h5")
        h5M.setAttribute ("class", "card-title")
        h5M.textContent = `${element.imagenMerch.nombreMerch}`
        divPM.appendChild (h5M)

        const pM1 = document.createElement ("p")
        pM1.setAttribute ("class", "comentario")
        pM1.textContent = `${element.imagenMerch.comentarioMerch}`
        divPM.appendChild (pM1)

        const pM = document.createElement ("p")
        pM.setAttribute ("class", "precio")
        pM.textContent = `PRECIO = USD ${element.imagenMerch.precioMerch}.00`
        divPM.appendChild (pM)

        const buttonM = document.createElement ("button")
        buttonM.setAttribute ("id", "btn_comprar")
        buttonM.setAttribute ("onclick", `comprarM (${indexM})`)
        buttonM.textContent = "COMPRAR"
        divPM.appendChild (buttonM)      

    document.getElementById ("listaMerch").appendChild (divPM)

})

*/


/*////////////////////////////////////
FUNCION PARA COMPRAR MERCHANDISING
////////////////////////////////////*/
const comprarM = (indexM) => {

    if (localStorage.getItem ("carritoM") == null) {
        carrito = []

    } else {
        carrito = JSON.parse (localStorage.getItem ("carritoM"))
    }
    carrito.push (listaMerchandising [indexM])
    localStorage.setItem ("carritoM", JSON.stringify (carrito))
}

//FIXME: ver como ir descontando productos al momento de comprar.

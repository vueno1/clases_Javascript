/*////////////////
CREO MIS VARIABLES
////////////////*/
    let listadoProductosNuevos= []
    let imprimirProductos = document.getElementById ("juegosIngresados") //div donde imprimire mis productos. 

    let listaMerchandising = []
    let imprimirMerch = document.getElementById ("listaMerch")
    
    let productosVacios = document.getElementById ("vacio")
    let mainJuegosMuestra = document.getElementsByClassName ("mainJuegosMuestra")[0]
    let mainMerchandising = document.getElementsByClassName ("mainMerchandising")[0]

    let carrito;
/*/////////////////////////////////////////////////////////////////
CONDICIONAL: en el caso que haya o no informacion en mi localstorage
///////////////////////////////////////////////////////////////////*/

    if (localStorage.getItem ("producto") == null) {
        productosVacios.textContent = "no hay productos!"
        mainJuegosMuestra.style.display = "none" 
        
    } else {
        listadoProductosNuevos = JSON.parse (localStorage.getItem ("producto"))
        productosVacios.style.display = "none"
    }

/*//////////////////////////////////
imprimo cada producto en mi HTML
///////////////////////////////////*/
    listadoProductosNuevos.forEach (element => {
        
        let index = listadoProductosNuevos.indexOf (element)
        
        if (element.imagenProducto.categoriaProducto === "juego") { 
            //condicional si lo que se ingresa es JUEGO, se impirme en div JUEGO       
            
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

            const stock = document.createElement ("p")
            stock.textContent = `STOCK = ${element.imagenProducto.stockProducto} productos`
            divP.appendChild (stock)

            const p = document.createElement ("p")
            p.setAttribute ("class", "precio")
            p.textContent = `PRECIO = USD ${element.imagenProducto.precioProducto}.00`
            divP.appendChild (p)
            
            const button = document.createElement ("button")
            button.setAttribute ("id", "btn_comprar")
            button.setAttribute ("onclick", `comprar (${index})`)
            button.textContent = "+"
            divP.appendChild (button)      
            
            document.getElementById ("juegosIngresados").appendChild (divP)
                
            } else {

                //condicional si lo que se ingresa es merchandising se imprime en div MERCHANDISING:
                //aparace div merchandising.
                mainMerchandising.style.display = "flex"
                
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

                const stock = document.createElement ("p")
                stock.textContent = `STOCK = ${element.imagenProducto.stockProducto} productos`
                divP.appendChild (stock)
              
                const p = document.createElement ("p")
                p.setAttribute ("class", "precio")
                p.textContent = `PRECIO = USD ${element.imagenProducto.precioProducto}.00`
                divP.appendChild (p)
                
                const button = document.createElement ("button")
                button.setAttribute ("id", "btn_comprar")
                button.setAttribute ("onclick", `comprar (${index})`)
                button.textContent = "+"
                divP.appendChild (button)      
                
                document.getElementById ("listaMerch").appendChild (divP)
                
            }
            
        })

/*////////////////////////////////////
FUNCION PARA COMPRAR PRODUCTOS Y AGREGAR A CARRITO
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
    
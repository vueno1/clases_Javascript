/*//////////////////////////////////////////////
                PANEL ADMINISTRADOR 
////////////////////////////////////////////// */

/*/////////////////
DECLARO VARIABLE 
////////////////////*/
    let listaProductos; // DECLARACION LISTA PRODUCTOS
    let listaMerchandising; 
    let listaNoticias;

/*///////////
CLASES
///////////*/
    class User {
        constructor (nombre,pass) {
            this.nombre = nombre;
            this.pass = pass
        }
    }

    class Productos {        
        constructor (imagenPP,nombrePP, comentarioPP, categoriaPP,precioPP,stockPP) 
        {
            this.imagenProducto = imagenPP;
            this.nombreProducto = nombrePP;
            this.comentarioProducto = comentarioPP;
            this.categoriaProducto = categoriaPP;
            this.precioProducto = precioPP;
            this.stockProducto = stockPP;
        }    
    }
    
    class Merch {        
        constructor (imagenMM, nombreMM, comentantarioMM, categoriaMM, precioMM, stockMM) 
        {
           this.imagenMerch = imagenMM;
           this.nombreMerch = nombreMM;
           this.comentarioMerch = comentantarioMM;
           this.categoriaMerch = categoriaMM;
           this.precioMerch = precioMM;
           this.stockMerch = stockMM;
        }    
    }

    
    class Noticias {
        constructor (imagenNN, tituloNN, comentariosNN, fechaNN) 
        {
            this.imagenNN = imagenNN;
            this.tituloNN = tituloNN;
            this.comentariosNN = comentariosNN;
            this.fechaNN = fechaNN;
        }
    }

/*////////////////////////////////////////////////////
CREO UNA CONSTANTE = VALERIA COMO UNICO ADMINISTRADOR 
///////////////////////////////////////////////////*/

    const valeria = new User ("valeria", "3333")

    
/*//////////////////////////////////////////////
CONDICIONAL SI EL LOCALSTORAGE ESTA VACIO O NO
//////////////////////////////////////////////*/

    /*////////////////
    CLAVE: PRODUCTO 
    /////////////////*/ 
    if (localStorage.getItem ("producto") == null ) {
        listaProductos = []
    } else  {
        listaProductos = JSON.parse (localStorage.getItem ("producto"))
    }

    /*////////////
    CLAVE: MERCH
    ///////////*/
    if (localStorage.getItem ("merch") == null ) {
        listaMerchandising = []
    } else {
        listaMerchandising = JSON.parse (localStorage.getItem ("merch"))
    }

 
    /*//////////
    CLAVE: NOTI
    //////////*/   
    if (localStorage.getItem ("noti") == null ) {
        listaNoticias = []
    } else {
        listaNoticias = JSON.parse (localStorage.getItem ("noti"))
    }
 

/*///////////////////////////////////////////
FUNCION PARA VALIDAR ADMINISTRADOR AL LOGGEAR
////////////////////////////////////////////*/

    const confirmAdmin = () => {    
        
        let idAdm = document.getElementById ("idAdmin").value
        let contraseñaAdm = document.getElementById ("passAdm").value

        if (idAdm === valeria.nombre && contraseñaAdm === valeria.pass) {

            document.getElementById ("formAdmin").style.display = "none"
            document.getElementById ("holaAdmin").textContent = `BIENVENIDO ${idAdm}`
            
            document.getElementById ("form_index").style.display = "flex"

        } else {
            alert ("id o contraseña incorrectos")
        }

    }

    document.getElementById ("btn_confirm").addEventListener ("click", (e) => {
        e.preventDefault ()
        confirmAdmin ()
    })


/*/////////////////////////////
FUNCION: PARA AGREGAR PRODUCTOS 
//////////////////////////////*/

    const agregarProductos = () => {

        const producto = new Productos ({

            imagenProducto: document.getElementById ("imagenP").value,
            nombreProducto: document.getElementById ("nombreP").value, 
            comentarioProducto: document.getElementById ("comentarioP").value,
            categoriaProducto: document.getElementById ("categoriaP").value,
            precioProducto: document.getElementById ("precioP").value,
            stockProducto: document.getElementById ("stockP").value,
        })

        //---creo el condicional para guardar la informacion ingresada--------------
        //-----si no hay informacion en el storage, lo guardo.
        if (localStorage.getItem("producto") == null) { // si busco en local storage y no hay informacion.... = null
        
            listaProductos.push (producto) // pusheo info y agrego a listaproducto.
            localStorage.setItem ("producto", JSON.stringify(listaProductos)) // y esa informacion de "listaproductos" la transformo a JSON y 
            //guardo en local storage.

        } else { // pero, si el local storage no esta vacio.
            const nuevalistaProductos = JSON.parse(localStorage.getItem("producto")) // creo una nueva array (nuevalista....) donde
            //parseo lo que esta en local storage a nombre de "producto" 

            nuevalistaProductos.push(producto) // pusheo ese nuevo elemento a mi nueva array
            localStorage.setItem("producto", JSON.stringify(nuevalistaProductos))  // y guardo en local storage pasando la info a JSON.
        }  
    }

    document.getElementsByClassName ("btn btn-primary")[0].addEventListener ("click", (e)=> {
        e.preventDefault ()
        agregarProductos ()
    })


/*/////////////////////////////////
FUNCION: PARA AGREGAR MERCHANDISING 
/////////////////////////////////*/

    const agregarMerch = () => {

        const merchandising = new Merch ({

            imagenMerch: document.getElementById ("imagenM").value,
            nombreMerch: document.getElementById ("nombreM").value, 
            comentarioMerch: document.getElementById ("comentarioM").value,
            categoriaMerch: document.getElementById ("categoriaM").value,
            precioMerch: document.getElementById ("precioM").value,
            stockMerch: document.getElementById ("stockM").value,
        })

        //---creo el condicional para guardar la informacion ingresada--------------
        //-----si no hay informacion en el storage, lo guardo.
        if (localStorage.getItem("merch") == null) { // si busco en local storage y no hay informacion.... = null
        
            listaMerchandising.push (merchandising) // pusheo info y agrego a listaproducto.
            localStorage.setItem ("merch", JSON.stringify(listaMerchandising)) // y esa informacion de "listaproductos" la transformo a JSON y 
            //guardo en local storage.

        } else { // pero, si el local storage no esta vacio.
            const nuevalistaMerch = JSON.parse(localStorage.getItem("merch")) // creo una nueva array (nuevalista....) donde
            //parseo lo que esta en local storage a nombre de "producto" 

            nuevalistaMerch.push(merchandising) // pusheo ese nuevo elemento a mi nueva array
            localStorage.setItem("merch", JSON.stringify(nuevalistaMerch))  // y guardo en local storage pasando la info a JSON.
        }  
    }

    document.getElementsByClassName ("boton_merch")[0].addEventListener ("click", (e)=> {
        e.preventDefault ()
        agregarMerch ()
    })


/*////////////////////////////
FUNCION PARA AGREGAR NOTICIAS
////////////////////////////*/

    const agregarNoticias = () => {

        const noti = new Noticias ({

        imagenNN: document.getElementById ("imagenN").value,
        tituloNN: document.getElementById ("tituloN").value,
        comentariosNN: document.getElementById ("comentarioN").value,
        fechaNN: document.getElementById ("fechaN").value,

        })

        if (localStorage.getItem ("noti") == null ) {

            listaNoticias.push (noti)
            localStorage.setItem ("noti", JSON.stringify (listaNoticias))

        } else {
            const nuevaListaNoticias = JSON.parse (localStorage.getItem ("noti"))

            nuevaListaNoticias.push (noti)
            localStorage.setItem ("noti", JSON.stringify (nuevaListaNoticias))
        }
    }

    document.getElementsByClassName ("boton_noticias") [0].addEventListener ("click", (e) => {
        e.preventDefault ()
        agregarNoticias ()
    })


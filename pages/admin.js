/*//////////////////////////////////////////////
                PANEL ADMINISTRADOR 
////////////////////////////////////////////// */


/*///////////
CLASES
///////////*/
    class User { // clase para usuario Administrador 
        constructor (nombre,pass) {
            this.nombre = nombre;
            this.pass = pass
        }
    }
    
    class Productos { // clase para crear productos nuevos  
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
    
    class Noticias { // clase para crear noticias 
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
    
/*/////////////////
DECLARO VARIABLE 
/////////////////*/
    let listaProductos; // DECLARACION LISTA PRODUCTOS
    let listaNoticias; //declaro lista para noticias
    
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
        
        let idAdm = document.getElementById ("idAdmin").value //declaro variable para guardar valor del input
        let contraseñaAdm = document.getElementById ("passAdm").value //declaro variable para guardar valor del input

        //condicionales en el caso que ingrese usario y password correctos del adminstrador
        if (idAdm === valeria.nombre && contraseñaAdm === valeria.pass) {

            //estilos en el caso ingrese usuario y contraseña correctos...
            document.getElementById ("formAdmin").style.display = "none"
            document.getElementById ("holaAdmin").textContent = `BIENVENIDO ${idAdm}`
             
            //y aparecen los formularios para ingresar productos y noticias
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


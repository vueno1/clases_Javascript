// DESAFIO 3 //

//EJEMPLO 1) → con "for"

// designo las motos y nombre de los chicos del delivery ......
let moto1 = "pablo"
let moto2 = "gaston"
let moto3 = "rocio"

// hago el conteo para los pedidos...
for (let i = 1; i < 4; i++) {

    // pregunto nombre y barrio al que hace el pedido.....
    // radio entre recoleta, palermo y belgrano....
    let usuario = prompt ("ingrese nombre")
    let barrio = prompt ("ingrese barrio")

    // declaro motoUsuario para luego redefinirlo segun corresponda x barrio....
    let motoUsuario = "disponible"

    // uso el if para designar x barrios a que moto le corresponde....
    if (barrio == "recoleta") {
        motoUsuario = moto1
    } else if (barrio == "palermo") {
        motoUsuario = moto2
    } else {
        motoUsuario = moto3
    }

    // envio al usuario numero de pedido y nombre de la moto asignada......
    alert ("su pedido n°" + " " + i + "se lo lleva"  + " " + motoUsuario)    
}

/// finalizo los pedidos por el dia. 
console.log ("no se pueden hacer mas pedidos, gracias!")


//-----------------------------------------------------------------------------------------------

//EJEMPLO 2) → CON "while"..............

// declaro que numero de usuario valido es 2563
let usuario = 2563

// pregunto al usario numero.....
let ingresoUsusario = prompt ("por favor, ingrese su numero de usuario")

// mientras que el numero de usuario es incorrecto, se le da el mensaje de alerta x error. 
while (ingresoUsusario != usuario) {
    alert (`${ingresoUsusario} + es un numero incorrecto`)

    // y vuelvo a preguntar, hasta que el usuario escriba el n° correcto....
    ingresoUsusario = prompt ("por favor, vuelva a ingresar numero de usuario")
}

console.log ("hola!, bienvenido!")


//-----------------------------------------------------------------------------------------------

//EJEMPLO 3) → con "while"........

//declaro "comensales"
let comensales = 1

//mientras la cantidad de comensales no supere a 10, pueden seguir ingresando personas al restaurante....
while (comensales < 10) {
    console.log (`ha ingresado ${comensales} comensale/s al restaurante`)
    comensales++
}

//en que el caso que ya no se cumpla la condicion, se muestra el siguiente mensaje:
console.log ("no hay disponibilidad!")


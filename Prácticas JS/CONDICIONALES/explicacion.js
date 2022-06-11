if (true){
    console.log("obvio, boquerón!")
}

/*if (false){
    console.log("obvio boquerón") 
    }   // se ve apagado porque no no se puede*/

    let opciones = true
    
    if (opciones){
        console.log("Obvio, boquerón!?")
    }

    let opciones = false
    
    if (opciones){
        console.log("Obvio, boquerón!, que tal?")
    }

    3 < 8 //true
    8 > 3 //true
    3 > 8 //false
    3 = 8 //false
    3 = 3 //true

    let num1 = 4
    let num2 = 4

    num1 < num2 //false
    num1 /*menor o igual*/ num2 //true

    /*=== es estricto, si comparas 4 y '4' será false porque uno es un número y otro string
    // == es true el mismo caso

    
    
    /* BAJAR LIGADURAS EN FONTSNERD"
    // consultar falsies para ver mas ejemplos*/
    
    let edad = parseInt(window.prompt ('Introduce tu edad:'))

    if (edad = > 18) {
        console.log('Eres un viejoven') //true. Ekse significa "si no"
    }else {console.log("Eres un pipiolo")
}

let edad = parseInt(window.prompt ('Introduce tu edad:'))

if (edad > 18) {
    console.log('Eres un viejoven') //
}else if(edad = 18){
    console.log('Cuidadito con lo que haces ahora eh?')

}

else {
    console.log("Eres un pipiolo") //como es mayor de 18, si pone 18, se va a else
}

let nota = 7

if (nota  <5){
    console.log('has suspendido')
}else if(nota < 6){
    console.log('Has sacado un suficiente')
}else if(nota < 8){
    console.log('Has sacadoun bien')
}else if(nota < 10){
    console.log('Has sacado un notable')
}else {
    console.log('Has sacado un sobresaliente') //si no está entre <5 y 9, es sólo else
}

switch(nota){
    case 1:
        console.log("Has suspendido")

    case 2:
        console.log("Has suspendido")
    
    case 3:
        console.log("Has suspendido")

    }

/*para simplificar:*/
    switch(nota){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            console.log("Has suspendido")

        case 6:
        case 7:
            console.log("Has sacado un suficiente")
        case 8:
        case 9:
            console.log("Has sacado un notable")
        default:
            console.log("Has sacado un sobresaliente")//por defeco me ejecutas esto si no se han cumplido los criterios anteriores
    }
        /*legiblemente es más limpio y es cuando conoces todos los valores posibles concretos. Va cayendo en desuso y aunque es bueno, es peligroso*/




    nota > 5 // se cumple o no secumple. Se llaman OPERADORES TERNARIOS y solo tiene dos salidas posibles
    ? console.log("Has aprobado") : console.log("No has aprobado") // ? se cumple// : no se cumpple

    /*OPERADORES*/

    nota = 6 // operador de asignacion
    nota * 5 // operador numérico
    nota += 5 //operador de asignación numérica, dentro de nota te guarda el resultado de nota mas 5
    nota ++ // operador de incremento
    nota -- // operador de decremento
    nota < 4 // operador relacional
    nota < 18 && nota > 18 // operador lógico. Se usa el && combina el primer y el segundo operando y sólo da verdadero si los 2 operandos evalúan a verdadero.
                            // quedaría traducido true && true. ES VERDADERO Y ES VERDADERO.
    nota < 18 || nota > 18 // true || false --> true. CUANDO UNO DE LOS DOS ES VERDADERO, ES VERDADERO. SI LOS DOS SON FALSO, TODO ES FALSO. 
                                    // O CUMPLE LAS DOS CONDICIONES O NO LAS CUMPLE, O CUMPLE UNA DE LAS CONDICIONES O NO CUMPLE NINGUNA
    
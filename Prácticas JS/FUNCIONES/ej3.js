/*Escribe una función que devuelva el resultado de sumar los dos parámetros que le pasamos. 
Muestra el resultado en la consola.*/

let num1 =parseInt(window.prompt('Introduce un número'))
let num2 =parseInt(window.prompt('Introduce un número'))

let num3 = 0

sumaFuncion(num1, num2)

/*let num3 = sumaFuncion(num1, num2)
    console.log(num3)*/  //puede ser asi

function sumaFuncion(arg1, arg2){
    num3 = arg1 + arg2

    console.log(num3)
}
  
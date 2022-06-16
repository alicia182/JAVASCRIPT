/*Escribe una función que devuelva el resultado de sumar los dos parámetros que le pasamos. 
Pide al usuario 2 números. Usa esos 2 números como parámetros de la función y después 
asigna el valor que devuelve la función a una tercera variable. Finalmente, 
muestra el valor de la variable en la consola.*/



let num1 =parseInt(window.prompt('Introduce un número'))
let num2 =parseInt(window.prompt('Introduce un número'))

esMayor(num1,num2)
    ? console.log('El primer número es mayor')
    : console.log('El segundo número es mayor')

function esMayor(arg1, arg2){
    return arg1 > arg2 ? true : false
}
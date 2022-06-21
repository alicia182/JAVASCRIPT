/*Escribe un programa que pida al usuario dos números. Usa esos 2 números en una
función que divide el primero por el segundo y devuelve el resultado. Muestra el
resultado que devuelve la función en un alert. Después vuelve a pedir los números y
hacer todo otra vez hasta que el usuario introduzca un 0 como segundo número.*/


let num1 = 0      
let num2 = 0

function divide(arg1, arg2)
    return arg1/arg2

do{
    num1 = parseInt(window.prompt('Introduce un número'))
    num2 = parseInt(window.prompt('Introduce otro número'))
} while (num2 !===0)

function divide (arg1, arg2) {
    return arg1/ arg2
}

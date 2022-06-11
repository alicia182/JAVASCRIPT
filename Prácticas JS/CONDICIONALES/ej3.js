let num1 = parseInt(window.prompt('Introduce un número: '))
let num2 = parseInt(window.prompt('Introduce otro número: '))
let num3 = parseInt(window.prompt('Introduce un tercer número número: '))

(num1 + num2 === num3) // el === es un comparador estricto, también se puede poner = pero cuando sea posible mejor usar comparaciones estrictas
? console.log("El resultado de la suma de los dos primeros números es igual al tercero")
: console.log("El tercero no es la suma de los dos anteriores")











//Escribe un programa que pida al usuario 3 números. Si el resultado de la suma de los dos primeros es igual al tercer número, mostrarlo en pantalla, 
//si no mostrar que el tercero no es la suma de los dos anteriores.
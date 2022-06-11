let num1 = parseInt(window.prompt('Introduce un número mayor de 25 menor de 75:')); 

let num2 = parseInt(window.prompt('Introduce otro número mayor de 25 menor de 75:'));

let digi11 = num1.substring(0,1)
let digi12 = num1.substring(1)
let digi21 = num1.substring(0,1)
let digi22 = num1.substring(1)
    
( digi11 === digi21 || digi11 === digi22 || digi12 === digi21 || digi12 === digi22 )
        ? console.log("Hay dos dígitos en común")
        : console.log("No hay dígitos en común")



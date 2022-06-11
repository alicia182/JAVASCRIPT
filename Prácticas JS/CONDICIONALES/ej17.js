let num1 = parseInt(window.prompt('Introduce un número'))
let num2 = parseInt(window.prompt('Introduce otro número'))
let num3 = parseInt(window.prompt('Introduce un tercer número'))
let mayor

if(num1 > num2 && num1 > num3) { // tiene que ser estrictamente mayor
    mayor = num1
}
else if (num2 > num1 && num2 > num3) {
    mayor = num2
}
else if {
    mayor = num3
}else {
    console.log('No hay ninguno mayor que los demás')
}

console.log(`El número mayor es ${mayor}`)
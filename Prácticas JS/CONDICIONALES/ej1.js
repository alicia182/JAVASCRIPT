let num1 = parseInt(window.prompt('Introduce un número'))
let num2 = parseInt(window.prompt('Introduce otro número'))
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log((num1 + num2) / 2)

if (num1 > num2){
    console.log(`${num1} es el mayor y ${num2} es el menor`)
}else if (num2 > num1){
    console.log(`${num1} es el mayor ${num2} es el menor`)
}else{
    console.log(`${num1} y ${num2}son iguales`)
}

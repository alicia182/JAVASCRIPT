let num1 = parseInt(window.prompt('Introduce un número'))
let num2 = parseInt(window.prompt('Introduce otro número'))
let num3 = parseInt(window.prompt('Introduce un tercer número'))
let menor;

if(num1 < num2 && num1 < num3) {
    menor = num1
}
else if (num2 < num1 && num2 < num3) {
    menor = num2
}
else {
    menor = num3
}

console.log(`El número menor es ${menor}`)
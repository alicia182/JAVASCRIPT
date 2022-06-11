let num1 = parseInt(window.prompt('Introduce un número')) 
let num2 = parseInt(window.prompt('Introduce otro número'))
let num3 = parseInt(window.prompt('Introduce un tercer número número'))

if(Math.abs(num1 - num2)===20){  // si pones math.abs te aseguras de que el num que ponga sea positivo
    console.log(`${num1} Tiene 20 menos que ${num2} hay una diferencia de 20`) /*console.log(`${num1<num2?num1:num2} Tiene 20 menos que ${num2<num1?num1:num2} hay una diferencia de 20`)*/

}else if (Math.abs(num1-num3)===20){
    console.log(`Entre ${num1} y ${num3}hay una diferencia de 20`)

}else if (Math.abs(num2-num3)===20){
    console.log(`Entre ${num2} y ${num3}hay una diferencia de 20`)
}else{
    console.log('No hay ninguna diferencia entre los 2 números')
}

/*falta terminar*/
let array = []
let suma = 0

let longitud = parseInt(window.prompt('introduce la longitud del array: '))

for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 100)) //math random devuelve numero decimal entre cero y uno.
                                                //los multiplicas por 100 para que sean enteros

 
}

/*for (let i = 0; i < array.lenght; i++){
    suma += array[i]
   
}*/

console.log(suma/10)




/*Haz un programa que realice la media de los valores que contiene un array 
de 10 números y lo muestre por consola. No es necesario pedir los números al usuario*/
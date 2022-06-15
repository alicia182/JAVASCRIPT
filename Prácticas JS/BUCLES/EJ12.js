// pedir un numero de 3 cifras
//sumar las cifras entre si

let cifra = window.prompt('Introduce un número de tres cifras:')
let suma = 0

for (let i = 0; i < cifra.length; i++) {
    suma += parseInt(cifra.substring(i, i+1))
    
}





/*PODRIA RESOLVERSE ASI PERO NO ES EL PUNTO PORQUE NO ES UN BUCLE
let cifra = window.prompt('Introduce un número de tres cifras:')

console.log(
    parseInt(cifra.substring(0,1)) + 
    parseInt(cifra.substring(1,2))
    parseInt(cifra.substring(2))
)
*/
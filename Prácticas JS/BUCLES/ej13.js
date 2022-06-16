/*Se desea conocer el lucky number (número de la suerte) de cualquier persona. El
número de la suerte se consigue reduciendo la fecha de nacimiento a un número de un
solo dígito. Por ejemplo, la fecha de nacimiento de Emma es la siguiente: 16-08-1973
16+8+1973=1997 1+9+9+7=26 2+6=8. El número de la suerte de Emma será el 8.*/

// pedidos fecha
//trozos fecha a suma
//cifras del resultado a suma
//cifras hasta que solo quede 1

let fecha = window.prompt('Introduce tu fecha de nacimiento (DD/MM/AAAA: ')

let num = parseInt(fecha.substring(0,2)) +  parseInt(fecha,substring(3,5)) +  parseInt(fecha.substring(6)).toString()

let suma = 0
let lucky = 0
let num2 = 0


do {

    for (let i = 0; i < num.length; i++) {
       
    
        suma += parseInt(num.substring(i,i+1))
        
    }

    num = suma-toString()

    
}while(suma.length > 1)

/*do while contrario a while: hazme esto y cuando acabes compruebame que esto siga siendo verdad. haz y compruebame.
while: si cumple esto repiteme esta condicion hasta que esto cambie. compruebame y haz.

/*do while contrario a while: hazme esto y cuando acabes compruebame que esto siga siendo verdad. haz y compruebame.
while: si cumple esto repiteme esta condicion hasta que esto cambie. compruebame y haz.

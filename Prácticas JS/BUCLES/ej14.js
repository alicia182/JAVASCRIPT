/*Pedir al usuario un número. Mostrar en pantalla el dibujo de abajo con tantas líneas
como las que haya introducido:
*
**
***  */

//PEDIR NUMERO
//IMPRIMIR UNA PIRAMIDE

let numero = parseInt(window.prompt('Introduce un número:'))

let impresion = ""

for (let i = 0; i <= numero; i++) {
    

    console.log(`${impresion}+="*"`)
    
}


/*11. Escribe un programa que muestre el número entero positivo que 
el usuario introduzca pero al revés (si introduce 1478 que muestre 8741), 
hasta que el usuario introduzca 0. Si introduce 0 la primera vez, 
debería mostrarlo al revés (es decir, mostrar 0) y acabar el
programa.*/

//pedir numero
// se repite mientras no sea cero
//imprimir el numero inverso
//con dowhile preguntas por lo menos una vez

do{
    let numero = (window.prompt('Introduce un número'))//debe ser string porque le vas a sacar el length
    let inverso = ""

    for (let i = 0; i < numero.length; i++) {
      inverso += numero.substring(numero.length - i, (numero.lenght- i) + 1)
        
    }

    console.log(inverso)



}while(numero !=== "0") 


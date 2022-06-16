
/*Escribe un programa que muestre el resultado de sumar todos los números del 1 hasta el
número introducido y que vuelva a pedirle al usuario otro número hasta que el usuario
introduzca un 0.

//pedir numero HASTA que meta 0*/

numero = 0 //no sabemos que ha metido el usuario, necesitamos que se ejecute una vez, se usa el dowhile

do{
    let numero = parseInt(window.prompt('Introduce un número'))
    let suma = 0
    for (let i = 1; i <= numero; i++) {
        
        suma += i
    }
    console.log(`El resultado de sumar ${numero} y todos los números anteiores a él es: ${suma}`)

}while(numero != 0)   // while(condicion). hasta que no se cumpla el 0

console.log('Fin de programa')

//ver repeticion para ver dif entre while, do while, for

//while se repite hasta que deje de cumplirse una condicion
//se usa doble figura iterativa, se mete el codigo desde el 1 hasta que dice el usuario
/*SI QUEREMOS QUE SE HAGA UNA VEZ, DO WHILE, SI QUEREMOS QUE SE HAGA MIENTRAS SE CUMPLA UNA CONDICION
WHILE, Y UN NUMERO X DE VECES, FOR.



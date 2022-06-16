/*Escribe un programa que pida valores. Si introduce un valor negativo, mostrar un
mensaje diciendo que se ignoran los valores negativos.Seguir pidiendo hasta que el
usuario introduzca un 0, entonces mostrar la suma de los valores introducidos.*/ 
// pedir valores 
//bucle sin interacciones concretas, con 0 acaba el programa

//se ignoran los negativos
let suma = 0

do{


let numero = parseInt(window.prompt('Introduce un número'))

/*numero > 0
? suma += numero
: numero === 0  
    ?window.alert(suma)
    :window.alert('No acepto números negativos')*/

if (numero > 0){
    suma += numero
} else if (numero === 0) {
    window.alert(suma)
}else {
    window.alert('no se aceptan números negativos')
}

}while(numero != 0)

//VER REPETICION PARA TERMINARLO
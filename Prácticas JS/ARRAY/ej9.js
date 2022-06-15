let array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]
/*for (let i = 0; i < 10; i++) {
    const element = array[i];
    
}*/

let numero = 0

do{
    numero = parseInt(window.prompt('Introduce un número entre 0 y 9'))
    numero >= 0 && numero =< 9   
    ? (console.log(array[numero]), (array[numero] = array[numero] * 2))
    : console.log('Eres un tonto)')
}






/*Crear un array de 10 valores. Pon el valor 1 en cada una de las posiciones. Pedir al usuario que 
introduzca un número entre 0 y 9. Cada vez que introduzca un valor entre 0 y 9, 
mostrar el valor de esa posición del array, y modificarlo multiplicando por 2.*/
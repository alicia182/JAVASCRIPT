let num = parseInt(window.prompt('Introduce el número:'))

let suma = 0



for (let i = 1; i <= num; i++){
    
    suma += i     //operador de asignacion numerica, operan sobre si mismos. aumenta el valor y lo guarda en la misma variable. 
}                 // es lo mismo que decir suma = suma + i. también puedes hacerlo con *



console.log(suma)

/*Crear un programa que muestre el valor de sumar todos los números desde 1 hasta el
número que introduzca el usuario. Por ejemplo si introduce el 8 debería mostrar 36 (1 +
2+ 3+ 4+ 5+ 6+ 7+ 8).*/

// usas for porque si te dan un 8 vas a iterar 8 veces, etc, por lo que sabes el numero de iteraciones

//inspeccionar e ir a fuentes e inspeccionar el codigo paso a paso para ver que pasa.
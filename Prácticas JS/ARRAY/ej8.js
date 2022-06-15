let array = []

for (let i = 0; i < 20; i ++){

array.push(Math.floor(Math.random() * (35 - 18) + 18))    //valores decimanles aleatorios entre 18 y 35. 
suma += array[1]                                             //  Math floor redondea*
}




/*Crea un programa que a partir de un array que contiene las edades de 20 alumnos 
(generadas aleatoriamente entre 18 y 35), calcule y nos devuelva la media de edad de dicha clase.*/

/*parseInt trunca, que es darte un número entero, si es 23.87 te lo trunca a 23.


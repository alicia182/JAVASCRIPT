/*Escribe un programa el cual analizará si la contraseña introducida es correcta o no. Para
que la contraseña sea correcta deberá cumplir estas directivas:
● Debe tener 8 caracteres como mínimo.
● La contraseña deberá contener números. (buscar una función)
● La primera letra tiene que ser en mayúsculas.(buscar una función)*/

//+8
//numero
//mayuscula inicial
//buscar en mdn funcion

let contrasena = window.prompt('Introduce tu contraseña')//no usar Ñ para la variable
let numero = false

if(contrasena.length <= 8){
    

    for (let i = 0; i < 10; i++) {
        if (contrasena.includes(i.toString())){ //comprueba que contraseña tiene este numero pasado a string
            numero = true
        }
    if (numero){
        if(contrasena.substring(0,1 === contrasena.substring(0,1).toUpperCase)){ //quieres saber si la 1a letra que puso usuario es igual a la 1a letra en mayuscula
            console.log('La contraseña SI cumple los requisitos')                 // si puso el usuario mayuscula es true, si no se cumple, es false
            } else{ 
            console.log('La contraseña no cumple los requisitos')

            }

            }else {
            console.log('La contraseña no cumple los requisitos')
         

        //VER CLASE
         }
    }   
        
}

/*Escribe un programa que muestre todos los valores pares o impares 
entre 1 y 100 dependiendo de si el usuario introduce P o I . 
Si introduce otra cosa, decir que ese valor no es correcto 
y pedirle otra vez.*/


//usuario da opcion -> bloque condicional
// for 0-100
//do while*/


let opcion = window.prompt('introduce una opción (P)ares o (I)mpares').toUpperCase()
let primera = true

do{

    let opcion = window.prompt('Introduce una opción (P)ares o (I)mpares').toUpperCase()
    if (opcion !=== "I" && opcion !=== "P"){
        window.alert('Tas colao. Eso no es una opción válida')
        opcion = window.prompt('')'Introduce una opción (P)ares o (I)mpares'
    }else {
        for (let i = 0; i <= 100; i++) {
        if(i % 2 === 0 && opcion === "P"){
            console.log(i)
        }else if (i % 2 === 1 && opcion === "I"){
            console.log(i)
        } 
            
    }
}

}while (opcion !=== "P" && opcion !=== "I")
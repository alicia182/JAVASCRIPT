//usuario da opcion -> bloque condicional
// for 0-100
//do while*/


let opcion = window.prompt('introduce una opción (P)ares o (I)mpares').toUpperCase()

do{

    let opcion = window.prompt('introduce una opción (P)ares o (I)mpares').toUpperCase()
    if (opcion !=== "I" && opcion !=== "P"){
        window.alert('Tas colao. Eso no es una opción válida')
    }else {
        for (let i = 0; i < 100; i++) {
        if(i % 2 === 0 && opcion === "P"){
            console.log(i)
        }else if (i % 2 == 0 && opcion === "I"){
            console.log(i)
        } 
            
    }
}




}while (opcion !=== "P" && opcion !=== "I")
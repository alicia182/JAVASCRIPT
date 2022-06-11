let dia = window.prompt('Introduce un día de la semana').toLowerCase()


if(dia==="lunes" || dia === "martes" || dia === "miércoles" || dia === "jueves" || dia === "viernes"){
    console.log(`Es ${día}`)
}else if(dia === "sabado" || dia === "sábado" || dia ==="domingo"){
    console.log(`Es finde!`)

}else{
    console.log("eso no es un día a la semana")
}

switch(dia){
    case "lunes":
    case "martes":
    case "miércoles":
    case "jueves":
    case "viernes":
        console.log(`Hoy es ${dia}`)
    break; // el punto y coma en este caso es opcional
    case "sábado":
    case "sabado":
    case "domingo":
        console.log("Hoy es finde!")
    break;
    default: // siempre poner dos puntos :
        console.log("eso no es un día de la semana")
    }
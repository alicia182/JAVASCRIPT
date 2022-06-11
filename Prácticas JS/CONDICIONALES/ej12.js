let posicion = parseInt(window.prompt('Introduce tu posición:'))

Posición === 1
? console.log("Ganaste")
: console.log("Lo importante es participar")

if(posicion === 1){
    console.log("Medalla de oro")
}else if(posicion === 2){
    console.log("Medalla de plata")
}else if(posicion === 3){
    console.log("Medalla de bronce") 
}else {
    console.log("Lo Importante es participar")
}


switch(posicion){
    case 1:
        console.log("Medalla de oro")
    break
    case 2:
        console.log("Medalla de plata")
    break
    case 3:
        console.log("Medalla de bronce")
    break
    default:
        console.log("Lo importante es participar")
   }

   if(posicion > 0 && posicion <=3){ //es true si las dos condiciones se cumplen (verdadero y verdadero) || es true cuando uno de los dos es válido,
       console.log("Sube al podium")
   }else{
       console.log("Se acabó la carrera")
   }
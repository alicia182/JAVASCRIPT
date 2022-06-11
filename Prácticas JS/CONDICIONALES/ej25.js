let frase = window.prompt("Dile algo a Bob: ")

if (frase.indexOf("?!") !=== -1 || frase.substring(frase.lenght -2) === "!?"){ //el final de la frase menos 2
    window.alert("Eh tranquilízate. Yo sé lo que hago...")

}else if(frase.indexOf("?") !=== -1){
    window.alert("Claro!")

}else if(frase.indexOf("!") !=== -1){ // indexof devuelve -1 si no encuentra lo que se le pide
    window.alert("Eh tranquilízate")

}else if (frase.length === 0) {
    window.alert('Vale, con que esas tenemos...')
}else{
    window.alert("Sin más....")
}
    

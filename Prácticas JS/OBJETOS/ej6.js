let personas = {

};

let busqueda = window.prompt("Introduce un nombre")// por in es para iterar objetos
 
let respuesta = document.createElement("div")
respuesta.classList.add("card") //AÑADES AL DIV UNA CLASS QUE SE LLAMA CARD. W3SCHOOLS PUEDES VER EL CODIGO PARA HACER UNA CARTA
let encontrado = false


for (const nombre in persona) {
    if(nombre.name === busqueda){
        encontrado = true
        respuesta.innerHTML =`
        <div>
        <img src "" alt "">
        <h3>${nombre.name}</h3>
        <p>${nombre.email}</p>
        <p>${nombre.adress}</p>
        </div>
        `
        
        
        //generar card
    }

if(!encontrado) {}
    respuesta.innerHTML = `<P>No hemos encontrado nada por búsqueda</p>`
    
}
  //generar feedback negativo

  document.body.appendChild(respuesta)

  //VER REPETICION CLASE 20/6/2022

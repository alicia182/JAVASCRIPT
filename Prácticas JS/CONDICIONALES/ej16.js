let menu = window.prompt('Eligue entre Hamburguesa, Helado o Filete').toLowerCase()

if(menu==="hamburguesa" || menu === "filete" ){
    console.log(`Has seleccionado ${menu}`)
}else if(menu === "helado"){
    console.log(`Has seleccionado ${menu}, un rico postre`)

}else{
    console.log('Eso no está en el menú')
}

switch(menu) {
    case "hamburguesa":
    case "Filete":
        console.log(`Has seleccionado ${menu}`)
    break;
    case "helado":
        console.log(`Has seleccionado ${menu}, un rico postre`)
    break;
    default:
}

let opcion = window.prompt(`Cómo quieres la carne 
A -Cruda
B -Al punto
C -Muy hecha`)
.toUpperCase() // en este caso se usan comillas francesas

if (opcion === "A"){
    window.alert('Si la llevas al veterinario la salvas')
} else if ( opcion === "B"){
    window.alert('Al punto. Buena elección')
}else if (opcion === "C"){
    window.alert('Enseguida le traemos su suela de zapatilla')
}else{
    window.alert('Mejor una ensalada?')
}

switch(opcion){
    case "A":
        window.alert('Si la llevas al veterinario la salvas')
    break;
    case "B": 
        window.alert('Al punto. Buena elección')
    break;
    case "C": 
        window.alert('Enseguida le traemos su suela de zapatilla')
    default:
        window.alert('Mejor una ensalada?')

}

/*ejercicio de clase*/
    /*let opcion = window.prompt('Cómo quieres la carne? \n A-Cruda \n B-Al punto \n C-Muy hecha').toUpperCase*/
    
    
    
   

    

//Ver video
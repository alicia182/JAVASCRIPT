/*Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
Pediremos de qué figura queremos calcular su área y según lo introducido pedirá los
valores necesarios para calcular el área. Crea un método por cada figura para
calcular cada área, este devolverá un número entero(sin decimales). Muestra el
resultado por pantalla
a. Circulo: (radio^2)*PI
b. Triángulo: (base * altura) / 2
c. Cuadrado: lado * lado*/

let opcion = window.prompt(`De qué figura quieres calcular el área?:
1 - Círculo
2 - Cuadrado
3 - Triángulo`)

if(option === '1'){
    let radio = parseInt(window.prompt('Introduce el radio de tu círculo'))
    window.alert(areaCirculo(radio))
}else if (opcion === "2"){
    let lado parseInt(window.prompt('Introduce el lado de tu cuadrado'))
        window.alert(areaCuadrado(lado)){


//VER CLASE
    
        
   



function areaCirculo(radio){
    return parseInt((radio**2)*3.1592)
}

function areaCuadradp(lado){
    return parseIn(lado**2)
}

function areaTriangulo(base, altura){
    return parseInt(base*altyra)
}
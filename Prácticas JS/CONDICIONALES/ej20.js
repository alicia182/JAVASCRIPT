let temperatura = parseFloat(window.prompt("Escribe la temperatura"))
let simbolo  = window.prompt(`Escribe C si quieres convertirlos:
C = Centigrados
F = Fahrenheit`).toUpperCase()


switch(simbolo){
    case "C":
        window.alert(`${temperatura}°F serían ${(temperatura -32)*5/9}°C`)
    break;
    case "F":window.alert(`${temperatura}°C serían ${(temperatura*9/5)+32}°F`)
    } 

        //Switch está hecho para opciones y es la opción ideal
        //   ° se pone con alt + 0176
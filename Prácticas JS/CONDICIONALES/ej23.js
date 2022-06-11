let year = parseInt(window.prompt("Introduce el año:"))
if(year % 4 === 0 && year % 100 === 0 || year % 400 === 0) //tiene que ser divisible entre 4 y no entre 100, o dividible en 400
window.alert(`${year} es un año bisiesto`){                 //se tienen que cumplir las 2 && o la condicion de ||

}else{
    window.alert(`${year} no es un año bisiesto`)
}


//year / 4 --> bisiesto && !/100 (no es divisible por 100) || year / 400
//         true                true          


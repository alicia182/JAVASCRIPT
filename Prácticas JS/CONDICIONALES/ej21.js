let nombre = (window.prompt("Hola, introduce tu nombre:"))
let ventas = parseInt(window.prompt('Introduce el precio de las ventas:'))
let comision = ventas * 0.05

ventas >= 500
? window.alert(`${nombre} has vendido ${ventas}€ y te llevarás ${comision}€ como extra. En total te llevas ${ventas + comision}€.`)
: window.alert(`${nombre} has vendido ${ventas}€, y al ser menor a 500€ no recibirás un extra`)


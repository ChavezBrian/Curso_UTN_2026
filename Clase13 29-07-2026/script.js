/* 
Solicitar al usuario su edad (Imaginemos para practicos que el dato siempre es valido (un numero positivo))
Si la edad del usuario es menor a 16 entonces indicar por consola "Es menor de edad"
Si la edad del usuario es entre 16 y 18 entonces indicar por consola "Casi deja de ser menor de edad"
Si la edad del usuario es mayor a 18 entonces indicar por consola "Es mayor de edad"

Para saber si un numero esta en cierto rango podemos usar el && (AND)
Si esta entre tanto && tanto
*/


let edad = prompt('Ingrese su edad')

if (edad < '16') {
    console.log('Es menor de edad')
}
else if (edad >= '16' && edad < '18') {
    console.log('Casi deja de ser menor de edad')
}
else if (edad >= '18') {
    console.log('Es mayor de edad')
}

/* 
Solicitar al usuario un numero A (Asumimos que el usuario escribira correctamente un numero)
Solicitar al usuario un numero B (Asumimos que el usuario escribira correctamente un numero)
Solicitar al usuario una operacion 
Si la operacion es "+" o "sumar" entonces deberemos por consola mostrar el resultado de la suma de A + B es C
Si la operacion es '-' o "restar" entonces deberemos por consola mostrar el resultado de la resta de A - B es C 
Si la operacion no es ninguno de los anteriores deberemos decir por consola "Operacion invalida, vuelva a intentar"
*/

let numeroA = Number(prompt('Ingrese un numero'))
let numeroB = Number(prompt('Ingrese otro numero'))
let operacion = prompt('Ingrese una operacion')

if(operacion === '+' || operacion === 'sumar'){
    console.log(numeroA + numeroB)
}
else if(operacion === '-' || operacion === 'restar'){
    console.log(numeroA - numeroB)
}
else{
    console.log('Operacion invalida, vuelva a intentar')
}


/*
Mis ejercicio usando switch
*/

let numeroA = Number(prompt('Ingrese un numero'))
let numeroB = Number(prompt('Ingrese otro numero'))
let operacion = prompt('Ingrese una operacion')

switch (operacion) {
    case '+':
    case 'sumar':
        console.log(numeroA + numeroB)
        break
    case '-':
    case 'restar':
        console.log(numeroA - numeroB)
        break
    default:
        console.log('Operacion invalida, vuelva a intentar')
}

/* 
Solicitar al usuario una operacion (Que puede ser "+", "-", 'sumar', 'restar')
Verificar que la operacion sea valida, en caso de no serlo volver a solicitar
*/

let operacion = prompt('Ingrese una operacion')

while (
    operacion !== '+' &&
    operacion !== 'sumar' &&
    operacion !== '-' &&
    operacion !== 'restar'
) {
    alert('Operación inválida')
    operacion = prompt('Ingrese una operación válida')
}

alert('Operación válida')
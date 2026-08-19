/*
Crear la funcion calcular que recibira 3 parametros
    a: es un numero
    b: es un numero
    operacion: es un string que puede ser '+' o '-'
Si la operacion es + debera retornar el resultado de la suma de a + b
Si la operacion es - debera retornar el resultado de la resta de a - b

No se solicita el uso de PROMPTS
*/

function calcular(a, b, operacion) {
    let resultado;
    if (operacion === '+') {
        resultado = a + b;
    }
    else if (operacion === '-') {
        resultado = a - b;
    }
    else {
        return null;
    }
    return resultado;
}

console.log(calcular(10, 5, "-"))

// Dado una lista de numeros, calcular su sumatoria (osea el resultado de sumar todos los numeros de la lista)
let numeros = [500, 400, 100];
let sumatoria = 0;

for (let i = 0; i < numeros.length; i++) {
    sumatoria = sumatoria + numeros[i];
}
console.log(`El resultado final es ${sumatoria}`)

/* 
Crear una funcion que se llame obtenerIva(tipoIva) y busque el valor del iva dado cierto tipoIva
Si el tipoIva es invalido devolver null

Como debe funcionar:
    obtenerIva('general') retorna 21
    obtenerIva('reducido') retorna 10.5
    obtenerIva ('pepe') retorna null
*/

let tipos_iva = [
    ['general', 21],
    ['reducido', 10.5],
    ['aumentado', 27]
]

let valorIva;

function obtenerIva(tipoIva){
    for(
        let i = 0; 
        i < tipos_iva.length; 
        i++
    ){
        let nombre_tipo_iva = tipos_iva[i][0]
        let valor_tipo_iva = tipos_iva [i][1]
        if(nombre_tipo_iva === tipoIva)
            return valor_tipo_iva
    }
    return null
}

console.log(obtenerIva('pepe'))

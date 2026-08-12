//Pan y queso
/*
El usuario debe elegir si sera "pan" o "queso",
se calculara un numero aleatorio entre 1 y 20
vamos a alternar entre pan y queso hasta llegar al numero aleatorio (pueden determinar quien inicia con otro numero
aleatorio)
el valor final determinara si el usuario gano (si el valor final es igual al valor seleccionado)
*/

let numero_random = Math.floor( (Math.random() * 20) + 1 ) //Formula para obtener un numero aleatorio entre 1 y 20
console.log('Numero aleatorio generado: ' + numero_random)

let palabra_elegida = prompt("Elija una palabra entre pan y queso") //Usuario elige
console.log('La palabra elegida es ' + palabra_elegida)

let numero_entero = Math.floor(Math.random() * 2); //Formula para obtener un numero aleatorio entre 0 y 1

let palabra

if(numero_entero === 0){
    palabra = "pan";
}
else {
    palabra = "queso";
}

for(let i = 1; i <= numero_random; i++){
    console.log(i, palabra)
    if(palabra === "pan"){
        palabra = "queso"
    }
    else {
        palabra = "pan"
    }
}

if(palabra === palabra_elegida){
    console.log('Felicidades, ganaste')
}
else{
    console.log('Lo siento, perdiste')
}

/*
Crear una funcion llamada calcularIva que recibira un numero y mostrara por consola "el iva de ${numero} es ${iva}"
*/

function calcularIva(numero){
    let iva = numero * 0.21
    console.log(`El iva de $ ${numero} es $ ${iva}`)
}

calcularIva(5000)

/*
Crear una funcion llamada saludar que reciba un nombre y diga por consola "Hola {nombre}"
*/

function saludar(nombre){
    console.log(`Hola ${nombre}`)
}

saludar(Brian)
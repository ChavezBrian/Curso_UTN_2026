/* 
La clásica: Crea una función tradicional llamada saludar que reciba un 
parámetro nombre. Dentro de las llaves { }, haz que imprima 
console.log("¡Bienvenido, " + nombre + "!");.  
*/

function saludar(nombre){
    console.log("¡Bienvenido, " + nombre + "!");
}

/* 
Llama a la acción: Ejecuta esa función pasándole tu propio nombre como 
argumento. Comprueba tu consola F12 en Chrome.  
*/

saludar("Brian")

/* 
Conversión a Arrow: Crea una Arrow Function => en una sola línea (Return 
implícito) llamada esMitad. Debe recibir un numero y devolver el resultado de 
dividirlo por 2. 
*/

const esMitad = numero => numero / 2;

/* 
Cachando Retornos: Guarda el resultado de esMitad(100) dentro de una 
nueva variable llamada resultadoFinal, y luego imprímela en consola para 
asegurar que el return te haya entregado la "taza de café" correcta. 
*/ 

let resultadoFinal = esMitad(100)

console.log(resultadoFinal)

/* 
El Detective de Strings: Crea una función que reciba una URL en texto 
(por ejemplo, "https://miweb.com/admin/panel"). Usa el método 
.includes() para verificar si contiene la palabra "admin" e imprime en 
consola si el usuario tiene permisos o no. 
*/

let url = "https://miweb.com/admin/panel";

function verificarPermisos(url) {
    if (url.includes("admin")) {
        console.log("El usuario tiene permisos");
    } else {
        console.log("El usuario no tiene permisos");
    }
}

/* 
El Extractor de Numbers: Crea una variable con el texto "45.99px". 
Utiliza parseFloat() para extraer el número limpio, multiplícalo por 2 para 
simular un aumento y muestra el resultado final en la consola. 
*/

let texto = "45.99px";

let numero = parseFloat(texto);

let resultado = numero * 2;

console.log("El aumento es " + resultado);
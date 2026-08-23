/* 
1. Crea un objeto literal llamado productoOriginal con las claves: titulo: 
"Laptop", precio: 1000 y stock: 5.  
*/

const productoOriginal = {
    titulo: 'Laptop',
    precio: 1000,
    stock: 5,
}

/* 
2. El desastre de la Referencia: Crea una variable productoCopia = 
productoOriginal;. Cámbiale el precio a la copia (productoCopia.precio = 500;).  
*/

const productoCopia = productoOriginal;
productoCopia.precio = 500;

/* 
3. Imprime console.log(productoOriginal.precio). ¡Sorpresa! El original se 
arruinó.  
*/

console.log(productoOriginal.precio)

/* 
4. La clonación segura: Crea un clonSeguro utilizando el Spread Operator ({ 
...productoOriginal }). 
*/

const clonSeguro = { ...productoOriginal }

/* 
5. Pon en 0 el stock del clonSeguro. Imprime ambos objetos en consola para 
verificar que, esta vez, el original sí sobrevivió al ataque. 
*/

clonSeguro.stock = 0;

console.log(productoOriginal)
console.log(clonSeguro)

/* 6. 
Destructuring: En una sola línea de código, extrae el titulo del original y 
guárdalo en una constante suelta, para luego imprimirlo directamente 
como console.log(titulo). 
*/

const { titulo } = productoOriginal;
console.log(titulo)


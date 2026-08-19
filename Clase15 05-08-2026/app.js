/* 
1. Crea un archivo nuevo. Define un Array inmutable usando const llamado 
cestaBase que contenga 3 strings de nombres de frutas: ["Manzana", "Banana", "Pera"]. 
*/

const cestaBase = ['Manzana', 'Banana', 'Pera']

/* 
2. El dueño del local te pide que agregues una "Uva" al final de la lista porque 
hay demanda urgente. Usa un método mutable clásico (destructivo) sobre 
el Array. Imprime el Array resultante con console.log(cestaBase). ¿Funcionó a 
pesar de ser const? (Sí, los Arrays pueden mutar por dentro, aunque su 
etiqueta principal sea una constante). 
*/

cestaBase.push('Uva')

console.log(cestaBase)

/* 
3. Ahora viene la directiva de marketing: Se deben escribir los precios de 
todos los productos en una lista nueva para enviarlos al Frontend de 
React, pero sumándoles un 20% de impuesto. Crea un array numérico 
preciosBase = [10, 20, 50].  
*/

let precioBase = [10, 20, 50]

/* 
4. Crea una nueva variable preciosImpuesto. Usando exclusivamente el método 
inmutable .map(), recorre el array viejo, multiplícalo por 1.20 y guarda el 
resultado clonado en la nueva variable.  
*/

let preciosImpuesto

preciosImpuesto = precioBase.map(precio => precio * 1.2);

/* 
5. Asegúrate de imprimir tanto el viejo array como el nuevo para comprobar 
que no destruiste la data original. ¡Misión cumplida!  
*/

console.log(precioBase)
console.log(preciosImpuesto)
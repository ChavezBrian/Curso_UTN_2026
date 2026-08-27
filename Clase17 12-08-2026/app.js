/* 
1. Selección: Atrapa a tu título vacío usando document.getElementById y 
guárdalo en una variable llamada miTitulo.  
*/

const miTitulo = document.getElementById("titulo");

/* 
2. Inyección: Ponle tu nombre al título de forma segura usando la propiedad 
de texto recomendada en el Checkpoint. Abre tu HTML en Chrome y 
verifica que tu nombre aparece. 
*/

miTitulo.textContent = 'Brian Chavez';

/* 
3. Estética CSS: En tu JS, añádele una clase inventada llamada 
titulo-gigante usando el gestor de ropa .classList.  
*/

miTitulo.classList.add("titulo-gigante");

/* 
4. Creación Mágica: Debajo del título, usa JS puro (createElement) para crear 
una etiqueta de párrafo <p>. Ponle el texto "Creado desde la Matrix" y haz 
que aterrice visualmente en el cuerpo (body) de la página mediante un 
appendChild. 
*/

const miParrafo = document.createElement("p");

miParrafo.textContent = "Creado desde la Matrix";

document.body.appendChild(miParrafo);
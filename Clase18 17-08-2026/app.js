/* 
1. En tu HTML, crea un pequeño formulario con un input para tu nombre, un 
input de tipo color (para tu color favorito), y un botón de "Guardar Perfil". 
*/

const formulario = document.getElementById("formulario_perfil");
const nombre = document.getElementById("nombre");
const color = document.getElementById("color");

/* 
2. En JS, atrápalo y ponle un "escuchador" para el evento de envío (submit).  
*/

/*
 formulario.addEventListener("submit", function(event) {
    console.log("Se envió el formulario");
}); 
*/

/* 
3. ¡Detén la recarga automática de la página!   
*/

/* 
formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const perfil = {
        nombre: nombre.value,
        color: color.value
    };

}); 
*/

/* 
4. Crea un Objeto Literal llamado perfil que guarde adentro el nombre y el color 
que el usuario escribió (usando la propiedad .value de los inputs). 
*/

/* 
formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const perfil = {
        nombre: nombre.value,
        color: color.value
    };

    const perfil_texto = JSON.stringify(perfil);

    localStorage.setItem('perfilUsuario', perfil_texto);

}); 
*/

/* 
5. Usa JSON.stringify para disfrazar ese objeto de texto plano, y guárdalo en tu 
localStorage bajo la llave "perfilUsuario".  
*/

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const perfil = {
        nombre: nombre.value,
        color: color.value
    };

    const perfil_texto = JSON.stringify(perfil);

    localStorage.setItem('perfilUsuario', perfil_texto);

});

/* 
6. Prueba de fuego: Recarga la página por tu cuenta. Escribe código "suelto" 
(fuera de cualquier evento) que pida el perfilUsuario al localStorage. Si el 
dato existe (no es null), aplícale ese color de fondo al cuerpo 
(document.body.style.backgroundColor) de la página. 
*/

const perfilGuardado = localStorage.getItem("perfilUsuario");

if (perfilGuardado !== null) {

    const perfil = JSON.parse(perfilGuardado);

    document.body.style.backgroundColor = perfil.color;
}

/* 
7. ¡Acabas de crear tu primer sistema de preferencias inmortales!  
*/



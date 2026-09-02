const btn_click = document.getElementById('btn')

function saludar() {
    alert('Hola que tal!')
}

btn_click.addEventListener(
    'click',
    saludar
)

/* 
Contador
- El boton de resta decrementara tu contador
- El boton de suma incrementara tu contador
- El span mostrara el valor del contador (inicialmente 0)

Recomendacion: 
- Tener una variable en JS con el valor de tu contador y esa
variable mostrarla en el span
*/


const btn_click_resta = document.getElementById("btn-resta")
const btn_click_suma = document.getElementById("btn-suma")
const span_contador = document.getElementById("contador")
let contador = 0;

function incrementarContador() {
    contador++;
    span_contador.textContent = contador;
}

function decrementarContador() {
    contador--;
    span_contador.textContent = contador;
}

btn_click_resta.addEventListener(
    'click',
    decrementarContador
)

btn_click_suma.addEventListener(
    'click',
    incrementarContador
)

/* 
Selector de opciones

Al clickear una opcion la seleccionare, dependiendo en la opcion que 
seleccione en el div de opcion seleccionada debe aparecer el numero de 
la opcion (selecciono opcion 1 y dee decir "Opcion seleccionada: 1")

Ayudita:
- Todos los elementos
*/

const btn_1 = document.getElementById("btn-1")
const btn_2 = document.getElementById("btn-2")
const btn_3 = document.getElementById("btn-3")
const contenedor = document.getElementById("contenedor")

const valor_btn_1 = btn_1.getAttribute('data-option-number')
const valor_btn_2 = btn_2.getAttribute('data-option-number')
const valor_btn_3 = btn_3.getAttribute('data-option-number')

let opcion_seleccionada = null

function renderOpcionSeleccionada () {
    contenedor.textContent = `Opcion seleccionada: ${opcion_seleccionada}`
}

function setOpcionSeleccionada(valor) {
    opcion_seleccionada = valor
    renderOpcionSeleccionada()
}

function seleccionarOpcion(evento) {
    let valor_btn_seleccionado = evento.target.getAttribute('data-option-number')
    setOpcionSeleccionada(valor_btn_seleccionado)
}

btn_1.addEventListener(
    'click',
    seleccionarOpcion
)

btn_2.addEventListener(
    'click',
    seleccionarOpcion
)

btn_3.addEventListener(
    'click',
    seleccionarOpcion
)
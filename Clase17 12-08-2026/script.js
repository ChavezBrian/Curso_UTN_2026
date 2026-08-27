/* 
Dado el producto escribir dentro de un elemento con id product-card
h2: titulo
span: precio

Estructura:
    <h2></h2>
    <div>
        <span>Precio: <strong>$4000</strong></span>
    <div>
    <button>Comprar</button>    
*/

const producto = {
    id: 1,
    titulo: 'Tv Samsung 52"',
    precio: 4000
}

const product_card = document.getElementById('product-card')

product_card.innerHTML = `
    <h2>${producto.titulo}</h2>
    <div>
        <span>Precio: <strong>$${producto.precio}</strong></span>
    <div>
    <button>Comprar</button>
`

/* 
Renderizar la lista de mensajes
<div>
    <h3>Autor</h3>
    <p>Mensaje</p>
    <span>Fecha</span>
    <hr>
</div>
*/

const mensajes_card = document.getElementById("mensajes-card")

const mensajes = [
    {
        autor: 'pepe',
        mensaje: "hola que tal!",
        fecha: '21:30',
        id: 1
    },
    {
        autor: 'Tu',
        mensaje: "Todo bien y vos?",
        fecha: '21:32',
        id: 2
    },
    {
        autor: 'pepe',
        mensaje: "Genial!",
        fecha: '21:35',
        id: 3
    }
]

let html_mensajes = ''
for (let mensaje of mensajes) {
    html_mensajes = html_mensajes + `
    <div>
        <h3>${mensaje.autor}</h3>
        <p>${mensaje.mensaje}</p>
        <span>${mensaje.fecha}</span>
        <hr>
    </div>
    `
}

mensajes_card.innerHTML = html_mensajes




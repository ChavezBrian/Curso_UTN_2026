let productos = [
    {
        id: 1,
        titulo: 'Silla oficina',
        precio: 320000,
        stock: 10
    },
    {
        id: 2,
        titulo: 'Escritorio madera',
        precio: 120000,
        stock: 3
    },
    {
        id: 3,
        titulo: 'Alfombra roja',
        precio: 60000,
        stock: 7
    }
]

/* 
Dada una lista de productos que actuara como estado
    - Crear una funcion renderProducts que tomara la lista y la mostrara en pantalla
      Cada producto seguira la sig estructura:
        `<div>
            <h2>Titulo</h2>
            <div><b>Precio:</b> $precio</div>
            <div><b>Stock:</b> $stock</div>
            <button>Eliminar</button>
            <button>Editar</button>
        <div>`
    Si no hay productos decir en un <p>Lista de productos vacia</p>.
    Esta funcion deberia ser invocada una vez asi renderizamos la lista de productos.

    - Crear la funcion setProductos (valor) y al llamarla cambiara el valor del estado y volvera a renderizar la
    lista de productos
        Para probar este setter podrian llamar a setProductos([]) y en pantalla deberian ver el parrafo indicando 
        que la lista esta vacia
*/
const lista_productos = document.getElementById('lista-productos')

function renderProductos() {
    let lista_prodcutos_string = ''

    if (!productos?.length) {
        lista_prodcutos_string = lista_prodcutos_string + `<p>Lista de productos vacia</p>`
    } else {
        for (const producto of productos) {
            lista_prodcutos_string = lista_prodcutos_string + `<h2>${producto.titulo}</h2>
                                                               <div>
                                                                    <b>Precio:</b> ${producto.precio}
                                                               </div>
                                                               <div>
                                                                    <b>Stock:</b> ${producto.stock}
                                                               </div>
                                                               <button>Eliminar</button>
                                                               <button>Editar</button>`
        }
    }

    lista_productos.innerHTML = lista_prodcutos_string
}

function setProductos(valor) {
    productos = valor
    renderProductos()
}

renderProductos()

/* 
Crear una funcion llamada eliminarProductoPorId
    Recibira un id y modificara el estado (mediante el setter) para elminar el prodcuto con el id recibido, sino
    existe devolvera null.
*/

function eliminarProductoPorId(id) {
    let indice = null
    let copia_productos = [...productos]

    for (const producto of copia_productos) {
        if (producto.id === id) {
            indice = copia_productos.indexOf(producto)
            break
        }
        if (indice === null) {
            return null
        }
    }

    copia_productos.splice(indice, 1)
    setProductos(copia_productos)
}
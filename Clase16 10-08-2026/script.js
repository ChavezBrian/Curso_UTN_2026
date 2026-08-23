const nombres = ['pepe', 'juan', 'maria', 'carlos', 'jose', 'julieta', 'ana']

//Verificar si existe 'pedro', en caso de existir decir "Pedro!" por consola

if (nombres.includes('pedro')) {
    console.log('Pedro!')
}

//Eliminar a 'maria'

let indice_maria = nombres.indexOf('maria')
nombres.splice(indice_maria, 1)

console.log(nombres)

//Reemplazar a 'jose' por 'josesito'

let indice_jose = nombres.indexOf('jose')
nombres.splice(indice_jose, 1, 'josesito')

console.log(nombres)

//Crear una funcion llamada calcularPromedio que dado una lista de numeros me devuelva su promedio
//Usar FOR OF para recorrer la lista

const notas = [90, 40, 100]

function calcularPromedio(numeros) {
    let sumatoria = 0;
    let promedio;

    for (let numero of numeros) {
        sumatoria = sumatoria + numero;
    }

    return promedio = (sumatoria / numeros.length)
}

console.log(calcularPromedio(notas))

/* 
Crear una funcion llamada contarNombres que dada una lista de nombres y el nombre que queremos buscar, nos cuente 
cuantas veces un nombre esta dentro de la lista. La funcion debe devolver esa cuenta, si no hay ninguno entonces 
debe devolver 0. 
*/

let nombres_tv = ['tv noblex', 'tv samsung', 'tv noblex']

function contarNombres(lista_de_nombres, nombre_a_buscar) {
    let contador = 0;

    for (let nombre of lista_de_nombres) {
        if (nombre === nombre_a_buscar) {
            contador++;
        }
    }

    return contador
}

console.log(contarNombres(nombres_tv, 'tv samsung'))

//Quiero subir 20000 el precio de la tv noblex (por id, 2)

/* 
const productos = [
    {
        nombre: 'tv samsung',
        id: 1,
        precio: 120000,
        categorias: ['Tecnologia', 'Hogar']
    },
    {
        nombre: 'tv noblex',
        id: 2,
        precio: 100000,
        categorias: ['Tecnologia', 'Hogar']
    }
]

function subirPrecio(productos, idProducto, precioASubir) {
    for (let producto of productos) {
        if (producto.id === idProducto) {
            producto.precio = producto.precio + precioASubir
            break;
        }
    }
} 
*/

//TAREA: Funciones, arrays y objetos

const productos = [
    { id: 1, nombre: "TV", precio: 500, categorias: ["electronica"] },
    { id: 2, nombre: "Celular samsung galaxy s20", precio: 300, categorias: ["electronica", "moviles"] },
    { id: 3, nombre: "Licuadora", precio: 100, categorias: ["hogar"] },
    { id: 4, nombre: "Laptop", precio: 800, categorias: ["electronica", "computacion"] }
];

//buscarProductoPorId(productos, idBuscado) Buscar un producto por id y retornarlo

function buscarProductoPorId(productos, idBuscado) {
    for (const producto of productos) {
        if (producto.id === idBuscado) {
            return producto;
        }
    }
}

console.log(buscarProductoPorId(productos, 4))

//buscarProductoPorNombre(productos, nombreBuscado) Buscar un producto por nombre y retornarlo

function buscarProductoPorNombre(productos, nombreBuscado) {
    for (const producto of productos) {
        if (producto.nombre === nombreBuscado) {
            return producto;
        }
    }
}

console.log(buscarProductoPorNombre(productos, 'Licuadora'))

//filtrarPorPrecioMin(productos, precioMin) Filtrar todos los productos que su precio se mayor a cierto numero y devolver la lista

function filtrarPorPrecioMin(productos, precioMin) {
    const nuevaLista = [];

    for (const producto of productos) {
        if (producto.precio > precioMin) {
            nuevaLista.push(producto)
        }
    }

    return nuevaLista;
}

console.log(filtrarPorPrecioMin(productos, 200))

//agregarCategoriaAProducto(productos, id, categoria) Agregar categoria (en caso de que no exista)

function agregarCategoriaAProducto(productos, id, categoria) {
    for (const producto of productos) {
        if (producto.id === id) {

            if (!producto.categorias.includes(categoria)) {
                producto.categorias.push(categoria)
            }

            break
        }
    }
}

//eliminarProductoPorId(productos, id) Eliminar producto por id

function eliminarProductoPorId(productos, id) {
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
            productos.splice(i, 1)
            break
        }
    }
}




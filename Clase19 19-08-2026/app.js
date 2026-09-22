// 2. Atrapa el botón y los elementos del DOM
const boton = document.getElementById('btnBuscar');
const inputHeroe = document.getElementById('nombreHeroe');
const divResultado = document.getElementById('resultado');

// 2 y 3. Sensor de evento click con función async
boton.addEventListener('click', async () => {
    // Limpiamos estilos previos
    divResultado.style.color = 'inherit';

    // 3. Escudo try / catch
    try {
        const valorDelInput = inputHeroe.value.trim();

        // 4. URL dinámica usando Template Literals
        const url = `https://swapi.dev/api/people/?search=${valorDelInput}`;

        // 5. await al fetch
        const res = await fetch(url);

        // 6. Validación: chequeo if (!res.ok)
        if (!res.ok) {
            throw new Error("Error en la conexión con la API");
        }

        // 7. Extraer los datos en formato JSON
        const data = await res.json();

        // Si la búsqueda no devolvió coincidencias (data.results está vacío),
        // forzamos el error para que caiga en el catch como pide el paso 9
        if (data.results.length === 0) {
            throw new Error("Personaje no encontrado");
        }

        // 8. Encontrar el nombre y dibujarlo usando textContent
        divResultado.textContent = data.results[0].name;

    } catch (error) {
        // 9. El catch inyecta el texto en rojo
        divResultado.style.color = 'red';
        divResultado.textContent = 'El lado oscuro bloqueó esta petición';
    }
})
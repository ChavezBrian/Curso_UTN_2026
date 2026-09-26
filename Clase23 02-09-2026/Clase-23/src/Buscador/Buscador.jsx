import { useState } from 'react';
import { useFetch } from '../hooks/useFetch'; // Asegúrate de ajustar la ruta a tu useFetch
import './Buscador.css';

function Buscador() {
  // 2. Estados: userId (inicial en 1) e input controlado
  const [userId, setUserId] = useState(1);
  const [input, setInput] = useState('1');

  // 3 y 6. Llamada a useFetch con URL dinámica y extracción de refetch
  const { data, loading, error, refetch } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  // 4. Actualizar el userId con el valor del input
  function handleBuscar(e) {
    e.preventDefault();
    if (input.trim() !== '') {
      setUserId(input.trim());
    }
  }

  return (
    <div className="buscador-container">
      <h2>Buscador de Usuarios</h2>

      <form onSubmit={handleBuscar} className="buscador-form">
        <input
          type="number"
          min="1"
          max="10"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ID de usuario (1-10)"
          className="buscador-input"
        />
        <button type="submit" className="btn-buscar">
          Buscar
        </button>
      </form>

      {/* 5. Renderizado según loading, error o data */}
      <div className="estado-box">
        {loading && <p className="cargando-msg">Cargando usuario...</p>}

        {!loading && error && (
          <div>
            <p className="error-msg">Hubo un error al buscar el usuario</p>
            {/* 6. Bonus: Botón Reintentar con refetch */}
            <button onClick={refetch} className="btn-reintentar">
              Reintentar
            </button>
          </div>
        )}

        {!loading && !error && data && (
          <div className="usuario-info">
            <h3>{data.nombre || data.name}</h3>
            <p><strong>Email:</strong> {data.email}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Buscador;
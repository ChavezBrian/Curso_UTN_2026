// 1. Componente Interruptor.jsx
// 2. Importamos useState
import { useState } from 'react';
import './Interruptor.css';

function Interruptor() {
  // 3. Memoria inicial en booleano false (apagado)
  const [luzEncendida, setLuzEncendida] = useState(false);

  // 5. Función que niega el valor previo con el operador '!'
  function cambiarLuz() {
    setLuzEncendida(prev => !prev);
  }

  return (
    /* 6. Fondo condicional con ternario: clase 'dia' (amarillo) o 'noche' (negro) */
    <div className={`contenedor-luz ${luzEncendida ? 'dia' : 'noche'}`}>
      
      {/* 6. Emoji condicional con ternario: ☀️ o 🌙 */}
      <p className="icono-luz">
        {luzEncendida ? '☀️' : '🌙'}
      </p>

      {/* 4. Botón con evento onClick={cambiarLuz} */}
      <button className="btn-interruptor" onClick={cambiarLuz}>
        {luzEncendida ? 'Apagar luz' : 'Encender luz'}
      </button>
    </div>
  );
}

export default Interruptor;
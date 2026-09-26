import { useState } from 'react';
import './GeneradorDeTarjeta.css';

function GeneradorDeTarjeta() {
  // 2. Estado único 'form' agrupando los 3 campos
  const [form, setForm] = useState({
    nombre: '',
    profesion: '',
    email: ''
  });

  // Manejador genérico para múltiples inputs
  function handleChange(evento) {
    const { name, value } = evento.target;

    setForm((formPrevio) => ({
      ...formPrevio,
      [name]: value // Clave computada de JS
    }));
  }

  // 5. Bonus: Evento onSubmit con preventDefault e impresión del objeto
  function handleSubmit(evento) {
    evento.preventDefault();
    console.log('Enviando datos al backend:', form);
    alert('¡Tarjeta guardada con éxito! Revisa la consola.');
  }

  return (
    <div className="generador-wrapper">
      {/* 3 y 5. Formulario con inputs controlados y botón Guardar */}
      <form onSubmit={handleSubmit} className="formulario-tarjeta">
        <h2>Generador de Tarjeta</h2>

        <div className="campo-grupo">
          <label htmlFor="nombre">Nombre Completo:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Ej: Laura Gómez"
            required
          />
        </div>

        <div className="campo-grupo">
          <label htmlFor="profesion">Profesión / Puesto:</label>
          <input
            type="text"
            id="profesion"
            name="profesion"
            value={form.profesion}
            onChange={handleChange}
            placeholder="Ej: Diseñadora UI/UX"
            required
          />
        </div>

        <div className="campo-grupo">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Ej: laura@ejemplo.com"
            required
          />
        </div>

        <button type="submit" className="btn-guardar">
          Guardar Tarjeta
        </button>
      </form>

      {/* 4. Tarjeta de presentación con datos reactivos en vivo */}
      <div className="tarjeta-presentacion">
        <h3 className="tarjeta-nombre">
          {form.nombre || 'Tu Nombre Aquí'}
        </h3>
        <p className="tarjeta-profesion">
          {form.profesion || 'Tu Profesión'}
        </p>
        <p className="tarjeta-email">
          {form.email || 'correo@ejemplo.com'}
        </p>
      </div>
    </div>
  );
}

export default GeneradorDeTarjeta;
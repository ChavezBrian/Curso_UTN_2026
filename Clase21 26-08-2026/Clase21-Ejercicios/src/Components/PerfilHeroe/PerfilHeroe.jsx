import './PerfilHeroe.css';

function PerfilHeroe({ nombre, poder, universo }) {
  // Asignamos una clase específica según el universo (Marvel / DC)
  const universoClass = universo.toLowerCase() === 'marvel' ? 'badge-marvel' : 'badge-dc';

  return (
    <div className="card-heroe">
      <span className={`badge-universo ${universoClass}`}>
        {universo}
      </span>
      <h2 className="card-nombre">{nombre}</h2>
      
      <div className="card-poder-box">
        <span className="card-poder-label">PODER PRINCIPAL</span>
        <p className="card-poder-desc">{poder}</p>
      </div>
    </div>
  );
}

export default PerfilHeroe;
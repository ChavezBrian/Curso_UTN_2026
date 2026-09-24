import './Message.css'

function Message(props) {

  return (
    <div className={`product-cards-container ${props.esRemitente ? 'product-card--remitente' : ''}`}>
      <div className='product-card'>
        <h2>{props.autor}</h2>
        <p>{props.contenido}</p>
        <div className="message-meta">
          <span className="hora">{props.hora}</span>
          <span className="estatus">{props.estatus_envio === 'visto' ? '✓✓' : '✓'}</span>
        </div>
      </div>

    </div>
  )
}

export default Message
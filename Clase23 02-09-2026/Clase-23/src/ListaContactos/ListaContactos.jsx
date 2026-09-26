import './ListaContactos.css';

const ListaContactos = () => {

    const contactos = [
    {
      id: 1,
      nombre: 'Marcos',
      ultimo_mensaje: 'hay que juntarnos!...',
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLIHmaujoe_qC8ROxIs2zMEm3NiUVQvJnGv0OoPqz9X1za_w5CRvzkPGdq&s=10",
      mensajes_sin_leer: 2,
      fecha_ultimo_mensaje: '12/2/2023 14:30'
    },
    {
      id: 2,
      nombre: 'Lucía Fernández',
      ultimo_mensaje: '¿Me pasas el apunte de la clase?',
      imagen: 'https://www.eventosfilm.com/wp-content/uploads/2018/01/foto-carnet-se%C3%B1orita.gif',
      mensajes_sin_leer: 0,
      fecha_ultimo_mensaje: '12/2/2023 15:10'
    },
    {
      id: 3,
      nombre: 'Martín Gómez',
      ultimo_mensaje: 'Dale, nos vemos a las 19:00 en la plaza.',
      imagen: 'https://irp.cdn-website.com/46764031/dms3rep/multi/opt/foto-carnet-ejemplo-header-384w.JPG',
      mensajes_sin_leer: 1,
      fecha_ultimo_mensaje: '12/2/2023 16:45'
    },
    {
      id: 4,
      nombre: 'Valentina',
      ultimo_mensaje: 'Audio (0:45)',
      imagen: 'https://onlinepassport.photo/assets/u-imgs/22.png',
      mensajes_sin_leer: 4,
      fecha_ultimo_mensaje: '12/2/2023 17:02'
    }
  ];

  const contactos_jsx = [];

  for (const contacto of contactos) {
    contactos_jsx.push(
      <div key={contacto.id} className="contacto-card">
        <div className="contacto-header">
          <img className="contacto-img" src={contacto.imagen} alt={contacto.nombre} />
          <h2 className="contacto-nombre">{contacto.nombre}</h2>
        </div>
        <span className="badge-no-leidos">
          Mensajes sin leer: {contacto.mensajes_sin_leer}
        </span>
        <p className="ultimo-mensaje">{contacto.ultimo_mensaje}</p>
        <p className="fecha-mensaje">{contacto.fecha_ultimo_mensaje}</p>
      </div>
    );
  }

  return (
    <div className="chat-list">
      {contactos_jsx}
    </div>
  );
};

export default ListaContactos;
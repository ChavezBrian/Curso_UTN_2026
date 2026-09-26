import React from 'react';
import Message from './Components/Message/Message.jsx';
import './global.css';
import Counter from './Components/Counter/Counter.jsx';

export default function App() {
  let remitente = 'Yo';
  let destinatario = 'Maria';

  return (
    <div>
      <div className='chat-window'>
        <Message
          autor={remitente}
          hora={'19:40'}
          contenido={'¡Hola María! ¿Tenés un minuto?'}
          estatus_envio={'visto'}
          esRemitente={true}
        />
        <Message
          autor={destinatario}
          hora={'19:42'}
          contenido={'Hola, sí, decime. Justo salí de cursar.'}
          estatus_envio={'visto'}
          esRemitente={false}
        />
        <Message
          autor={remitente}
          hora={'19:43'}
          contenido={'Al final nos juntamos hoy a comer unas pizzas por mi cumple, ¿te sumás?'}
          estatus_envio={'visto'}
          esRemitente={true}
        />
        <Message
          autor={remitente}
          hora={'19:43'}
          contenido={'Sería tipo 21:30 en el local de siempre.'}
          estatus_envio={'visto'}
          esRemitente={true}
        />
        <Message
          autor={destinatario}
          hora={'19:45'}
          contenido={'¡Qué bueno! Me encantaría ir, pero llego un toque tarde porque tengo que pasar por casa primero.'}
          estatus_envio={'visto'}
          esRemitente={false}
        />
        <Message
          autor={destinatario}
          hora={'19:46'}
          contenido={'¿Van los chicos de la facu también?'}
          estatus_envio={'visto'}
          esRemitente={false}
        />
        <Message
          autor={remitente}
          hora={'19:48'}
          contenido={'Sí, vienen Santi, Lucas y Valen. No hay problema con la hora, caé cuando puedas.'}
          estatus_envio={'visto'}
          esRemitente={true}
        />
        <Message
          autor={remitente}
          hora={'19:49'}
          contenido={'Avisame si querés que te guarde lugar.'}
          estatus_envio={'visto'}
          esRemitente={true}
        />
        <Message
          autor={destinatario}
          hora={'19:52'}
          contenido={'De una, guardame un lugar al lado de Valen. ¡Nos vemos en un rato!'}
          estatus_envio={'visto'}
          esRemitente={false}
        />
        <Message
          autor={remitente}
          hora={'19:53'}
          contenido={'¡Dale, te esperamos!'}
          estatus_envio={'entregado'}
          esRemitente={true}
        />
      </div>
      <div>
        <Counter/>
      </div>
    </div>
  );
}


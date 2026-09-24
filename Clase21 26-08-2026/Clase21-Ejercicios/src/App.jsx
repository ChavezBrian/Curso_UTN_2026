import PerfilHeroe from "./Components/PerfilHeroe/PerfilHeroe";

function App() {
  const heroes = [
    {
      id: 1,
      nombre: 'Spider-Man',
      poder: 'Sentido arácnido y agilidad',
      universo: 'Marvel'
    },
    {
      id: 2,
      nombre: 'Batman',
      poder: 'Intelecto superior y artes marciales',
      universo: 'DC'
    },
    {
      id: 3,
      nombre: 'Iron Man',
      poder: 'Armadura de alta tecnología',
      universo: 'Marvel'
    }
  ];

  return (
    <div className="app-container">
      <h1 className="app-title">Colección de Héroes</h1>

      <div className="deck-container">
        {heroes.map((heroe) => (
          <PerfilHeroe
            key={heroe.id}
            nombre={heroe.nombre}
            poder={heroe.poder}
            universo={heroe.universo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
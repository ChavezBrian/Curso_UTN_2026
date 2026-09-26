import React, { useState } from "react"
import './global.css'
import ListaContactos from "./ListaContactos/ListaContactos.jsx";
import Buscador from "./Buscador/Buscador.jsx";


function App() {
  return (
    <div>
      <ListaContactos />
      <Buscador />
    </div>

  );
}

export default App;
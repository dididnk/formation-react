import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';

function App() {
  // state (état, données)
  const [compteur, setcompteur] = useState(1);

  // comportements
  const handlerClick = () =>{
    setcompteur(compteur + 1);
  }

  // affichage (UI, rendu)
  return (
    <>
      <h1>Compteur {compteur}</h1>
      <button onClick={handlerClick}>Incrémenter</button>
    </>
  )
}

export default App

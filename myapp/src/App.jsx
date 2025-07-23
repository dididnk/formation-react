import { useState } from 'react';
import Street from './components/Street';
import StreetForm from './components/StreetForm';
import './App.css';

function App() {
  // state (état, données)
  const [streets, setStreets] = useState([
    { id: 1, title: "Paris" },
    { id: 2, title: "Lyon" },
    { id: 3, title: "Marseille" },
    { id: 4, title: "Bordeaux" },
    { id: 5, title: "Toulouse" },
    { id: 6, title: "Nice" },
  ]);

  const handleAddStreet = (newStreet) => {
    const newStreets = [...streets];
    newStreets.push(newStreet);
    setStreets(newStreets);
  }

  const hendleDeleteStreet = (id) => {
    //1. copie du state
    const newStreets = [...streets];

    //2. manipuler le state
    const streetsUpdated = newStreets.filter(street => street.id !== id);

    //3. modifier le state
    setStreets(streetsUpdated);
  }

  // affichage (UI, rendu)
  return (
    <>
      <h1>Exercice : Gestion du formulaire</h1>

      <StreetForm handleAddStreet={handleAddStreet}/>

      <ol>
        {streets.map((street) => {
          return <Street key={street.id} streetInfo={street} onStreetDelete={hendleDeleteStreet} />
        })}
      </ol>
    </>
  )
}

export default App;

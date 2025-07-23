import { useState } from 'react';
import Street from './components/Street';
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

  const [newStreet, setNewStreet] = useState("");

  // comportements
  const hendleDeleteStreet = (id) => {
    //1. copie du state
    const newStreets = [...streets];

    //2. manipuler le state
    const streetsUpdated = newStreets.filter(street => street.id !== id);

    //3. modifier le state
    setStreets(streetsUpdated);
  }

  const handleAddStreet = (event) => {
    event.preventDefault();
    if(newStreet === null || newStreet.trim() === "") return;
    //1. copie du state
    const newStreets = [...streets];

    //2. manipuler le state
    const newStreetUpdated = {id: new Date().getTime(), title: newStreet};
    newStreets.push(newStreetUpdated);

    //3. modifier le state
    setStreets(newStreets);
    setNewStreet("");
  }

  const handleChange = (event) => {
    setNewStreet(event.target.value);
  }


  // affichage (UI, rendu)
  return (
    <>
      <h1>Exercice : Gestion du formulaire</h1>
      <form action="submit" onSubmit={handleAddStreet}>
        <input value={newStreet} onChange={handleChange} type='text' placeholder='ajouter une ville' id='streetTitle'></input>
        <button>Ajouter</button>
      </form>

      <ol>
        {streets.map((street) => {
          return <Street streetInfo={street} onStreetDelete={hendleDeleteStreet}/>
        })}
      </ol>
    </>
  )
}

export default App;

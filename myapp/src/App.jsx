import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';

function App() {
  // state (état, données)
  const [streets, setStreets] = useState([
    {id: 1, title: "Paris"},
    {id: 2, title: "Lyon"},
    {id: 3, title: "Marseille"},
    {id: 4, title: "Bordeaux"},
    {id: 5, title: "Toulouse"},
    {id: 6, title: "Nice"},
  ]);

  // comportements
  const hendleDeleteStreet = (id) =>{
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
      <h1>Exercice : Liste des ville de France</h1>
      <ol>
        {streets.map((street)=>{
          return <li key={street.id}>{street.title}<button onClick={()=>hendleDeleteStreet(street.id)}>X</button> </li>
        })}
      </ol>
    </>
  )
}

export default App;

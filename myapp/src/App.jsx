import { use, useState } from 'react';
import './App.css';
import { useRef } from 'react';

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
  
  const inputRef = useRef();

  // comportements
  const hendleDeleteStreet = (id) =>{
    //1. copie du state
    const newStreets = [...streets];

    //2. manipuler le state
    const streetsUpdated = newStreets.filter(street => street.id !== id);

    //3. modifier le state
    setStreets(streetsUpdated);
  }

  const handleAddStreet = (event) =>{
    event.preventDefault();
    console.log(inputRef.current.value);
  }


  // affichage (UI, rendu)
  return (
    <>
      <h1>Exercice : Gestion du formulaire</h1>
       <form action="submit" onSubmit={handleAddStreet}>
        <input type='text' ref={inputRef} placeholder='ajouter une ville' id='streetTitle'></input>
        <button>Ajouter</button>
      </form>
      <ol>
        {streets.map((street)=>{
          return <li key={street.id}>{street.title}<button onClick={()=>hendleDeleteStreet(street.id)}>X</button> </li>
        })}
      </ol>
    </>
  )
}

export default App;

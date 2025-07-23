import { useState } from 'react';

export default function StreetForm({handleAddStreet}) {
    const [newStreet, setNewStreet] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (newStreet === null || newStreet.trim() === "") return;

        const newStreetUpdated = { id: new Date().getTime(), title: newStreet };

        handleAddStreet(newStreetUpdated);
        setNewStreet("");
    }

    const handleChange = (event) => {
        setNewStreet(event.target.value);        
    }


    return (
        <form action="submit" onSubmit={handleSubmit}>
            <input value={newStreet} onChange={handleChange} type='text' placeholder='ajouter une ville' id='streetTitle'></input>
            <button>Ajouter</button>
        </form>
    )
}


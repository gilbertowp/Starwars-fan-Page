import React, { useState, useEffect } from "react";
import ItemCard from "./ElementCard";
import ElementDetails from "./ElementDetails";

function AllItems() {
    const [characters, setCharacters] = useState([]);
    const [selectedId, setSelectedId] = useState(null); 

    useEffect(() => {
        const fetchAllCharacters = async () => {
            let url = "https://swapi.dev/api/people/";
            let allCharacters = [];

            while (url) {
                const response = await fetch(url);
                const data = await response.json();
                allCharacters = [...allCharacters, ...data.results];
                url = data.next;
            }

            setCharacters(allCharacters);
        };

        fetchAllCharacters();
    }, []);

    if (characters.length === 0) return <p>Cargando personajes...</p>;

    return (
        <div>
            {selectedId && <ElementDetails id={selectedId} />}
            <h1>Todos los personajes</h1>
            <ul>
                {characters.map((character, index) => (
                    <ItemCard
                        key={index}
                        id={index + 1}
                        name={character.name}
                        onClick={() => setSelectedId(index + 1)} 
                    />
                ))}
            </ul>
        </div>
    );
}

export default AllItems;


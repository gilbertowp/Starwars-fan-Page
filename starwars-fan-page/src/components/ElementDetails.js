import React, { useState, useEffect } from "react";
import './ElementDetails.css'
import ItemCard from "./ElementCard";

function ElementDetails({ id }) {
    const [element, setElement] = useState(null);
    const [characterHomeWorld, setCharacterHomeWorld] = useState("");
    const [characterMovies, setCharacterMovies] = useState([]);
    const [characterSpecies, setCharacterSpecies] = useState([]);
    const [characterStarships, setCharacterStarships] = useState([]);
    
    useEffect(() => {

            fetch(`https://swapi.dev/api/people/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    setElement(data);
                    const filmUrls = data.films;
                    const speciesUrls = data.species;
                    const starshipsUrls = data.starships;
                    const homeworldUrl = data.homeworld;
                
                    ////Para lugar de residencia del personaje
                    if (homeworldUrl !== "") {
                        fetch(homeworldUrl).then((res) => res.json())
                            .then((homeworldName) => {
                                setCharacterHomeWorld(homeworldName.name);
                            })
                            .catch((error) => {
                                console.error("Error al cargar el lugar de residencia:", error);
                            });
                    } else {
                        setCharacterHomeWorld("No se encontró un lugar de residencia");
                    }
                    ////

                    ////Para películas del personaje
                    if (filmUrls.length > 0) {
                        Promise.all(filmUrls.map((url) => fetch(url).then((res) => res.json())))
                            .then((filmData) => {
                                setCharacterMovies(filmData.map((film) => film.title));
                            })
                            .catch((error) => {
                                console.error("Error al cargar las películas:", error);
                            });
                    } else {
                        setCharacterMovies(["No se encontraron películas"]);
                    }
                    ////

                    ////Para especie del personaje
                    if (speciesUrls.length > 0) {
                        Promise.all(speciesUrls.map((url) => fetch(url).then((res) => res.json())))
                            .then((speciesData) => {
                                setCharacterSpecies(speciesData.map((species) => species.name));
                            })
                            .catch((error) => console.error("Error al cargar la especie:", error));
                    } else {
                        setCharacterSpecies(["No se encontró especie"]);
                    }
                    ////

                    ////Para naves del personaje
                    if (starshipsUrls.length > 0) {
                        Promise.all(starshipsUrls.map((url) => fetch(url).then((res) => res.json())))
                            .then((starshipsData) => {
                                setCharacterStarships(starshipsData.map((starship) => starship.name));
                            })
                            .catch((error) => console.error("Error al cargar las naves espaciales:", error));
                    } else {
                        setCharacterStarships(["No se encontraron naves espaciales"]);
                    }
                    ////
                })
                .catch((error) => console.error("Error al obtener los datos del personaje:", error));
        }

    
    , [id]);

    if (!element) return <p>Cargando detalles del personaje...</p>;

    if (id) return (
        <div className="details-card">
            <div className="details-card-img">
                <img src={`${process.env.PUBLIC_URL}/personajes/${id}.png`} alt="imagen"/>
            </div>
            <div className="details-card-text">
                <h3>{element.name}</h3>
                <p><strong>Género: </strong>{element.gender}</p>
                <p><strong>Cumpleaños: </strong>{element.birth_year}</p>
                <p><strong>Lugar de residencia: </strong>{characterHomeWorld}</p>
                <p><strong>Películas: </strong>
                    <ul>
                        {characterMovies.map((title, index) => (
                            <li key={index}>{title}</li>
                        ))}
                    </ul>
                </p>
                <p><strong>Especie: </strong>
                    <ul>
                        {characterSpecies.map((title, index) => (
                            <li key={index}>{title}</li>
                        ))}
                    </ul>
                </p>
                <p><strong>Naves espaciales: </strong>
                    <ul>
                        {characterStarships.map((title, index) => (
                            <li key={index}>{title}</li>
                        ))}
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default ElementDetails;























// function ElementDetails() {
//     const [element, setElement]=useState(null);

//     useEffect(() => {
//         fetch("https://swapi.dev/api/people/1")
//             .then((response) => response.json())
//             .then((data) => {
//                 setElement(data);
//             })
//             .catch((error) => console.error("Error fetching data:", error));
//     }, []);

//     if (!element) return <p>Cargando productos...</p>;

//     return(
//         <div className="element-details">
//             <h3>{element.name}</h3>
//             <p><strong>Género: </strong>{element.gender}</p>
//             <p><strong>Cumpleaños: </strong>{element.birth_year}</p>
//             <p><strong>Peso: </strong>{element.mass} kg</p>
//             <p><strong>Especie: </strong>{element.species} </p>
            
//         </div>
//     );
// }
// export default ElementDetails;




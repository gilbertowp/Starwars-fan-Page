import React from "react";
import { Link } from "react-router-dom";

function HomeCards() {
    return (
        <div>
            <p>Selecciona una categoría:</p>
            <ul>
                <li><Link to="/category/people">Personajes</Link></li>
                <li><Link to="/category/films">Películas</Link></li>
                <li><Link to="/category/species">Especies</Link></li>
            </ul>
        </div>
    );
}

export default HomeCards;

import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <h1>Página principal</h1>
            <p>Selecciona una categoría:</p>
            <ul>
                <li><Link to="/category/people">Personajes</Link></li>
                <li><Link to="/category/movies">Películas</Link></li>
                <li><Link to="/category/starships">Naves</Link></li>
            </ul>
        </div>
    );
}

export default HomePage;


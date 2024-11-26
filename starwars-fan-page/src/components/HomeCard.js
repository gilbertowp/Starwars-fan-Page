import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    const categories = [
        { name: "Personajes", path: "people" },
        { name: "Películas", path: "films" },
        { name: "Naves", path: "starships" },
    ];

    return (
        <div>
            <h1>Star Wars Universe</h1>
            <div className="category-cards">
                {categories.map((category, index) => (
                    <div 
                        key={index} 
                        className="category-card"
                        onClick={() => navigate(`/category/${category.path}`)}
                    >
                        <h2>{category.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
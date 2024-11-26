import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ElementDetails from "./ElementDetails";
import ItemCard from "./ElementCard";

function CategoryPage() {
    const { category } = useParams();
    const [items, setItems] = useState([]);
    const [selectedId, setSelectedId] = useState(null); 

    useEffect(() => {
        const fetchCategoryItems = async () => {
            const url = `https://swapi.dev/api/${category}/`;
            const response = await fetch(url);
            const data = await response.json();
            setItems(data.results);
        };

        fetchCategoryItems();
    }, [category]);

    return (
        <div>
            {selectedId && <ElementDetails id={selectedId} />}

            <h1>{category.toUpperCase()}</h1>
            <ul>
                {items.map((item, index) => (
                    <ItemCard
                        key={index}
                        id={index + 1} 
                        name={item.name} 
                        onClick={() => setSelectedId(index + 1)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default CategoryPage;

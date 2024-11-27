import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ElementDetails from "./ElementDetails";
import ItemCard from "./ElementCard";
import SearchBar from "./ItemsSearcher";
import NavBar from "./Header";
import "./CategoryPage.css";

function CategoryPage() {
    const { category } = useParams();
    const [allItems, setAllItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [searchText, setSearchText] = useState(""); 
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        const fetchAllItems = async () => {
            let url = `https://swapi.dev/api/${category}`;
            let allItems = [];

            while (url) {
                const response = await fetch(url);
                const data = await response.json();
                allItems = [...allItems, ...data.results];
                url = data.next;
            }

            setAllItems(allItems);
            setFilteredItems(allItems);
        };

        fetchAllItems();
    }, [category]);


    const handleFilter = (searchValue) => {
        const filtered = allItems.filter((item) =>
            (item.name || item.title).toLowerCase().includes(searchValue)
        );
        setFilteredItems(filtered);
    };

    if (allItems.length === 0) return <p>Cargando elementos...</p>;

    return (
        <div className="initials">
            <NavBar></NavBar>
            {selectedId && <ElementDetails id={selectedId} selectedCategory={category} />}
            <div className="initials-info">
                <h2>{category.toUpperCase()}</h2>
                <h3>Selecciona un item para ver sus detalles</h3>
                <SearchBar
                searchText={searchText}
                setSearchText={setSearchText}
                onFilter={handleFilter} 
                />
                
            </div>
            
<div className="options-container">
<ul className="item-grid">
    {filteredItems.map((item) => {
        const originalIndex = allItems.indexOf(item);

        return (
            <li key={originalIndex}>
                <ItemCard
                    id={originalIndex + 1}
                    name={item.name || item.title}
                    onClick={() => setSelectedId(originalIndex + 1)}
                />
            </li>
        );
    })}
</ul>
</div>


        </div>
    );
}

export default CategoryPage;


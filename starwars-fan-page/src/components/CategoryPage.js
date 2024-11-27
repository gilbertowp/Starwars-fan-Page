import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ElementDetails from "./ElementDetails";
import ItemCard from "./ElementCard";
import SearchBar from "./ItemsSearcher";
import NavBar from "./Header";

function CategoryPage() {
    const { category } = useParams();
    const [allItems, setAllItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [searchText, setSearchText] = useState(""); // Texto de búsqueda
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
            setFilteredItems(allItems); // Inicialmente, muestra todos los elementos
        };

        fetchAllItems();
    }, [category]);

    // Filtra los elementos según el texto ingresado en la barra de búsqueda
    const handleFilter = (searchValue) => {
        const filtered = allItems.filter((item) =>
            (item.name || item.title).toLowerCase().includes(searchValue)
        );
        setFilteredItems(filtered);
    };

    if (allItems.length === 0) return <p>Cargando elementos...</p>;

    return (
        <div>
            <NavBar></NavBar>
            {selectedId && <ElementDetails id={selectedId} selectedCategory={category} />}

            <h1>{category.toUpperCase()}</h1>

            {/* Barra de búsqueda */}
            <SearchBar
                searchText={searchText}
                setSearchText={setSearchText}
                onFilter={handleFilter} // Pasa la función de filtrado
            />

            <ul>
                {filteredItems.map((item) => {
                    // Busca el índice original en la lista completa
                    const originalIndex = allItems.indexOf(item);

                    return (
                        <ItemCard
                            key={originalIndex}
                            id={originalIndex + 1} // Mantenemos el ID basado en la lista original
                            name={item.name || item.title}
                            onClick={() => setSelectedId(originalIndex + 1)}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default CategoryPage;


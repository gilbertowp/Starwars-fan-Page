import React from "react";
import "./itemSearcher.css";

function SearchBar({ searchText, setSearchText, onFilter }) {
    const handleInputChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchText(value);
        onFilter(value); 
    };

    return (
        <input
            type="text"
            placeholder="Buscar..."
            value={searchText}
            onChange={handleInputChange}

        />
    );
}

export default SearchBar;

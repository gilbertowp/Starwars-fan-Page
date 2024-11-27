import React from "react";

function SearchBar({ searchText, setSearchText, onFilter }) {
    const handleInputChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchText(value); // Actualiza el texto en el estado del componente padre
        onFilter(value); // Llama a la función de filtrado
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

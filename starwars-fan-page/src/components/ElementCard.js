import React from "react";

function ItemCard({ id, name, onClick }) {
    return (
        <li className="item-card">
            <h3>{name}</h3>
            <p>ID: {id}</p>
            <button onClick={onClick}>Ver más</button> 
        </li>
    );
}

export default ItemCard;


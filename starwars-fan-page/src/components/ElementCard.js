import React from "react";
import "./ElementCard.css"

function ItemCard({ id, name, onClick }) {
    return (
        <li className="item-card">
            <h3></h3>
            <button onClick={onClick}>{name}</button> 
        </li>
    );
}

export default ItemCard;


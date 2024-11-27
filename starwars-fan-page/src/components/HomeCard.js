import React from "react";
import { Link } from "react-router-dom";
import "./HomeCard.css";

function HomeCards() {
    return (
        <div className="home-cards-container">
            <h2 className="home-title">Selecciona la información que deseas ver</h2>
            <div className="cards">
                <div className="card">
                    <h3>Personajes</h3>
                    <img src={`${process.env.PUBLIC_URL}/icon1.png`} alt="imagen"/>
                    <Link to="/category/people"><button className="card-button">ver más</button></Link>
                </div>

                <div className="card">
                    <h3>Películas</h3>
                    <img src={`${process.env.PUBLIC_URL}/icon2.png`} alt="imagen"/>
                    <Link to="/category/people"><button className="card-button">ver más</button></Link>
                </div>


                <div className="card">
                    <h3>Especies</h3>
                    <img src={`${process.env.PUBLIC_URL}/icon3.png`} alt="imagen"/>
                    <Link to="/category/people"><button className="card-button">ver más</button></Link>
                </div>
                
                
            </div>
        </div>
    );
}

export default HomeCards;

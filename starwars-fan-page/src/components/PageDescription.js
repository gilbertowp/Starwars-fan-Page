import React from "react";
import "./PageDescription.css"

function DescribePage() {
    return(
        <div className="hero-container">
            <div className="hero-text">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="imagen"/>
            <p className="first-p">Basic info page</p>
            <p className="second-p"><strong>Descubre los secretos del universo Star Wars, desde personajes legendarios hasta especies épicas.</strong></p>
            <br></br>
            <br></br>
            <p className="third-p"><strong>"May the force be with you"</strong></p>
            </div>
        </div>
    )
}

export default DescribePage;
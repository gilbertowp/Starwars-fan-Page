import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="nav">
            <div className="nav-img">
            <Link to={"/"}><img src={`${process.env.PUBLIC_URL}/logo.png`} alt="imagen"/></Link>
            </div>
            <div className="nav-options">
                <p><strong><Link to="/category/people">Personajes</Link></strong></p>
                <p><strong><Link to="/category/films">Película</Link></strong></p>
                <p><strong><Link to="/category/species">Especie</Link></strong></p>
            </div>


        </div>
    );
}

export default NavBar;

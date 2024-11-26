import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";

function App() {
    return (
        <Router>
            <Routes>
                {/* Página principal */}
                <Route path="" element={<HomePage />} />

                {/* Página de categorías */}
                <Route path="/category/:category" element={<CategoryPage />} />

                {/* Puedes agregar otras rutas si es necesario */}
            </Routes>
        </Router>
    );
}

export default App;

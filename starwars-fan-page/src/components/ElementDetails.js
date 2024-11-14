import react,{useState,useEffect} from "react";
import './ElementDetails.css'

function ElementDetails() {
    const [element, setElement]=useState(null);

    useEffect(() => {
        fetch("https://swapi.dev/api/people/1")
            .then((response) => response.json())
            .then((data) => {
                setElement(data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    if (!element) return <p>Cargando productos...</p>;

    return(
        <div className="element-details">
            <h3>{element.name}</h3>
            <p><strong>Cumpleaños: </strong>{element.birth_year}</p>
            <p><strong>Peso: </strong>{element.mass} kg</p>
        </div>
    );
}



export default ElementDetails;
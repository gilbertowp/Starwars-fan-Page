import React from "react";
import HomeCards from "./HomeCard";
import NavBar from "./Header";
import DescribePage from "./PageDescription";

function HomePage (){

    return(
    <div>
        <NavBar></NavBar>;
        <DescribePage></DescribePage>
        <HomeCards></HomeCards>;
    </div>
    
    )
}

export default HomePage
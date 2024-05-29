import React, { useContext } from "react";
import Navbar from "./Navbar";
import Moviedetails from "./Moviedetails";
import { MovieContext } from "../utils/MovieContext";
function HomeSection(){

    const movieContextData = useContext(MovieContext)
    const backGroundStyle = {
        background:`linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${movieContextData.posterPath}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
    }
    return(
        <div className="home-section-container" style={backGroundStyle}>
            <Navbar/>
            <Moviedetails/>
        </div>
    )
}

export default HomeSection;
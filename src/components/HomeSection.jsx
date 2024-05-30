import React, { useContext } from "react";
import Navbar from "./Navbar";
import Moviedetails from "./Moviedetails";
import { MovieContext } from "../utils/MovieContext";
import { MdHeight } from "react-icons/md";
import MovieSlides from "./MovieSlides";
function HomeSection(){

    const movieContextData = useContext(MovieContext)
    const backGroundStyle = `
    .home-section-container {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${movieContextData.posterPath}");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      height: 100vh;
      color: rgb(242, 237, 237);
      transition: all 0.3s;
    }
  `;
    // const backGroundStyle = {
    //     background:`linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${movieContextData.posterPath}")`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundPosition: "center",
    //     backgroundSize: "cover",
    //     height: "100vh",
    //     color: "rgb(242, 237, 237)"
    // }

    return(
        <>
        <style>{backGroundStyle}</style>
        <div className="home-section-container" >
            <Navbar/>
            <Moviedetails/>
            <MovieSlides/>
        </div>
        </>
    )
}

export default HomeSection;
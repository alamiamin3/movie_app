import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Moviedetails from "./Moviedetails";
import { MovieContext } from "../utils/MovieContext";
import { MdHeight } from "react-icons/md";
import MovieSlides from "./MovieSlides";
function HomeSection(){

    const movieContextData = useContext(MovieContext)
    const [backGroundStyle, setBackgroundStyle] = useState("")
    // const backGroundStyle = `
    // .home-section-container {
    //   background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${movieContextData.posterPath}");
    //   background-repeat: no-repeat;
    //   background-position: center;
    //   background-size: cover;
    //   height: 100vh;
    //   color: rgb(242, 237, 237);
    //   transition: all 0.5s;
    // }
    //   .zoomIn {
    //     -webkit-animation-name: zoomIn;
    //     animation-name: zoomIn;
    //     -webkit-animation-duration: 1s;
    //     animation-duration: 1s;
    //     -webkit-animation-fill-mode: both;
    //     animation-fill-mode: both;
    //     }
    //     @-webkit-keyframes zoomIn {
    //     0% {
    //     opacity: 0;
    //     -webkit-transform: scale3d(.3, .3, .3);
    //     transform: scale3d(.3, .3, .3);
    //     }
    //     50% {
    //     opacity: 1;
    //     }
    //     }
    //     @keyframes zoomIn {
    //     0% {
    //     opacity: 0;
    //     -webkit-transform: scale3d(.3, .3, .3);
    //     transform: scale3d(.3, .3, .3);
    //     }
    //     50% {
    //     opacity: 1;
    //     }
    //     } 
    // }`;
    useEffect(() =>{
      setBackgroundStyle(`
      .home-section-container {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${movieContextData.posterPath}");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 100vh;
        color: rgb(242, 237, 237);
        transition: all 0.5s;
      }
    }`)
    }, [movieContextData])
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
            <Navbar active="home"/>
            <Moviedetails/>
            <MovieSlides/>
        </div>
        </>
    )
}

export default HomeSection;
import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../utils/MovieContext";
import apiConfig from "../api/apiConfig";
import Navbar from "./Navbar";

function MoviesCategories(){

    const movieContextData = useContext(MovieContext);
    const [itemBackGround, setItemBackGround] = useState("");
    useEffect(() => {
        let tmpStr = "";
        for(let i = 0; i < 18; i++){
            tmpStr += (`#item-${i}{
                background-image: url("${apiConfig.originalImage(movieContextData.moviesArr[i].poster_path)}");
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
            }`)
        }
        setItemBackGround(tmpStr)
    }, [movieContextData])
    return(
        <>
        <Navbar active="movies"/>
        <style>{itemBackGround}</style>

        <div id="MoviesCategories" className="movies-categorie-container">
            <div className="trend-section category">
                <h2>Top Rated:</h2>
                <div className="movie-list-container">
                    {
                        movieContextData.moviesArr.map((movie, index) => {
                                return (
                                <div className="movie-item zoomIn" key={index} id={`item-${index}`}>
                                    <div className="details">
                                        <h3>{movie.title}</h3>
                                        <button>View More Details</button>
                                    </div>
                                </div>
                            )
                        }).filter( (movie, index) =>{
                            return index >= 0 && index <= 5; 
                        })
                    }
                </div>
            </div>
            <div className="popular-section category">
                <h2>Trending:</h2>
                <div className="movie-list-container">
                {
                        movieContextData.moviesArr.map((movie, index) => {
                                return (
                                <div className="movie-item zoomIn" key={index} id={`item-${index}`}>
                                    <div className="details">
                                        <h3>{movie.title}</h3>
                                        <button>View More Details</button>
                                    </div>
                                </div>
                            )
                        }).filter( (movie, index) =>{
                            return index >= 6 && index <= 11; 
                        })
                    }
                </div>
            </div>
            <div className="last-section category">
                <h2>Last Release:</h2>
                <div className="movie-list-container">
                {
                        movieContextData.moviesArr.map((movie, index) => {
                                return (
                                <div className="movie-item zoomIn" key={index} id={`item-${index}`}>
                                    <div className="details">
                                        <h3>{movie.title}</h3>
                                        <button>View More Details</button>
                                    </div>
                                </div>
                            )
                        }).filter( (movie, index) =>{
                            return index >= 12 && index <= 17; 
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default MoviesCategories
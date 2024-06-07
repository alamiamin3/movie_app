import React, { useEffect } from "react";

import { useContext } from "react";
import { MovieContext } from "../utils/MovieContext";
import apiConfig from "../api/apiConfig";
function MovieCard(prop){
    const currentMovie = prop.movie
    const movieContextData = useContext(MovieContext)
    // const updateSectionData = () => {
        //     movieContextData.setMovieContextData((current) => {{...current, }})
        //     movieContextData.title = currentMovie.title
        //     movieContextData.posterPath = apiConfig.originalImage(currentMovie.poster_path)
        //     movieContextData.posterPath500 = apiConfig.smallImage(currentMovie.poster_path)
        //     movieContextData.overvView = currentMovie.overview
        //     movieContextData.rating = currentMovie.vote_average
        // }
        useEffect(() =>{
        console.log(currentMovie)
    },[])

    return(
        <div className="movie-card" onClick={()=>{
            movieContextData.setMovieContextData((currentState) => ({...currentState, 
            title:  currentMovie.title,
            posterPath:  apiConfig.originalImage(currentMovie.poster_path),
            posterPath50:  apiConfig.smallImage(currentMovie.poster_path),
            overvView:  currentMovie.overview,
            rating: currentMovie.vote_average
            }))
        }}>
            <img src={`${apiConfig.smallImage(prop.movie.poster_path)}`}/>
            <button className="movieCard-button">View More details</button>
        </div>
    )
}
 
export default MovieCard;
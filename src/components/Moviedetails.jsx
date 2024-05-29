import React, { useContext } from "react";
import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import { BsBookmarkPlusFill } from "react-icons/bs";

import { IoMdPlay } from "react-icons/io";
import { MovieContext } from "../utils/MovieContext";

function Moviedetails(){
    const movieContextData = useContext(MovieContext)
    // const getStarsbasedOnVote = () => {
    //     let stars = movieContextData.rating / 2;
    //     stars
    //     let starsArr = []
    //     while(stars)
    //     {
    //         if(stars >= 1)
    //             starsArr.push(1)
    //         else if (stars.)
    //     }
    // }
    return(
    <div className="movie-details-container">
        <h1>{movieContextData.title}</h1>
        <div className="stars">
            
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStarHalf />
        </div>
        <p className="types"><span>Type 1</span> | <span>Type 2</span></p>
        <p className="overview">{movieContextData.overvView}</p>
        <div className="fav-trailer">
            <BsBookmarkPlusFill className="addToFavorite"/>
            <IoMdPlay className="watchTrailer"/>
        </div>
    </div>)
}

export default Moviedetails;
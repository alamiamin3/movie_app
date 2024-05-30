import React, { useContext, useEffect, useState } from "react";
import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import { BsBookmarkPlusFill } from "react-icons/bs";

import { IoMdPlay } from "react-icons/io";
import { MovieContext } from "../utils/MovieContext";

function Moviedetails(){
    const movieContextData = useContext(MovieContext)
    const [starArr, setStarArr] = useState([])
    const getStarsbasedOnVote = () => {
        let stars = (movieContextData.rating / 2).toPrecision(3);
        let starsArr = [0,0,0,0,0]
        for(let i = 0; i < 5; i++)
        {
            if (stars >= 1)
                starsArr[i] = 1
            else if(stars >= 0.5)
                starsArr[i] = 0.5
            stars = stars - 1;
        }

        return(starsArr)
    }
    useEffect(()=>{
        setStarArr(() => getStarsbasedOnVote())
    }, [])
    return(
    <div className="movie-details-container">
        <h1>{movieContextData.title}</h1>
        <div className="stars">
            {
                starArr.map((elm, index) => {
                    if(elm === 1)
                        return <MdOutlineStar key={`star${index}`}/>
                    else if (elm === 0.5)
                        return <MdOutlineStarHalf key={`star${index}`}/>
                    else 
                        return <MdOutlineStarOutline key={`star${index}`}/>

                })
            }
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
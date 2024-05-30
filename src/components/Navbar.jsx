import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
// import Searchbar from "./Searchbar";

function Navbar(){
    const [searchState, setSearchState] = useState(false)
    const [barState, setBarState] = useState(false)

    return(
        <div className="nav-bar-container">
            <nav className="nav-bar">
                <div className="nav-logo">
                    <span><b>LEET</b>FLIX</span>
                </div>
                <ul id="nav-list" className={barState ? "nav-list" : "nav-list active"}>
                    <li id="active" className="Home">Home</li>
                    <li className="movies">Movies</li>
                    <li className="tv">TV Shows</li>
                    <li className="Trend">Trend</li>
                </ul>
                <div className="search-icon-container" >
                    <input id="search-input-nav" className={searchState ? "search-input-nav " : "search-input-nav active"} type="text" placeholder="Movie, Tv show..."/>
                    <BiSearch className="search-icon" onClick={() =>{setSearchState(!searchState)}}/>
                </div>
                <div className="sm-device" onClick={() => {setBarState(!barState)}}>
                    {barState ? <IoCloseSharp /> : <FaBars/>}
                </div>
            </nav>

        </div>
    )
}

export default Navbar;
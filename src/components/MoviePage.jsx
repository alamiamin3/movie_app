import React from "react";

import Navbar from "./Navbar";



function MoviePage(){

    return(
        <div className="movie-page-container">
            <Navbar active="movies"/>
            <div className="banner">
            </div>
            <div className="movie-page-wrapper">
                <div className="poster">
                    <picture>
                        <source type="image/jpeg" srcset="https://cdn.kinocheck.com/i/w=325/bjkn7am3r9.jpg 960w, https://cdn.kinocheck.com/i/w=375/bjkn7am3r9.jpg 1280w"/>
                        <img src="https://cdn.kinocheck.com/i/w=325/bjkn7am3r9.jpg" alt="Poster of The Beekeeper"/>
                    </picture>
                </div>
                <div className="movie-title">
                    <h1>The BeeKeeper</h1>
                </div>
                <div className="overview">
                    <h2>Overview:</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus aperiam reprehenderit dolor eum illum debitis, possimus natus reiciendis illo unde architecto qui sapiente sed neque quibusdam eius in error amet.</p>
                </div>
                <div className="cast">
                    <h2>Cast:</h2>
                    <div className="characters-container">
                        <div className="char1">
                            <img src="https://cdn.kinocheck.com/i/w=200/zpg18iwmu2.jpg" alt="char-img" />
                            <p>Jason Statham</p>
                        </div>
                        <div className="char2">
                            <img src="https://cdn.kinocheck.com/i/w=200/zpg18iwmu2.jpg" alt="char-img" />
                            <p>Jason Statham</p>
                        </div>

                    </div>
                </div>
                <div className="details">
                    <h2>Details</h2>
                    <div className="genres">
                        <p>Action & Drama</p>
                    </div>
                    <div className="release-date">
                        <p>Release:   January 12, 2024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviePage
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { MovieContext } from "../utils/MovieContext";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import apiConfig from "../api/apiConfig";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MovieCard from "./MovieCard";

function MovieSlides(){
    const firstLoad = () =>{
        if (window.screen.width > 997)
            return 5
        else if (window.screen.width < 997 && window.screen.width > 840)
            return 4
        else if (window.screen.width < 840 && window.screen.width > 610)
            return 3
        else if (window.screen.width < 610 && window.screen.width > 405)
            return 2
        else
            return 1
    }
    const movieContextData = useContext(MovieContext)
    const [slides, setSlides] = useState(firstLoad())

    const clearEvents = () =>{
        window.removeEventListener("resize", () => {setSlidesNumber()})
    }
    const setSlidesNumber = () =>{
        if (window.screen.width > 997)
            setSlides(5)
        else if (window.screen.width < 997 && window.screen.width > 840)
            setSlides(4)
        else if (window.screen.width < 840 && window.screen.width > 610)
            setSlides(3)
        else if (window.screen.width < 610 && window.screen.width > 405)
            setSlides(2)
        else
            setSlides(1)
    }
    useEffect(()=> {
        window.addEventListener("resize", () => {setSlidesNumber()})
        window.addEventListener("load", () => {setSlidesNumber()})
        return (clearEvents())
    }, [setSlidesNumber])
    return (
        <div className="movie-slide-container">
            <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={slides}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="mySwiper">
            {movieContextData.moviesArr.map((movie) => {
                // <SwiperSlide key={movie.id}>slide<SwiperSlide/>
                return <SwiperSlide key={movie.id}><MovieCard movie={movie}/></SwiperSlide>
            })}
            </Swiper>
        </div>
    );

}

export default MovieSlides
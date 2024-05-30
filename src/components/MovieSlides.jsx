import React from "react";
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
    const movieContextData = useContext(MovieContext)

    return (
        <div className="movie-slide-container">
            <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={5}
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
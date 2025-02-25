import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlay } from "react-icons/fa";
import { MdOutlineBookmarkAdd } from "react-icons/md";

export default function SimpleSlider() {
  var settings = {
    dots:true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 500,
    // cssEase: "linear"
  };
  return (
    <Slider {...settings} className="bg-red-950">
      <div className="relative   z-30  flex items-center min-h-[700px]">
          <div className="movie-detail-container flex flex-col text-white max-w-[60%] gap-2">
              <p className="font-extralight text-sm">2019</p>
              <p className="font-semibold text-xl">Avengers: Endgame</p>
              <p className="">2 hr 56 min • Action • Drama</p>
              <p className="mt-3 font-light">Batman is called to intervene when the mayor of Gotham City is murdered. Soon, his investigation leads him to uncover a web of corruption, linked to his own dark past.</p>
              <div className="movie-buttons-container flex items-center gap-4 text-sm mt-4">
                  <div className="bg-primary py-[10px] px-[22px] rounded-3xl  text-cente2 cursor-pointer hover:opacity-70 transition-all duration-100 ">
                      View Details
                  </div>
                  <div className="bg-glass py-[10px] px-[22px] rounded-3xl  text-center flex items-center gap-2 cursor-pointer hover:opacity-70 transition-all duration-100 ">
                      <FaPlay/>
                      <p>Watch Trailer</p>
                  </div>
                  <div className="border border-white/60 py-[10px] px-[22px] rounded-3xl  text-center flex items-center gap-2 cursor-pointer hover:opacity-70 transition-all duration-100 ">
                      <MdOutlineBookmarkAdd className="text-lg"/>
                      Add to Wishlist
                  </div>
              </div>
          </div>
      </div>
      <div className="bg-green-700">
        <h3>2</h3>
      </div>
      <div className="bg-yellow-300">
        <h3>3</h3>
      </div>
      <div className="bg-black">
        <h3>4</h3>
      </div>
      <div className="bg-blue-700">
        <h3>5</h3>
      </div>
      <div className="bg-purple-600">
        <h3>6</h3>
      </div>
    </Slider>
  );
}
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { FaPlay } from "react-icons/fa";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/navigation';
import { AppContext } from './Contexts/AppContext';
import { useContext, useEffect, useState } from 'react';
import { TMDB_IMAGES_BASE } from '../utils/axiosInstance';
const SwiperSection = () => {

    const AppContextConsumer = useContext(AppContext)
    if (!AppContextConsumer)
        throw new Error("error!")
    const {popularMovies} = AppContextConsumer
    const [bg, setbg] = useState<string>('')
    useEffect(()=>{
        setbg(popularMovies[0].backdrop_path)
    },[])
    return (
            // <div className="head-section absolute z-20 text-black py-4 bg-[url(banner_movie.png)] bg-cover bg-center bg-no-repeat min-h-[800px] top-0 left-0 w-full">
            //     <div className="fixed inset-0 bg-gradient-to-r from-black via-white/0 to-white/0 z-10"></div>
            //     <div className="fixed inset-0 bg-black/60 z-20"></div>
            //     <div className="container mx-auto h-full ">
            //         <div className="relative   z-30  flex items-center min-h-[700px]">
            //             <div className="movie-detail-container flex flex-col text-white max-w-[60%] gap-2">
            //                 <p className="font-extralight text-sm">2019</p>
            //                 <p className="font-semibold text-xl">Avengers: Endgame</p>
            //                 <p className="">2 hr 56 min • Action • Drama</p>
            //                 <p className="mt-3 font-light">Batman is called to intervene when the mayor of Gotham City is murdered. Soon, his investigation leads him to uncover a web of corruption, linked to his own dark past.</p>
            //                 <div className="movie-buttons-container flex items-center gap-4 text-sm mt-4">
            //                     <div className="bg-primary py-[10px] px-[22px] rounded-3xl  text-cente2 cursor-pointer hover:opacity-70 transition-all duration-100 ">
            //                         View Details
            //                     </div>
            //                     <div className="bg-glass py-[10px] px-[22px] rounded-3xl  text-center flex items-center gap-2 cursor-pointer hover:opacity-70 transition-all duration-100 ">
            //                         <FaPlay/>
            //                         <p>Watch Trailer</p>
            //                     </div>
            //                     <div className="border border-white/60 py-[10px] px-[22px] rounded-3xl  text-center flex items-center gap-2 cursor-pointer hover:opacity-70 transition-all duration-100 ">
            //                         <MdOutlineBookmarkAdd className="text-lg"/>
            //                         Add to Wishlist
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        <div style={{ backgroundImage: `url(${TMDB_IMAGES_BASE + bg})` }} className={`relative  text-black py-4  bg-cover bg-center bg-no-repeat top-0 left-0 w-full h-[800px]`}>
            <div className="fixed inset-0 bg-gradient-to-r from-black via-white/0 to-white/0 "></div>
            <div className="fixed inset-0 bg-black/60 "></div>
        <Swiper
            modules={[Navigation]} // Enable navigation module
            navigation
            className='z-30 '
            onSlideChange={()=>setbg(popularMovies[1].backdrop_path)}
            loop
        >
            <SwiperSlide className="z-50">
                <div style={{ backgroundImage: `url(${TMDB_IMAGES_BASE + bg})` }} className={`relative  text-black py-4  bg-cover bg-center bg-no-repeat top-0 left-0 w-full h-[800px]`}>
                    <div className="container mx-auto h-full ">
                        <div className="relative flex items-center min-h-[700px]">
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
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="z-50">
                    <div className="container mx-auto h-full ">
                        <div className="relative flex items-center min-h-[700px]">
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
                    </div>
            </SwiperSlide>
        </Swiper>
        </div>
    );
};

export default SwiperSection;

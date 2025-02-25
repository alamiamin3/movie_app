import NavBar from "../Layout/NavBar"
import { FaPlay } from "react-icons/fa";
import { MdOutlineBookmarkAdd } from "react-icons/md";


const Login = ()=>{
    return(
        <div className="min-h-[100vh] bg-black font-poppins  relative w-full  ">
            <div className="head-section relative z-20 text-black py-4 bg-[url(banner_movie.png)] bg-cover bg-center bg-no-repeat min-h-[800px] ">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-white/0 to-white/0 z-10"></div>
                <div className="absolute inset-0 bg-black/60 z-20"></div>
                <div className="max-w-screen-lg mx-auto h-full ">
                    <NavBar />
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
                </div>
            </div>
        </div>

    )
}

export default Login
import { useEffect } from "react";
import NavBar from "../Layout/NavBar"
import { FaPlay } from "react-icons/fa";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import tmdbApi ,{TMDB_IMAGES_BASE} from "../../utils/axiosInstance";
import SwiperSection from "../Swiper";


const Login = ()=>{
    

    return(
        <div className="min-h-[100vh] bg-black font-poppins  relative w-full ">
            <NavBar />
            <SwiperSection/>
        </div>

    )
}

export default Login
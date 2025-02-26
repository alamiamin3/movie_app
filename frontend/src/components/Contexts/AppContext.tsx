import React, { createContext, ReactNode, useEffect, useState } from "react";
import { Movie } from "../../utils/interfaces";
import tmdbApi from "../../utils/axiosInstance";
interface AppContextInterface{
    popularMovies: Movie[];
    setPopularMovies : React.Dispatch<React.SetStateAction<Movie[]> >;
}


export const AppContext = createContext<AppContextInterface | undefined>(undefined)

const AppContextProvider : React.FC<{children : ReactNode}> = ({children}) =>{
    const [popularMovies, setPopularMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const fetchPopularMovies = async ()=>{
        try{
            const req = {
                url: '/movie/popular'
            }
            const resp = await tmdbApi(req)
            const data = resp.data.results as Movie[]
            console.log(data)
            setPopularMovies(data)
            setLoading(false)
        }
        catch (err){
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchPopularMovies()
    },[])
    return (
        <AppContext.Provider value={{popularMovies, setPopularMovies}}>
            {!loading ? children : <div>Loading...</div>}
        </AppContext.Provider>
    )
}

export default AppContextProvider
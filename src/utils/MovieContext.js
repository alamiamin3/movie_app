import { createContext } from "react";

export const MovieContext = createContext({
    title: "",
    posterPath: "",
    posterPath500: "",
    overvView: "",
    rating: "",
    moviesArr: [],
    setMovieContextData: () =>{}
})
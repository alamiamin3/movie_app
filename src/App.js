
import './App.css';
import HomeSection from './components/HomeSection';
import { MovieContext } from './utils/MovieContext';
import { useEffect, useState } from 'react';
import apiConfig from './api/apiConfig';
import MoviesCategories from "./components/MoviesCategories";
import 'swiper/css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MoviePage from './components/MoviePage';


function App() {
  const [movieList, setMovieList] = useState([])
  const [MovieContextData, setMovieContextData] = useState({})
  const [loading, setLoading] = useState("true")
  const getMovie = async () =>{
      await fetch(`${apiConfig.baseUrl}movie/popular?language=en-US&page=1&api_key=${apiConfig.apiKey}`)
      .then(response => response.json())
      .then(response => {
        setLoading(false)
        setMovieList(response.results)
        setMovieContextData({
          title: response.results[0].title,
          posterPath: apiConfig.originalImage(response.results[0].poster_path),
          posterPath500: apiConfig.smallImage(response.results[0].poster_path),
          overvView: response.results[0].overview,
          rating: response.results[0].vote_average,
          moviesArr: response.results
        })})
      .catch(err => console.error(err));
  }
    
    useEffect(()=>{
      getMovie()
    },[])
  if (loading)
    return(
      <h1>Loading...</h1>
    )
  
  return (
    <MovieContext.Provider value={{...MovieContextData, setMovieContextData}}>
      {/* <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movies' element={<Movies/>}></Route>
      </Routes> */}
      <MoviePage/>
      {/* <HomeSection/> */}
      {/* <MoviesCategories/> */}
     </MovieContext.Provider>
  );
}
export default App;


import './App.css';
import HomeSection from './components/HomeSection';
import { MovieContext } from './utils/MovieContext';
import { useEffect, useState } from 'react';
import apiConfig from './api/apiConfig';

import 'swiper/css';
function App() {
  const [movieList, setMovieList] = useState([])
  const [MovieContextData, setMovieContextData] = useState({})
  const [loading, setLoading] = useState("true")
  const getMovie = async () =>{
      await fetch(`${apiConfig.baseUrl}discover/movie?api_key=${apiConfig.apiKey}`)
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
      
      <HomeSection/>
     </MovieContext.Provider>
  );
}
export default App;

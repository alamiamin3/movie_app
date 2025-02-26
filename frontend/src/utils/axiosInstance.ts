import axios from "axios";

const TMDB_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN; 
const TMDB_BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
export const TMDB_IMAGES_BASE = 'https://image.tmdb.org/t/p/original';

const tmdbApi = axios.create({
    baseURL: TMDB_BASE_URL,
    params :{
        language: 'en-US'
    },
    headers: {
        "Authorization": `Bearer ${TMDB_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
    },
});

export default tmdbApi;

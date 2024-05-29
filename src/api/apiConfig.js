const apiConfig = {
    baseUrl:  "https://api.themoviedb.org/3/",
    apiKey: 'ceff9570368ceb46e154ffcf51190e65',
    originalImage: (imagePath) => `https://image.tmdb.org/t/p/original${imagePath}`,
    smallImage: (imagePath) => `https://image.tmdb.org/t/p/w500${imagePath}`,

}

export default apiConfig
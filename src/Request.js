const API_KEY="66d8084bd5b9807e3edcd85f30ca1a16";
const imageBase = "https://image.tmdb.org/t/p/w500";
const imageLargeBase = "https://image.tmdb.org/t/p/w1280";
const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

const fetchMovie = (id) => {
    return `/movie/${id}?api_key=${API_KEY}&append_to_response=videos,release_dates`
  }
  const fetchTV = (id) => {
    return `/tv/${id}?api_key=${API_KEY}&append_to_response=videos,content_ratings`
  }
  const fetchSearchString = (query) => {
    let queryString = encodeURIComponent(query);
    return `/search/multi?api_key=${API_KEY}&language=en-US&query=${queryString}&page=1&include_adult=false`
  }
  const fetchRecommendedMovies = (id) => {
    return `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
  }
  const fetchRecommendedTV = (id) => {
    return `/tv/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
  }
  const fetchSimilarMovies = (id) => {
    return `/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`
  }
  const fetchSimilarTV = (id) => {
    return `/tv/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`
  }
  
  export { imageLargeBase, imageBase, fetchMovie, fetchTV, fetchSearchString, fetchRecommendedMovies, fetchRecommendedTV, fetchSimilarMovies, fetchSimilarTV };
 
export default requests;

//https://api.themoviedb.org/3/trending/all/week?api_key=66d8084bd5b9807e3edcd85f30ca1a16&language=en-US
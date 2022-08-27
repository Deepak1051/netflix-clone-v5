const APIKEY = "8a2705651c885ab1d285fc80ee1021c5"

const requests = {
  fetchTopRatedTv: `/tv/top_rated?api_key=${APIKEY}&language=en-US`,
  // fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_network=213&adult=true`,
  fetchTopRatedMovie: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchPopularMovie: `/movie/popular?api_key=${APIKEY}&language=en-US`,
  fetchPopularTv: `/tv/popular?api_key=${APIKEY}&language=en-US`,
  // fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  // fetchComedyMovies: `/discover/tv?api_key=${APIKEY}&with_genres=35&adult=true`,
  // fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
  fetchPeople: `/trending/person/week?api_key=${APIKEY}`,
  // fetchMovieDetails:`/movie/453395?api_key=8a2705651c885ab1d285fc80ee1021c5&language=en-US`
}

export default requests
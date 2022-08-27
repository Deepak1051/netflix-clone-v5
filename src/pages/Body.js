import '../App.css';

import Row from './Row';
import requests from '../request/requests';
import Banner from "../components/Banner"

function Body() {
  return (
    <div>
      <Banner />

      {/* <Row title="NETFLIX ORIGINALS" apiUrl={requests.fetchNetflixOriginals}
        isLargeRow
      /> */}
      <Row title="Trending Now Movies" apiUrl={requests.fetchPopularMovie} isLargeRow isMovie />
      <Row title="Top Rated TV" apiUrl={requests.fetchPopularTv} isLargeRow />
      <Row title="Top Rated Movies" apiUrl={requests.fetchTopRatedMovie} isMovie isLargeRow />
      {/* <Row title="Comedy Movies" apiUrl={requests.fetchComedyMovies} /> */}
      <Row title="Top Rated TV" apiUrl={requests.fetchTopRatedTv} isLargeRow />
      {/* <Row title="Romace Movies" apiUrl={requests.fetchRomanceMovies} /> */}
      {/* <Row title="Documentaries" apiUrl={requests.fetchDocumenteries} /> */}
      {/* <Row title="Person" apiUrl={requests.fetchPeople} /> */}
    </div>
  )
}

export default Body
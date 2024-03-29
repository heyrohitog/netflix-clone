import React from "react";
import "./HomeScreen.css";
import Banner from "./Banner";
import Nav from "./Nav";
import Row from "./Row";
import requests from "./Requests";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner/>

      <Row 
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row 
        title='Trending Now'
        fetchUrl={requests.fetchTrending}
      />
      <Row 
        title='Action Movies'
        fetchUrl={requests.fetchActionMovies}
      />
      <Row 
        title='Comedy Movies'
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row 
        title='Horror Movies'
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row 
        title='Romance Movies'
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row 
        title='Documentaries'
        fetchUrl={requests.fetchComedyMovies}
      />
    </div>
  );
}

export default HomeScreen;

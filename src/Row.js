import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import ScrollContainer from "react-indiana-drag-scroll";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title = "Title", fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      console.table(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const youtubeOpts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const movieClicked = (moviename) => {
    console.log(moviename);
    if (trailerUrl !== "") setTrailerUrl("");
    else {
      movieTrailer(moviename)
        .then((url) => {
          const urlParamV = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParamV.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <ScrollContainer className="row__posters">

      
      {/* <div className="row__posters"> */}
          
        {movies.map((movie) => (
            (isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (<img
              onClick={() =>
                movieClicked(movie.name || movie.title || movie.orginal_name)
              }
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"} `}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />)
            
          // '/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg'
          
        )}
      {/* </div> */}
      </ScrollContainer>
      {trailerUrl !== "" && <YouTube videoId={trailerUrl} opts={youtubeOpts} />}
    </div>
  );
}

export default Row;
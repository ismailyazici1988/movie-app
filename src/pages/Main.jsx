import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&query`;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const getMovie = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getMovie(FEATURED_API);
  }, []);

  return (
    <div className="d-flex justify-content-center flex-wrap">
      {loading ? (
        <div className="snipper-border text-primary m-5" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        movies?.map((movie) => <MovieCard key={movie.id} {...movie} />)
      )}
    </div>
  );
};

export default Main;

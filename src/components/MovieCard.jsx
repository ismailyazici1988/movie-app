import React from "react";

const IMG_API = "https:/image.tmdb.org/t/p/w1280";
const defaultImage = "https://unsplash.com/photos/2uwFEAGUm6E";

const MovieCard = ({ poster_path, title, overview, vote_average, id }) => {
  const setVoteClass = (vote) => {
    if (vote > 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <div className="movie">
      <img
        loading="lazy"
        src={poster_path ? IMG_API + poster_path : defaultImage}
        alt="movie-card"
      />
      <div className="d-flex align-items-baseline justify-content-between">
        <h5>{title}</h5>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;

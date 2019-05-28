import React from "react";
import PropTypes from "prop-types";
import MovieItem from "./MovieItem";

const MoviesList = props => {
  const { movies, handleClick } = props;

  return (
    <div className="movie-list-container">
      {movies.map(movie => {
        return <MovieItem movie={movie} handleClick={handleClick} />;
      })}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default MoviesList;

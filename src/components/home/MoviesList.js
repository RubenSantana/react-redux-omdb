import React from "react";
import PropTypes from "prop-types";
import MovieItem from "./MovieItem";

const MoviesList = props => {
  const { movies } = props;

  return (
    <div className="movie-list-container">
      {movies.map(movie => {
        return <MovieItem key={movie.imdbID} movie={movie} />;
      })}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MoviesList;

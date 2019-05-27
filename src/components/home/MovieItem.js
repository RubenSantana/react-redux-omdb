import React from "react";
import PropTypes from "prop-types";

const MovieItem = props => {
  const { movie, handleClick } = props;

  return (
    <div key={movie.imdbID} onClick={handleClick(movie.imdbID)}>
      {movie.Title + " (" + movie.Year + ") (" + movie.Type + ")"}
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default MovieItem;

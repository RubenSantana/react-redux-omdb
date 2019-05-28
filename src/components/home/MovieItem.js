import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieItem = props => {
  const { movie, handleClick } = props;

  return (
    <Link to={"/movieDetails/"}>
      <div key={movie.imdbID} onClick={() => handleClick(movie.imdbID)}>
        {movie.Title + " (" + movie.Year + ") (" + movie.Type + ")"}
      </div>
    </Link>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default MovieItem;

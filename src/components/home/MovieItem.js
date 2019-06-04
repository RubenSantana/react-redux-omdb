import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieItem = props => {
  const { movie } = props;

  return (
    <Link to={"/movieDetails/" + movie.imdbID}>
      <div key={movie.imdbID}>
        {movie.Title + " (" + movie.Year + ") (" + movie.Type + ")"}
      </div>
    </Link>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieItem;

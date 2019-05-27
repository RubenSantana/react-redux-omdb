import React from "react";
import PropTypes from "prop-types";
import MovieItem from "./MovieItem";
import { connect } from "react-redux";

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

/*
function mapStateToProps(state) {
  return {
    searchResponse: state.searchResponse
  };
}

const mapDispatchToProps = {
  displayMovieDetails: movieDetailsActions.displayMovieDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList);
 */

export default MoviesList;

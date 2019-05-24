import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as movieDetailsActions from "../../redux/actions/movieDetailsActions";
import PropTypes from "prop-types";

function MovieDetailsPage(props) {
  //const { movieDetails } = this.props;
  return (
    <>
      <h2>movie.title</h2>
    </>
  );
}

MovieDetailsPage.propTypes = {
  movieDetails: PropTypes.object.isRequired,
  displayMovieDetails: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    movieDetails: state.movieDetails
  };
}

const mapDispatchToProps = {
  displayMovieDetails: movieDetailsActions.displayMovieDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetailsPage);

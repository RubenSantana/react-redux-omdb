import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as movieDetailsActions from "../../redux/actions/movieDetailsActions";

const MovieDetailsPage = ({ movieDetails }) => {
  return (
    <>
      <div className="vital">
        <div id="quicklinksBar" />
        <div className="title-block">
          <h2>
            {movieDetails.Title} ({movieDetails.Year})
          </h2>
        </div>
        <div className="slate-wrapper" />
      </div>

      <div className="plot-summary-wrapper">
        <div className="plot-summary">
          <div className="summary-text" />
          <div className="credit-summary-item" />
          <div className="credit-summary-item" />
          <div className="credit-summary-item" />
        </div>
        <div className="titleReviewBar">
          <div className="titleReviewBarItem">
            <div className="titleReviewBarSubItem">
              <div />
              <div />
            </div>
          </div>
          <div className="divider" />
          <div className="titleReviewBarItem">
            <div>Reviews</div>
          </div>
        </div>
      </div>
    </>
  );
};

MovieDetailsPage.propTypes = {
  movieDetails: PropTypes.object.isRequired
  //displayMovieDetails: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    movieDetails: state.movieDetails
  };
}

const mapDispatchToProps = {
  //displayMovieDetails: movieDetailsActions.displayMovieDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetailsPage);

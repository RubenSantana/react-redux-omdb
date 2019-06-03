import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./movieDetailsPage.css";
import * as movieDetailsActions from "../../redux/actions/movieDetailsActions";
import Spinner from "../common/Spinner";

function MovieDetailsPage({
  movieDetails,
  displayMovieDetails,
  loading,
  match
}) {
  const movieID = match.params.id;

  useEffect(() => {
    displayMovieDetails(movieID);
  }, []);

  debugger;

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="vital">
            <div id="quicklinksBar" className="subnav">
              <div id="quicklinksMainSection">
                <a href={"#plot-bookmark"} className="quicklink">
                  PLOT
                </a>
                <span className="ghost">|</span>
                <a href={"#director-bookmark"} className="quicklink">
                  DIRECTOR
                </a>
                <span className="ghost">|</span>
                <a href={"#writer-bookmark"} className="quicklink">
                  WRITER
                </a>
                <span className="ghost">|</span>
                <a href={"#stars-bookmark"} className="quicklink">
                  STARS
                </a>
              </div>
            </div>

            <div className="title-block">
              <div className="title-bar-wrapper">
                <div className="ratings-wrapper">
                  <div className="imdbRating">
                    <div className="ratingValue">
                      <strong
                        title={
                          movieDetails.imdbRating +
                          " based on " +
                          movieDetails.imdbVotes +
                          " user ratings"
                        }
                      >
                        <span>{movieDetails.imdbRating}</span>
                      </strong>
                      <span className="grey">/10</span>
                    </div>
                    <span className="small">{movieDetails.imdbVotes}</span>
                  </div>
                </div>
                <div className="titleBar">
                  <div className="title-wrapper">
                    <h1>
                      {movieDetails.Title} &nbsp;
                      <span id="titleYear">({movieDetails.Year})</span>
                    </h1>
                    <div className="subtext">
                      {movieDetails.Rated}
                      <span className="ghost">|</span>
                      <time>{movieDetails.Runtime}</time>
                      <span className="ghost">|</span>
                      {movieDetails.Genre}
                      <span className="ghost">|</span>
                      {movieDetails.Released}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="slate-wrapper">
              <div className="poster">
                <img
                  alt={movieDetails.Title + " Poster"}
                  title={movieDetails.Title + " Poster"}
                  src={movieDetails.Poster}
                />
              </div>
              <div className="summary-text" id="plot-bookmark">
                {movieDetails.Plot}
              </div>
            </div>
          </div>

          <div className="plot-summary-wrapper">
            <div className="plot-summary">
              <div className="credit-summary-item" id="director-bookmark">
                <h4 className="inline">Director:</h4>
                {movieDetails.Director}
              </div>
              <div className="credit-summary-item" id="writer-bookmark">
                <h4 className="inline">Writer:</h4>
                {movieDetails.Writer}
              </div>
              <div className="credit-summary-item" id="stars-bookmark">
                <h4 className="inline">Stars:</h4>
                {movieDetails.Actors}
              </div>
            </div>
            <div className="titleReviewBar">
              <div className="titleReviewBarItem">
                <div className="imdbScore score-favorable titleReviewBarSubItem">
                  <span>{movieDetails.imdbRating}</span>
                </div>
                <div className="titleReviewBarSubItem">
                  <div>IMDb Score</div>
                  <div>
                    <span className="subText">
                      From
                      <a href="http://www.imdb.com" target="_blank">
                        imdb.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="divider" />
              <div className="titleReviewBarItem">
                <div className="metacriticScore score-favorable titleReviewBarSubItem">
                  <span>{movieDetails.Metascore}</span>
                </div>
                <div className="titleReviewBarSubItem">
                  <div>Metascore</div>
                  <div>
                    <span className="subText">
                      From
                      <a href="http://www.metacritic.com" target="_blank">
                        metacritic.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="divider" />
              <div className="titleReviewBarItem">
                <div className="rottentomatoesScore score-favorable titleReviewBarSubItem">
                  <span>
                    {
                      movieDetails.Ratings.filter(
                        site => site.Source === "RottenTomatoes"
                      ).Value
                    }
                  </span>
                </div>
                <div className="titleReviewBarSubItem">
                  <div>Rotten Tomatoes score</div>
                  <div>
                    <span className="subText">
                      From
                      <a href="http://www.rottentomatoes.com" target="_blank">
                        rottentomatoes.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

MovieDetailsPage.propTypes = {
  movieDetails: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  displayMovieDetails: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    movieDetails: state.movieDetails,
    loading: state.apiCallsInProgress > 0
  };
}

const mapDispatchToProps = {
  displayMovieDetails: movieDetailsActions.displayMovieDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetailsPage);

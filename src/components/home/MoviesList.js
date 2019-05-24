import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as movieDetailsActions from "../../redux/actions/movieDetailsActions";
import { connect } from "react-redux";

const MoviesList = props => {
  const { movies } = props;

  const handleClick = movieId => {
    this.props.displayMovieDetails(movieId).catch(error => {
      alert("Display movie details failed." + error);
    });
  };

  return (
    <div className="movie-list-container">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody className="movie-list">
          {movies.map(movie => {
            return (
                //<MovieItem movie={movie} />
                //CRIAR COMPONENT MOVIEITEM COM DIV ONCLICK PARA CHAMAR O HANDLECLICK ACIMA DEFINIDO
              <tr key={movie.imdbID}>
                <td>
                  <Link to={"/movieDetails"} movie={movie}>
                    {movie.Title}
                  </Link>
                </td>
                <td>
                  <Link to={"/movieDetails"} movie={movie}>
                    {movie.Year}
                  </Link>
                </td>
                <td>
                  <Link to={"/movieDetails"} movie={movie}>
                    {movie.Type}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

MoviesList.propTypes = {
  searchResponse: PropTypes.object.isRequired,
  displayMovieDetails: PropTypes.func.isRequired
};

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

/*
MoviesList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MoviesList;
*/

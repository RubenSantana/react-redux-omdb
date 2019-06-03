import React from "react";
import { connect } from "react-redux";
import * as movieActions from "../../redux/actions/movieActions";
import * as movieDetailsActions from "../../redux/actions/movieDetailsActions";
import MoviesList from "./MoviesList";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class HomePage extends React.Component {
  state = {
    searchByTitle: ""
  };

  handleChange = event => {
    this.setState({
      searchByTitle: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.loadMovies(this.state.searchByTitle).catch(error => {
      alert("Loading movies failed. " + error);
    });
    this.setState({
      searchByTitle: ""
    });
  };

  render() {
    return (
      <div className="homepage-content">
        <h1>OMDb search page</h1>
        <p>Online movie search with React and Redux</p>

        <div className="jumbotron">
          <form
            className="form-search form-inline"
            onSubmit={this.handleSubmit}
          >
            <div className="input-append">
              <input
                type="text"
                className="movie-search"
                placeholder="Search..."
                onChange={this.handleChange}
                value={this.state.searchByTitle}
              />
              <input type="submit" value="Search" />
            </div>
          </form>
        </div>
        {this.props.searchResponse.Search && (
          <MoviesList movies={this.props.searchResponse.Search} />
        )}
      </div>
    );
  }
}

HomePage.propTypes = {
  searchResponse: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    searchResponse: state.searchResponse
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadMovies: bindActionCreators(movieActions.loadMovies, dispatch),
      displayMovieDetails: bindActionCreators(
        movieDetailsActions.displayMovieDetails,
        dispatch
      )
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

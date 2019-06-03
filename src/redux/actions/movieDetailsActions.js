import * as types from "./actionTypes";
import { getMovieById } from "../../api/moviesApi";
import { beginApiCall } from "./apiStatusActions";

export function displayMovieDetailsSuccess(movieDetails) {
  return {
    type: types.DISPLAY_MOVIE_DETAILS_SUCCESS,
    movieDetails
  };
}

export function displayMovieDetails(movieId) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return getMovieById(movieId)
      .then(movieDetails => {
        dispatch(displayMovieDetailsSuccess(movieDetails));
      })
      .catch(error => {
        throw error;
      });
  };
}

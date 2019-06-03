import * as types from "./actionTypes";
import { getMovies } from "../../api/moviesApi";
import { beginApiCall } from "./apiStatusActions";

export function loadMovieSuccess(searchResponse) {
  return {
    type: types.LOAD_MOVIES_SUCCESS,
    searchResponse
  };
}

export function loadMovies(searchTerm) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return getMovies(searchTerm)
      .then(searchResponse => {
        dispatch(loadMovieSuccess(searchResponse));
      })
      .catch(error => {
        throw error;
      });
  };
}

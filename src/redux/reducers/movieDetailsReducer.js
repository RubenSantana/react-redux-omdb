import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function movieDetailsReducer(
  state = initialState.movieDetails,
  action
) {
  switch (action.type) {
    case types.DISPLAY_MOVIE_DETAILS_SUCCESS:
      return action.movieDetails;
    default:
      return state;
  }
}

import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function movieReducer(
  state = initialState.searchResponse,
  action
) {
  switch (action.type) {
    case types.LOAD_MOVIES_SUCCESS:
      return action.searchResponse;
    default:
      return state;
  }
}

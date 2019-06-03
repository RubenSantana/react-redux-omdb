import { combineReducers } from "redux";
import searchResponse from "./movieReducer";
import movieDetails from "./movieDetailsReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  searchResponse,
  movieDetails,
  apiCallsInProgress
});

export default rootReducer;

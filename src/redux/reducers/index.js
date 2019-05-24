import { combineReducers } from "redux";
import searchResponse from "./movieReducer";
import movieDetails from "./movieDetailsReducer";

const rootReducer = combineReducers({
  searchResponse,
  movieDetails
});

export default rootReducer;

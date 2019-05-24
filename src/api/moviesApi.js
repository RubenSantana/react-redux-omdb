import { handleResponse, handleError } from "./apiUtils";
import axios from "axios";

const baseUrl = "http://www.omdbapi.com/?apikey=8765e4ae";

export function getMovies(searchTerm) {
  const fullUrl = baseUrl + "&s=" + searchTerm;
  return axios
    .get(fullUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getMovieById(movieId) {
  return axios
    .get(baseUrl + "&i=" + movieId)
    .then(handleResponse)
    .catch(handleError);
}

import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const apiKey = "5550ba12778a5b6e9ff1898575345f7e";
export const fetchTrendMovies = () =>
  axios
    .get(`trending/all/day?api_key=${apiKey}`)
    .then((res) => res.data.results)
    .catch(console.log);

export const fetchMovieInfo = (movieId) =>
  axios
    .get(`movie/${movieId}?api_key=${apiKey}&language=en-US`)
    .then((res) => res.data)
    .catch(() => "");
export const fetchCast = (movieId) =>
  axios
    .get(`movie/${movieId}/credits?api_key=${apiKey}`)
    .then((res) => res.data.cast)
    .catch(console.log);
export const fetchReview = (movieId) =>
  axios
    .get(`movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`)
    .then((res) => res.data.results)
    .catch(console.log);
export const fetchSearchMovies = (word) =>
  axios
    .get(
      `search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${word}`
    )
    .then((res) => res.data.results)
    .catch(console.log);

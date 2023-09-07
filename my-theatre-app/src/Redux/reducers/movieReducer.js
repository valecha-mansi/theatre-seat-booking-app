import {
    GET_MOVIES,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_FAIL,
    GET_MOVIE_DETAILS,
    GET_MOVIE_DETAILS_SUCCESS,
    GET_MOVIE_DETAILS_FAIL,
  } from "../actionTypes";
  
  const initialState = {
    movies: [],
    movie: {},
    loadingMovies: false,
    loadingMoviesDetails: false,
    error: {
      message: "",
    },
  };
  
  const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_MOVIES:
        state = { ...state, loadingMovies: true };
        break;
      case GET_MOVIES_SUCCESS:
        state = { ...state, movies: action.payload, loadingMovies: false };
        break;
      case GET_MOVIES_FAIL:
        state = {
          ...state,
          error: {
            message: "Error",
          },
          loadingMovies: false,
        };
        break;
      case GET_MOVIE_DETAILS:
        state = { ...state, loadingMovieDetails: true };
        break;
      case GET_MOVIE_DETAILS_SUCCESS:
        state = { ...state, movie: action.payload[0], loadingMovieDetails: false };
        break;
      case GET_MOVIE_DETAILS_FAIL:
        state = {
          ...state,
          error: {
            message: "Error",
          },
          loadingMovieDetails: false,
        };
        break;
      default:
        state = { ...state };
        break;
    }
    return state;
  };
  
  export default MovieReducer;
  
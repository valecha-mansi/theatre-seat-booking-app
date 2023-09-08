import {
    GET_MOVIES,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_FAIL,
    GET_MOVIE_DETAILS,
    GET_MOVIE_DETAILS_SUCCESS,
    GET_MOVIE_DETAILS_FAIL,
  } from "./actionTypes";
  
  export const getMovies = () => {
    return {
      type: GET_MOVIES,
    };
  };
  
  export const getMoviesSuccess = (movies) => {
    return {
      type: GET_MOVIES_SUCCESS,
      payload: movies,
    };
  };
  
  export const getMoviesFail = (error) => {
    return {
      type: GET_MOVIES_FAIL,
      payload: error,
    };
  };
  
  export const getMovieDetails = (id) => {
    return {
      type: GET_MOVIE_DETAILS,
      payload: id,
    };
  };
  
  export const getMovieDetailsSuccess = (movies) => {
    return {
      type: GET_MOVIE_DETAILS_SUCCESS,
      payload: movies,
    };
  };
  
  export const getMovieDetailsFail = (error) => {
    return {
      type: GET_MOVIE_DETAILS_FAIL,
      payload: error,
    };
  }
  
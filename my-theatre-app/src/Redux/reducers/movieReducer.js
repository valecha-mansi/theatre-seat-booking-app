import {
    GET_MOVIES,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_FAIL,
    // GET_POST_DETAILS,
    // GET_POST_DETAILS_SUCCESS,
    // GET_POST_DETAILS_FAIL,
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
    //   case GET_POST_DETAILS:
    //     state = { ...state, loadingPostDetails: true };
    //     break;
    //   case GET_POST_DETAILS_SUCCESS:
    //     state = { ...state, post: action.payload[0], loadingPostDetails: false };
    //     break;
    //   case GET_POST_DETAILS_FAIL:
    //     state = {
    //       ...state,
    //       error: {
    //         message: "Error",
    //       },
    //       loadingPostDetails: false,
    //     };
    //     break;
      default:
        state = { ...state };
        break;
    }
    return state;
  };
  
  export default MovieReducer;
  
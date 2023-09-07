import { takeLatest, put, call } from "redux-saga/effects";

import {
  getMoviesSuccess,
  getMoviesFail,
  getMovieDetailsSuccess,
  getMovieDetailsFail,
} from "./action";

import { GET_MOVIES, GET_MOVIE_DETAILS } from "./actionTypes";
import { getMoviesListApi, getMovieDetailsApi} from "./services";

function* onGetMovies() {
  try {
    const response = yield call(getMoviesListApi);
    yield put(getMoviesSuccess(response));
  } catch (error) {
    yield put(getMoviesFail(error.response));
  }
}

function* onGetMovieDetails({ payload: id }) {
  try {
    const response = yield call(getMovieDetailsApi, id);
    console.log("Response--", response);
    yield put(getMovieDetailsSuccess(response));
  } catch (error) {
    yield put(getMovieDetailsFail(error.response));
  }
}

function* MovieSaga() {
  yield takeLatest(GET_MOVIES, onGetMovies);
  yield takeLatest(GET_MOVIE_DETAILS, onGetMovieDetails);
}

export default MovieSaga;
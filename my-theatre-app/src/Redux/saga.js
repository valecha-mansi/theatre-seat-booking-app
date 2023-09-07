import { takeLatest, put, call } from "redux-saga/effects";

import {
  getMoviesSuccess,
  getMoviesFail,
} from "./action";

import { GET_MOVIES } from "./actionTypes";
import { getMoviesList } from "./services";

function* onGetMovies() {
  try {
    const response = yield call(getMoviesList);
    yield put(getMoviesSuccess(response));
  } catch (error) {
    yield put(getMoviesFail(error.response));
  }
}

// function* onGetPostDetails({ payload: id }) {
//   try {
//     const response = yield call(getPostDetails, id);
//     yield put(getPostDetailsSuccess(response));
//   } catch (error) {
//     yield put(getPostDetailsFail(error.response));
//   }
// }

function* MovieSaga() {
  yield takeLatest(GET_MOVIES, onGetMovies);
//   yield takeLatest(GET_POST_DETAILS, onGetPostDetails);
}

export default MovieSaga;
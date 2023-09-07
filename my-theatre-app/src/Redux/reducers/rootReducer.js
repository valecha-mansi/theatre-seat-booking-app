import { combineReducers } from "@reduxjs/toolkit";

import MovieReducer from "./movieReducer";

const rootReducer = combineReducers({
    MovieReducer,
});

export default rootReducer;
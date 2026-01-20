import { configureStore } from "@reduxjs/toolkit";
import moviReducer from "./movieslice";

export const store = configureStore({
  reducer: {
    movies: moviReducer,
  },
});

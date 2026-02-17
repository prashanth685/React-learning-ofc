import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../app/counterslice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

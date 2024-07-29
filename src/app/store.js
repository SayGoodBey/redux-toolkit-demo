import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  devTools: false,
  enhancers: [],
  reducer: {
    counter: counterReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
// import bookReducer from "./bookSlice";

const reducer = {
  //    books: bookReducer,
};

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

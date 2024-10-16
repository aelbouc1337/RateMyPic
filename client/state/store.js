import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice"; // RTK Query API Slice

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Add RTK Query middleware
});

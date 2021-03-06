import { configureStore } from "@reduxjs/toolkit";
import { cryptoNewsApi } from "../services/cryptoNewsApi.js";

export const store = configureStore({
  reducer: {
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoNewsApi.middleware),
});

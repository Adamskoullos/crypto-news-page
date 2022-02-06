import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "x-rapidapi-host": process.env.REACT_APP_CRYPTO_NEWS_HOST,
  "x-rapidapi-key": process.env.REACT_APP_CRYPTO_NEWS_API_KEY,
};

const baseUrl = process.env.REACT_APP_CRYPTO_NEWS_BASE_URL;

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest(`/news`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

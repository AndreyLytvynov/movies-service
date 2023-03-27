import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
const KEY = "3df068295885145f3971dff471bf342e";
const LANGUAGE = "uk";

export const movieSlice = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/movie/",
  }),

  tagTypes: ["movies"],
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => `popular?api_key=${KEY}&language=${LANGUAGE}`,
      providesTags: ["movies"],
    }),
  }),
});

export const { useGetMoviesQuery } = movieSlice;

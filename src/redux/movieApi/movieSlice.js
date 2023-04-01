import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
const KEY = "3df068295885145f3971dff471bf342e";

export const movieSlice = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),

  tagTypes: ["movies"],
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => `movie/popular?api_key=${KEY}`,
      providesTags: ["movies"],
    }),
    getTopMovies: builder.query({
      query: () => `movie/top_rated?api_key=${KEY}`,
      providesTags: ["movies"],
    }),
    getNowPlayingMovies: builder.query({
      query: () => `movie/now_playing?api_key=${KEY}`,
      providesTags: ["movies"],
    }),
    getMoviesById: builder.query({
      query: (id) => `movie/${id}?api_key=${KEY}`,
      providesTags: ["movies"],
    }),
    getMoviesByName: builder.query({
      query: (searchQuery) =>
        `/search/movie?api_key=${KEY}&query=${searchQuery}`,
      providesTags: ["movies"],
    }),
  }),
});

export const {
  usePrefetch,
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetMoviesByIdQuery,
  useGetTopMoviesQuery,
  useGetMoviesByNameQuery,
} = movieSlice;

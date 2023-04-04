import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieCustomApiSlice = createApi({
  reducerPath: "movieCustomApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3002/api/movie",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().users.token;
      if (token) {
        headers.set("Authorization", `${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ["movie"],
  endpoints: (builder) => ({
    getFavorite: builder.query({
      query: () => ({
        url: `favorites`,
      }),
      providesTags: ["movie"],
    }),
    addFavorite: builder.mutation({
      query: (movie) => ({
        url: `favorites`,
        method: "POST",
        body: movie,
      }),
      invalidatesTags: ["movie"],
    }),
    deleteFavorite: builder.mutation({
      query: (movieId) => ({
        url: `favorites?id=${movieId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["movie"],
    }),
    currentFavorite: builder.query({
      query: (movieId) => ({
        url: `favorites/current?id=${movieId}`,
      }),
      providesTags: ["movie"],
    }),
  }),
});

export const {
  useAddFavoriteMutation,
  useCurrentFavoriteQuery,
  useDeleteFavoriteMutation,
  useGetFavoriteQuery,
} = movieCustomApiSlice;

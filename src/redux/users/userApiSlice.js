import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApiSlice = createApi({
  reducerPath: "userApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://movie-service.up.railway.app/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().users.token;
      if (token) {
        headers.set("Authorization", `${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ["user"],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => ({
        url: `auth/users/signup`,
        method: "POST",
        body: user,
        providesTags: ["user"],
      }),
    }),
    loginUser: builder.mutation({
      query: (user) => ({
        url: `auth/users/login`,
        method: "POST",
        body: user,
        providesTags: ["user"],
      }),
    }),
    logOutUser: builder.mutation({
      query: () => ({
        url: `auth/users/logout`,
        providesTags: ["user"],
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogOutUserMutation,
} = userApiSlice;

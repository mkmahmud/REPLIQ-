import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Get All Users
    getAllUsers: build.query({
      query: () => ({
        url: `/users`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    // Get Single user
    getSingleUser: build.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useGetAllUsersQuery, useGetSingleUserQuery } = authApi;

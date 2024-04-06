import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Careate Order
    createOrder: build.mutation({
      query: (data) => ({
        url: `/orders`,
        method: "POST",
        data: data,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = authApi;

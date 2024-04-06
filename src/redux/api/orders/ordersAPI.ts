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
    // Get Orders
    getOrder: build.query({
      query: () => ({
        url: `/orders/get-all-orders`,
        method: "GET",
      }),
    }),
    // Get Single Orders
    getSingleOrder: build.query({
      query: (id) => ({
        url: `/orders/get-all-orders/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrderQuery,
  useGetSingleOrderQuery,
} = authApi;

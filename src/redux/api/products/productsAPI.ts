import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Get All Products
    getAllProducts: build.query({
      query: () => ({
        url: `/products/get-all-products`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    // Get Single Product
    getSingleProduct: build.query({
      query: (id) => ({
        url: `/products/get-all-products/${id}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = authApi;

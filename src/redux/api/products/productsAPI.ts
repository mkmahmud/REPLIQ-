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
    // Add Product
    addProduct: build.mutation({
      query: (data) => ({
        url: `/products`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useAddProductMutation,
} = authApi;

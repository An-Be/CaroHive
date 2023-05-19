import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}`,
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${process.env.REACT_APP_API_TOKEN}`);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products?populate=*",
    }),
    getSingleProduct: builder.query({
      query: ({id}) => `/products/${id}?populate=*`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productsApi;

import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    isFetching: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    productFetchSuccess: (state, action) => {
      state.products = action.payload;
      state.error = false;
      state.isFetching = false;
    },
    productFetchError: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { isFetching, productFetchSuccess, productFetchError } =
  ProductSlice.actions;
export default ProductSlice.reducer;

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
    productDeleteSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.products.splice(
          state.products.findIndex(item => item._id === action.payload), 1
        );
    }, 
    productDeleteError: ((state) => {
      state.isFetching = false;
      state.error = true;
    })
  },
});

export const { isFetching, productFetchSuccess, productFetchError, productDeleteSuccess, productDeleteError} = ProductSlice.actions;
export default ProductSlice.reducer;

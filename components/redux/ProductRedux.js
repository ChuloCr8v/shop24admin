import {createSlice} from '@reduxjs/toolkit'

const ProductSlice = createSlice({
  name: 'product', 
  initialState: {
    products: [],
    isFetching: false, 
    error: false, 
  },
  reducers: {
    isFetching: (state) => {
      state.isFetching = true
    }, 
    productFetchSuccess: (state, action) => {
      state.products = action.payload;
      state.error = false ;
      state.isFetching = false ;
    }, 
    productFetchError: (state) => {
      state.isFetching = false 
      state.error = true
    }
  }
})

export const {isFetching, productFetchSuccess, productFetchError} = ProductSlice.actions
export default ProductSlice.reducer
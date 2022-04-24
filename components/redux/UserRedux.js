import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user', 
  initialState: {
    currentUser: null, 
    isFetching: false, 
    error: null,
  }, 
  reducers: {
    loginStart: (state) => {
      state.isFetching = true
    }, 
    loginSuccessful: (state, action) =>{
      state.isFetching = false;
      state.error = false
      state.currentUser = action.payload;
    }, 
    loginError: (state) => {
      state.error = true
      state.isFetching = false
   }, 
    logOut: (state) => {
      state.currentUser = null
    }
  }
})

export const {loginStart, loginSuccessful, loginError, logOut} = userSlice.actions
export default userSlice.reducer
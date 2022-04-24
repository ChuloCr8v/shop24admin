import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user', 
  initialState: {
    currentUser: null, 
    isFetching: false, 
    error: null,
    users: [], 
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
      state.isFetching = false;
      state.currentUser = null
    }, 
    getUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    }, 
    getUsersError: (state, action) => {
      state.isFetching = false;
      state.error = true;
    }
  }
})

export const {loginStart, loginSuccessful, loginError, logOut, getUsersSuccess, getUsersError} = userSlice.actions
export default userSlice.reducer
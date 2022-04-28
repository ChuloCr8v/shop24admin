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
    }, 
    deleteUserStart: (state) => {
      state.error = false;
      state.isFetching = true;
    }, 
    deleteUserSuccess: (state, action) => {
      state.error = false;
      state.isFetching = false;
      state.users.Splice(
        state.users.findIndex(item => item._id === action.payload), 1
      ) 
    }, 
    deleteUserError: (state) => {
      state.isFetching = false;
      sate.error = true
    }, 
    updateUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    }, 
    updateUserSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.users = state.users[
        state.users.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.newInfo
   
    }, 
    updateUserError: (state, action) => {
      state.isFetching = false;
      state.error = true;
    }, 
  }
})

export const {loginStart, loginSuccessful, loginError, logOut, getUsersSuccess, getUsersError, deleteUserStart, deleteUserSuccess, deleteUserError, updateUserStart, updateUserSuccess, updateUserError} = userSlice.actions
export default userSlice.reducer
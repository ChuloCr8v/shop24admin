import {loginStart, loginSuccessful, loginError, logOut, getUsersSuccess, getUsersError, deleteUserStart, deleteUserSuccess, deleteUserError, updateUserStart, updateUserSuccess, updateUserError} from './redux/UserRedux'
import {isFetching, productFetchSuccess, productFetchError, productDeleteSuccess, productDeleteError } from './redux/ProductRedux'
import axios from 'axios'
import {publicRequest, userRequest} from './requestMethods'

export const login = async (dispatch, router, user) => {

  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user)
    dispatch(loginSuccessful(res.data))
    router.push('/')
  } catch (e) {
    dispatch(loginError())
  }
}

export const logout = (dispatch) => {
  dispatch(logOut())
}

export const getUsers = async (dispatch) => {
  //dispatch(isFetching())
  try {
    const res = await publicRequest.get('/users')
    dispatch(getUsersSuccess(res.data))
  } catch (e) {
    console.log(e)
    dispatch(getUsersError())
  }
}

export const deleteUser = async (dispatch, id) => {
  dispatch(deleteUserStart())
  try {
    const res = await publicRequest.delete(`/users/${id}`) 
     dispatch(deleteUserSuccess(id))
  } catch (e) {
    console.log(e)
    dispatch(getUsersError())
  }
}

//Edit User 

export const updateUser = async ({id, dispatch, newInfo}) => {
  try {
    console.log(id)
    console.log(newInfo)
     const res = await publicRequest.put('/users/' + id, newInfo)
    console.log(res)
    dispatch(updateUserSuccess({newInfo, id})) 
       console.log('successful update ')
  } catch (e) {
    dispatch(updateUserError())
    console.log(e)
  }
}

export const getProducts = async (dispatch) => {
  //dispatch(isFetching())
  try {
    const res = await publicRequest.get('/products')
      //console.log(res.data)
    dispatch(productFetchSuccess(res.data))
  } catch (e) {
    dispatch(productFetchError())
  }
}

export const deleteProduct = async (dispatch, id) => {
    //dispatch(isFetching());
  try {
      const res = await publicRequest.delete(`/products/${id}`)
      dispatch(productDeleteSuccess(id))
  } catch (e) {
  console.log(e)
    dispatch(productDeleteError())
  }
}
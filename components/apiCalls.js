import {loginStart, loginSuccessful, loginError, logOut} from './redux/UserRedux'
import {isFetching, productFetchSuccess, productFetchError} from './redux/ProductRedux'
import axios from 'axios'
import {publicRequest} from './requestMethods'

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

export const getProducts = async (dispatch) => {
  dispatch(isFetching())
  try {
    const res = await axios.get('http://localhost:5000/api/products')
     // console.log(res.data)
    dispatch(productFetchSuccess(res.data))
  } catch (e) {
    dispatch(productFetchError())
  }
}
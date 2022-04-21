import {loginStart, loginSuccessful, loginError, logOut} from './redux/UserRedux'
import axios from 'axios'

export const login = async (dispatch, user) => {

  dispatch(loginStart());
  try {
    const res = await axios.post('http://localhost:5000/auth/login', user)
    dispatch(loginSuccessful(res.data))
  } catch (e) {
    dispatch(loginError())
  }
}

export const logout = (dispatch) => {
  dispatch(logOut())
}
import styles from '../styles/Login.module.scss' 
import Link from 'next/link'
import {useState} from 'react'
import {login} from './apiCalls'
import {useDispatch, useSelector} from 'react-redux'

const Login = () => {
  
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   
   const dispatch = useDispatch()
   const {error, isFetching} = useSelector(state => state.user)
   
   const handleLogin = (e) => {
     e.preventDefault();
     login(dispatch, {username, password})
   }
   
  return(
    <div className={styles.login}>
        <div className={styles.wrapper}>
          <div className={styles.form_container}>
            <h1 className={styles.title}> Login </h1>
            <form className={styles.login_form}>
              <div className={styles.form_control}>
                  <label htmlFor="username">Username</label>
                  <input type="text" placeholder="username" required onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className={styles.form_control}>
                  <label htmlFor="password">Password</label>
                  <input type="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)} />
              </div>
              <a href='#' className={styles.forgot_password}>Forgot Password? </a>
              {error && <h1>Error</h1>} 
              {isFetching && <h1> Loading </h1>} 
              <button type="button" className={styles.btn} onClick = {handleLogin}> LOGIN </button>
              <p> Not a member yet? </p>
              <Link href="/register">
                <a className={styles.register}> Create Account
                </a>
              </Link>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Login 
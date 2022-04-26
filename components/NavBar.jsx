import styles from '../styles/NavBar.module.scss'
import {FaBell, FaCog, FaBars} from 'react-icons/fa'
import avatar from '../public/images/avatarr.jpg'
import {useSelector, useDispatch} from 'react-redux'
import {login, logout} from './apiCalls'
import Link from 'next/link'
const NavBar = ({setShowSideBar, showSideBar}) => {
  
  const dispatch = useDispatch()
  let user = useSelector(state => state.user.currentUser)
  
 const Logout = () => {
   return <button onClick={handleLogout} > Logout </button>
 }
 
 const handleLogout = () => {
    logout(dispatch)  
 }
  return (
    <>
      {user ? <nav className={styles.navbar} >
        <div className={styles.container}>
          <div className={styles.left_side}>
            <FaBars className={styles.icon} 
              onClick = {() => setShowSideBar(!showSideBar)} 
              style = {{color: `${showSideBar ? 'red' : 'black'} `}} 
            />
            <div className={styles.logo_container}>
              <Link href="/">
                <a className={styles.logo}>Shop<span>24Seven </span></a>
              </Link>
            </div>
          </div>
          <div className={styles.right_side}>
            <div className={styles.icon_container}>
              <div className={styles.icon_wrapper}>
                <FaBell className={styles.icon} />
                <p className={styles.notice_count}>2</p>
              </div>
              <div className={styles.icon_wrapper}>
                <FaCog className={styles.icon} />
              </div>
            </div>
            <div className={styles.avatar}>
              <img src={avatar.src} height="40" width="40" alt="avatar" />
            </div>
            <Logout />
          </div>
        </div>
      </nav> : '' } 
     </>
    )
}

export default NavBar 
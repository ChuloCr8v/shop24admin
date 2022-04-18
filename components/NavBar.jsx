import styles from '../styles/NavBar.module.scss'
import {FaBell, FaCog, FaBars} from 'react-icons/fa'
import avatar from '../public/images/avatarr.jpg'

const NavBar = ({setShowSideBar, showSideBar}) => {
  
  return (
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.left_side}>
            <FaBars className={styles.icon} 
              onClick = {() => setShowSideBar(!showSideBar)} 
              style = {{color: `${showSideBar ? 'red' : 'black'} `}} 
            />
            <div className={styles.logo_container}>
              <h3 className={styles.logo}>Shop<span>24Seven </span></h3>
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
          </div>
        </div>
      </nav>
    )
}

export default NavBar 
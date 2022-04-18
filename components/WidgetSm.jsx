import {FaEye} from 'react-icons/fa'
import userImg from '../public/images/avatarr.jpg'
import styles from '../styles/WidgetSm.module.scss'
const WidgetSm = () => {
  return (
      <section className={styles.widget_sm}>
        <div className={styles.container}>
          <h2 className={styles.heading}>New Users</h2>
          <div className={styles.wrapper}>
            <div className={styles.user}>
              <img src={userImg.src} alt="new user" height="40px" width="40px" className={styles.user_img} />
              <div className={styles.user_details}>
                <p className={styles.name}>John Hamilton</p>
                <p className={styles.job}>Software Engineer </p>
              </div>
              <div className={styles.view}>
                <FaEye className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default WidgetSm
import {FaEye} from 'react-icons/fa'
import userImg from '../public/images/avatarr.jpg'
import styles from '../styles/WidgetSm.module.scss'
const WidgetSm = () => {
  
  
  const data = [
    {
      name: 'John Hamilton', 
      job: 'Software Engineer'
    }, 
    {
      name: 'Jane Jordan', 
      job: 'UX Designer'
    }, 
    {
      name: 'Mark Sigel', 
      job: 'Game Developer'
    }, 
    {
      name: 'Louis Bolton', 
      job: 'Data Scientist'
    }, 
    {
      name: 'Mary Zima', 
      job: 'Backend Develper'
    }, 
    
  ]
  return (
      <section className={styles.widget_sm}>
        <div className={styles.container}>
          <h2 className={styles.heading}>New Users</h2>
          <div className={styles.wrapper}>
          {data.map((user, index) => (
            <div className={styles.user} key="index">
              <img src={userImg.src} alt="new user" height="40px" width="40px" className={styles.user_img} />
              <div className={styles.user_details}>
                <p className={styles.name}>{user.name}</p>
                <p className={styles.job}>{user.job}</p>
              </div>
              <button className={styles.view}>
                <FaEye className={styles.icon} />
                <p>View</p>
              </button>
            </div> ))} 
          </div>
        </div>
      </section>
    )
}

export default WidgetSm
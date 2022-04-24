import {FaEye} from 'react-icons/fa'
import userImg from '../public/images/avatarr.jpg'
import styles from '../styles/WidgetSm.module.scss'
import {useState, useEffect} from 'react'
import {publicRequest} from './requestMethods'
import Link from 'next/link'
const WidgetSm = () => {
  
  const [data, setData] = useState([])
  
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await publicRequest.get('/users')
        setData(res.data)
      } catch (e) {
        console.log(e)
      }
    } 
    getData()
  }, [])

  return (
      <section className={styles.widget_sm}>
        <div className={styles.container}>
          <h2 className={styles.heading}>New Users</h2>
          <div className={styles.wrapper}>
          {data.map((user) => (
           <Link 
            href={{
              pathname: "/[edit]",
              query: {
                edit: user._id,
                fullname: user.fullname,
                username: user.username,
                email: user.email, 
                date: user.createdAt
              },
            }} 
          >
            <a className={styles.user} key={user._id} >
              <img src={userImg.src} alt="new user" height="40px" width="40px" className={styles.user_img} />
              <div className={styles.user_details}>
                <p className={styles.name}>{user.username}</p>
              </div>
              <button className={styles.view}>
                <FaEye className={styles.icon} />
                <p>View</p>
              </button>
            </a> 
            </Link>
            ))} 
          </div>
        </div>
      </section>
    )
}

export default WidgetSm
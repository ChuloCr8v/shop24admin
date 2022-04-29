
import styles from '../styles/Edit.module.scss'
import avatar from '../public/images/avatarr.jpg'
import {FaUser, FaCalendar, FaPhone, FaEnvelope, FaMapMarker, FaUpload, FaSpinner } from 'react-icons/fa'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import {updateUser} from '../components/apiCalls'
import {useSelector, useDispatch} from 'react-redux'
import {publicRequest} from '../components/requestMethods'
import {format} from 'timeago.js' 

const Edit = (props) => { 
  
  const [singleUser, setUser] = useState([])
  const [newInfo, setNewInfo] = useState({})
  const [imgg, setImgg] = useState('')
  const [id, setId] = useState('')
  
  const {error, isFetching} = useSelector(state => state.user)
  const dispatch = useDispatch()
  
  const handleClick = (e) => {
    e.preventDefault()
    updateUser({dispatch, id: item.id, newInfo})
  }
  
  const handleChange = (event) => {
    setNewInfo({
     ...newInfo, 
     [event.target.name]: event.target.value
    })
  }
  
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await publicRequest.get(`/users/${props.id}`)
        singleUser.push(res.data)
      } catch (e) {
        console.log(e)
      }
    }
    getUser()
  }, [])

  
  return ( 
      <section className={styles.edit}>
       <div className={styles.container}>
       {singleUser.map((item) => (
        <>
        <div className={styles.heading_wrapper}>
          <p className={styles.heading}>{item.username}</p>
          <Link href="/create-user">
            <a className={styles.create_btn}>Create User </a>
          </Link>
        </div>
        <div class={styles.wrapper}>
           <div class={styles.user_details}>
            <div className={styles.user_info}>
              <img src={avatar.src} alt={item.username} className={styles.user_img} height="50" width="50" />
              <div className={styles.name_wrapper} >
                <p className={styles.user_name}>{item.fullname}</p>
                <p className={styles.job}>{item.username}</p>
              </div>
            </div>
            <div className={styles.items}>
              <p className={styles.subheading}>Account Details</p>
              <div className={styles.item}>
                <FaUser className={styles.icon} />
                <p>{item.username}</p>
              </div>
              <div className={styles.item}>
                <FaCalendar className={styles.icon} />
                <p>{format(item.createdAt)}</p>
              </div>
            </div>
            <div className={styles.items}>
             <p className={styles.subheading}>Contact Details</p>
              <div className={styles.item}>
                <FaPhone className={styles.icon} />
                <p>+2348138369977</p>
              </div>
              <div className={styles.item}>
                <FaEnvelope className={styles.icon} />
                <p>{item.email}</p>
              </div>
              <div className={styles.item}>
                <FaMapMarker className={styles.icon} />
                <p>Lagos, Nigeria.</p>
              </div>
            </div>
          </div>
          <div className={styles.edit_user}>
             <div className={styles.user_img}>
            <input type="file" id="img" name="img" accept="image/*" onChange={(e) => setImgg(e.target.files[0])} className={styles.img_input} />
           {imgg && <img src={URL.createObjectURL(imgg)} />} 
          </div>
            <form className={styles.edit_form}>
              <div className={styles.form_group}>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder={item.username} name="username" onChange={() => handleChange(event)}/>
              </div>
              <div className={styles.form_group}>
                <label htmlFor="fullname">Full Name</label>
                <input type="text" placeholder={item.fullname} name="fullname" onChange={() => handleChange(event)} />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder={item.email} name="email" onChange={() => handleChange(event)} />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="phone">Phone</label>
                <input type="number" placeholder="08138369977" name="phone" onChange={() => handleChange(event)} />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="address">Address</label>
                <input type="address" placeholder="Lagos, Nigeria" name="address" onChange={() => handleChange(event)} />
              </div>
              {error ? <error style={{color: 'red', fontSize: '0.8rem', marginTop: '20px', marginBottom: '10px'}} >Unable to update user </error> : '' }
              <button className={styles.submit_btn} onClick={handleClick} style={{opacity: `${isFetching ? 0.5 : 1}`}}>{isFetching ? <FaSpinner className={styles.spinner} /> : 'Submit'} </button>
            </form>
          </div>
        </div>
        </>
        )).slice(0, 1)} 
       </div>
      </section>
    ); 
  }; 
  
export default Edit

export async function getServerSideProps(context) {
  return {
    props: {
      id: context.query.edit,
      username: context.query.username,
      fullname: context.query.fullname,
      email: context.query.email,
    },
  };
}

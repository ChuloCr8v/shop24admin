
import styles from '../styles/CreateUser.module.scss'
import avatar from '../public/images/avatarr.jpg'
import {FaUpload} from 'react-icons/fa'
import {useState} from 'react'
import Heading from '../components/Heading'

const CreateUser = () => { 
  
   const [imgg, setImgg] = useState('')
  
  return ( 
      <section className={styles.create_user}>
        <div className={styles.container}>
          <Heading heading={"Create User"} />
          <div className={styles.wrapper}> 
          
          <div className={styles.user_img}>
            <input type="file" id="img" name="img" accept="image/*" onChange={(e) => setImgg(e.target.files[0])} className={styles.img_input} />
           {imgg && <img src={URL.createObjectURL(imgg)} />} 
          </div>
              
              <form className={styles.create_user_form}>
                <div className={styles.form_group}>
                  <label htmlFor="username">Username</label>
                  <input type="text" placeholder="username" name="username" />
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="fullname">Full Name</label>
                  <input type="text" placeholder="full name" name="fullname" />
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="username">Email</label>
                  <input type="email" placeholder="email address" name="email" />
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="phone">Phone</label>
                  <input type="number" placeholder="phone" name="phone" />
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="address">Address</label>
                  <input type="address" placeholder="address" name="address" />
                </div>
                <button className={styles.create_btn}>Create</button>
              </form>
          </div>
        </div>
      </section>
    ); 
  }; 
  
export default CreateUser
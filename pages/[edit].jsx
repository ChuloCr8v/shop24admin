
import styles from '../styles/Edit.module.scss'
import avatar from '../public/images/avatarr.jpg'
import {FaUser, FaCalendar, FaPhone, FaEnvelope, FaMapMarker, FaUpload} from 'react-icons/fa'
import Link from 'next/link'

const Edit = (props) => { 
  
  return ( 
      <section className={styles.edit}>
       <div className={styles.container}>
        <div className={styles.heading_wrapper}>
          <p className={styles.heading}>Viewing <span>{props.name}</span></p>
          <Link href="/create-user">
            <a className={styles.create_btn}>Create User </a>
          </Link>
        </div>
        <div class={styles.wrapper}>
          <div class={styles.user_details}>
            <div className={styles.user_info}>
              <img src={avatar.src} alt={props.name} className={styles.user_img} height="50" width="50" />
              <div className={styles.name_wrapper} >
                <p className={styles.user_name}>{props.name}</p>
                <p className={styles.job}>Software Engineer</p>
              </div>
            </div>
            <div className={styles.items}>
              <p className={styles.subheading}>Account Details</p>
              <div className={styles.item}>
                <FaUser className={styles.icon} />
                <p>John911</p>
              </div>
              <div className={styles.item}>
                <FaCalendar className={styles.icon} />
                <p>12.03.2022</p>
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
                <p>Chulocr8v@gmail.com</p>
              </div>
              <div className={styles.item}>
                <FaMapMarker className={styles.icon} />
                <p>Lagos, Nigeria.</p>
              </div>
            </div>
          </div>
          <div class={styles.edit_user}>
            <div className={styles.edit_avatar}>
              <img src={avatar.src} alt="new image" height="100" width="100" />
              <FaUpload className={`${styles.icon} ${styles.edit_avatar_icon}`} />
            </div>
            <form className={styles.edit_form}>
              <div className={styles.form_group}>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="John991" name="username" />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="fullname">Full Name</label>
                <input type="text" placeholder="John Snow" name="fullname" />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="username">Email</label>
                <input type="email" placeholder="chulocr8v@gmail.com" name="email" />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="phone">Phone</label>
                <input type="number" placeholder="08138369977" name="phone" />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="address">Address</label>
                <input type="address" placeholder="Lagos, Nigeria" name="address" />
              </div>
              <button className={styles.submit_btn}>Submit</button>
            </form>
          </div>
        </div>
       </div>
      </section>
    ); 
  }; 
  
export default Edit

export async function getServerSideProps(context) {
  return {
    props: {
      id: context.query.edit,
      name: context.query.name,
      email: context.query.email,
    },
  };
}

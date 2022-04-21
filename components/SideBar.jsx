import styles from '../styles/SideBar.module.scss'
import {FaHome, FaChartLine, FaChartBar, FaUsers, FaShoppingBag, FaCreditCard, FaBook, FaComments, FaEnvelope, FaCommentDots, FaBriefcase, FaInfoCircle} from 'react-icons/fa'
import Link from 'next/link'

const SideBar = ({showSideBar}) => {
  return (
      <div className={styles.sidebar} style={{transform: `${showSideBar ? 'translateX(0)' : ''}`}}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <h3 className={styles.heading}>Dashboard</h3>
            <div className={styles.items}>
              <div className={styles.item}>
                <FaHome className={styles.icon} />
                <p> Home </p>
              </div>
              <div className={styles.item}>
                <FaChartLine className={styles.icon} />
                <p> Analytics </p>
              </div>
              <div className={styles.item}>
                <FaChartBar className={styles.icon} />
                <p> Sales </p>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <h3 className={styles.heading}>Quick Menu</h3>
            <div className={styles.items}>
              <Link href="/users">
                <a className={styles.item}>
                  <FaUsers className={styles.icon} />
                  <p> Users </p>
                </a>
              </Link>
              <Link href="/products">
                <a className={styles.item}>
                  <FaShoppingBag className={styles.icon} />
                  <p> Products </p>
                </a>
              </Link>
              <div className={styles.item}>
                <FaCreditCard className={styles.icon} />
                <p> Transactions </p>
              </div>
              <div className={styles.item}>
                <FaBook className={styles.icon} />
                <p> Reports </p>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <h3 className={styles.heading}>Notifications</h3>
            <div className={styles.items}>
              <div className={styles.item}>
                <FaEnvelope className={styles.icon} />
                <p> Mail </p>
              </div>
              <div className={styles.item}>
                <FaComments className={styles.icon} />
                <p> Feedback </p>
              </div>
              <div className={styles.item}>
                <FaCommentDots className={styles.icon} />
                <p> Messages </p>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <h3 className={styles.heading}>Staff</h3>
            <div className={styles.items}>
              <div className={styles.item}>
                <FaBriefcase className={styles.icon} />
                <p> Manage </p>
              </div>
              <div className={styles.item}>
                <FaChartLine className={styles.icon} />
                <p> Analytics </p>
              </div>
              <div className={styles.item}>
                <FaInfoCircle className={styles.icon} />
                <p> Reports </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SideBar 
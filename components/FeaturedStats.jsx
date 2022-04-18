import {FaArrowDown, FaArrowUp} from 'react-icons/fa'
import styles from '../styles/FeaturedStats.module.scss'
const FeaturedStats = () => {
  return(
      <section className={styles.featured_stats}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Revenue</h2>
          <div className={styles.wrapper}>
            <div className={styles.item}>
              <p className={styles.title}>Revenue</p>
              <div className={styles.stat_wrapper}>
                <p className={styles.money}>$2,500</p>
                <p className={styles.percent}>-1.5</p>
                <FaArrowDown className={`${styles.icon} ${styles.arrow_down}` } />
              </div>
              <p className={styles.subtitle}>Compared to last month </p>
            </div>
            <div className={styles.item}>
              <p className={styles.title}>Sales</p>
              <div className={styles.stat_wrapper}>
                <p className={styles.money}>$5,000</p>
                <p className={styles.percent}>-1.5</p>
                <FaArrowDown className={`${styles.icon} ${styles.arrow_down}` } />
              </div>
              <p className={styles.subtitle}>Compared to last month </p>
            </div>
            <div className={styles.item}>
              <p className={styles.title}>Cost</p>
              <div className={styles.stat_wrapper}>
                <p className={styles.money}>$2,500</p>
                <p className={styles.percent}>-1.4</p>
                <FaArrowDown className={`${styles.icon} ${styles.arrow_up}` } />
              </div>
              <p className={styles.subtitle}>Compared to last month </p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default FeaturedStats
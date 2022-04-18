
import styles from '../styles/Home.module.scss'
import FeaturedStats from './FeaturedStats'
import Chart from './Chart'
import WidgetSm from './WidgetSm'

const Home = () => {
  return (
      <section className={styles.home} >
        <div className={styles.container}>
          <FeaturedStats />
          <Chart />
          <WidgetSm />
        </div>
      </section>
    )
}

export default Home 
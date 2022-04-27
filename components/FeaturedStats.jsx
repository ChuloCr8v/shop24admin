import {FaArrowDown, FaArrowUp} from 'react-icons/fa'
import styles from '../styles/FeaturedStats.module.scss'
import {useState, useEffect} from 'react'
import {publicRequest} from './requestMethods'

const FeaturedStats = () => {
  
  const [income, setIncome] = useState("")
  const [percent, setPercent] = useState("")
  const [sales, setSales] = useState("")
  const [salesPercent, setSalesPercent] = useState("")
  
  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await publicRequest.get('/orders/income')
        const profit = res.data[1] ? res.data[0].total - res.data[1].total : res.data[0].total
        
        //income
        setIncome(profit)
        
        //percentage 
        const percentage = profit/(res.data[0].total) * 100
        setPercent(percentage)
        
        //Sales 
        const getSales = res.data.map((item) => (
          res.data[1] ? item.total.reduce((prevSale, currentSale) => {
            prevSale + currentSale
          } 
        ) : item.total
      )) 
        setSales(getSales)
        
        //sales percent
       const getSalesPercent = res.data.map(item => (
         setSalesPercent(profit/res.data[0].total * 100) 
       ))

      
      } catch (e) {
        console.log(e)
      }
    }
    getIncome()
  }, [])
  
  useEffect(() => {}, [])
  
  return(
      <section className={styles.featured_stats}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Revenue</h2>
          <div className={styles.wrapper}>
            <div className={styles.item}>
              <p className={styles.title}>Revenue</p>
              <div className={styles.stat_wrapper}>
                <p className={styles.money}>${income.toLocaleString()} </p>
                <p className={styles.percent}>{percent}%</p>
                {percent < 0 ? <FaArrowDown className={`${styles.icon} ${styles.arrow_down}` } /> : <FaArrowUp className={`${styles.icon} ${styles.arrow_up}`} />} 
              </div>
              <p className={styles.subtitle}>Compared to last month </p>
            </div>
            <div className={styles.item}>
              <p className={styles.title}>Sales</p>
              <div className={styles.stat_wrapper}>
                <p className={styles.money}>{sales.toLocaleString()} </p>
                <p className={styles.percent}>{salesPercent}%</p>
                {salesPercent < 0 ? <FaArrowDown className={`${styles.icon} ${styles.arrow_down}` } /> : <FaArrowUp className={`${styles.icon} ${styles.arrow_up}`} />} 
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
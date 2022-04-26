
import styles from '../styles/WidgetLg.module.scss'
import avatar from '../public/images/avatarr.jpg'
import {useState, useEffect} from 'react'
import {publicRequest} from './requestMethods'
import {format} from 'timeago.js'
const WidgetLg= () => { 
  
  const [data, setData] = useState([])
  
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await publicRequest.get('/orders');
        setData(res.data)
      } catch (e) {
        console.log(e)
      }
    } 
    getData()
  }, [])
  
  
  
  
  
  
   
   const Button = ({type}) => {
     return(
       <button className={styles[type]}>{type}</button>
     )
   }
   
   
  return ( 
      <section className={styles.widget_lg}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Latest Transactions</h2>
          <ul className={styles.wrapper}>
            <li>
              <ul className={styles.headers}>
                <li className={styles.header}>Customer</li>
                <li className={styles.header}>Date</li>
                <li className={styles.header}>Amount</li>
                <li className={styles.header}>Status</li>
              </ul>
            </li>
            {data.map((item) => (
              <li key={item._id} className={styles.transaction_wrapper} >
                <ul className={styles.transaction}>
                  <li className={styles.customer_details}>
                    <img src={avatar.src} alt="" height="40" width="40" className={styles.img} />
                    <p className={styles.name}>{item.name}</p>
                  </li>
                  <li className={styles.item}> 
                    {format(item.createdAt)}
                  </li>
                  <li className={styles.item}> 
                    {item.amount}
                  </li>
                  <li className={`${styles.item}`} > 
                   <Button type={item.status} />
                  </li>
                </ul>
              </li>
            ))} 
          </ul>
        </div>
      </section>
    ); 
  }; 
  
export default WidgetLg
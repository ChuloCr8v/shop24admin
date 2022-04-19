
import styles from '../styles/WidgetLg.module.scss'
import avatar from '../public/images/avatarr.jpg'

const WidgetLg= () => { 
   
   const Button = ({type}) => {
     return(
       <button className={styles[type]}>{type}</button>
     )
   }
   
   
  const data = [
    {
      name: 'John', 
      date: '5 March',
      amount: '$2300',
      status: 'Pending'
    },
    {
      name: 'Smith', 
      date: '8 March',
      amount: '$5600',
      status: 'Approved'
    },
    {
      name: 'Jordan', 
      date: '8 March',
      amount: '$400',
      status: 'Approved'
    },
    {
      name: 'Mike', 
      date: '12 March',
      amount: '$10,600',
      status: 'Pending'
    },
    {
      name: 'Josh', 
      date: '15 March',
      amount: '$5,800',
      status: 'Rejected'
    },
  ]
  
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
            {data.map((item, index) => (
              <li key='index' className={styles.transaction_wrapper} >
                <ul className={styles.transaction}>
                  <li className={styles.customer_details}>
                    <img src={avatar.src} alt="" height="40" width="40" className={styles.img} />
                    <p className={styles.name}>{item.name}</p>
                  </li>
                  <li className={styles.item}> 
                    {item.date}
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
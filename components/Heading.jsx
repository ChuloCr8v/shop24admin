
import styles from '../styles/Heading.module.scss'

const Heading = ({heading}) => { 
  return ( 
      <section className={styles.heading_wrapper}>
         <h2 className={styles.heading}>{heading}</h2>
      </section>
    ); 
  }; 
  
export default Heading 
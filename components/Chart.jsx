import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import styles from '../styles/Chart.module.scss'

const data = [
  {
    month: 'Jan',
    users: 400
  }, 
  {
    month: 'feb',
    users: 450
  }, 
  {
    month: 'March',
    users: 300
  }, 
  {
    month: 'April',
    users: 600
  }, 
  {
    month: 'May',
    users: 450
  }, 
  {
    month: 'June',
    users: 1800
  }, 
  {
    month: 'July',
    users: 800
  }, 
  {
    month: 'Aug',
    users: 1400
  }, 
  {
    month: 'Sept',
    users: 2000
  }, 
  {
    month: 'Oct',
    users: 2400
  }, 
  {
    month: 'Nov',
    users: 2450
  }, 
  {
    month: 'Dec',
    users: 6000
  }
];

const Chart = () => {
  
  return (
    <div className={styles.wrapper}>
      <LineChart width={600} height={300} data={data} margin={{ top: 5, left: 20, bottom: 5, right: 20 }}>
        <Line type="monotone" dataKey="users" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="month" />
        <Tooltip />
      </LineChart>
    </div>
 ) 
} ;

export default Chart
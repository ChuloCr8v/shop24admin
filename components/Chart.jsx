import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import styles from '../styles/Chart.module.scss'
import {useState, useEffect, useMemo} from 'react'
import {publicRequest} from './requestMethods'

const Chart = () => {
  
  const [userStats, setUserStats] = useState([])
  
  const MONTHS = useMemo(() => [
    "Jan", 
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug", 
    "Sep",
    "Oct", 
    "Nov", 
    "Dec",
  ], [])
    
  useEffect(() => {
    const getUserStats = async () => {
      try {
       
      const res = await publicRequest.get('/users/stats')
      res.data.map((item) => 
        setUserStats((prev) => [
          ...prev, {
            name: MONTHS[item._id - 1], 
            "Active Users": item.total
          }])
      ) 
      } catch (e) {
        console.log(e)
      }
    }
    getUserStats()
  }, [MONTHS])
  

  return (
    <div className={styles.wrapper}>
      <LineChart width={600} height={300} data={userStats} margin={{ top: 5, left: 20, bottom: 5, right: 20 }}>
        <Line type="monotone" dataKey="Active Users" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <Tooltip />
      </LineChart>
    </div>
 ) 
} ;

export default Chart

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Home from '../components/Home'
import {useSelector} from 'react-redux'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
export default function Index() {
  
  const user = useSelector(state => state.user.currentUser)
  const router = useRouter()
 
 useEffect(() => {
   if (user === null){
    router.push('/login')
   } else {
     return;
   }
 }, [user])
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="shop24seven admin panel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.wrapper} >
        <div className={styles.main}>
          <Home /> 
        </div>
      </main>
    </div>
  )
}

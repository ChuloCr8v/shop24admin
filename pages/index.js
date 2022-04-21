import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Home from '../components/Home'

export default function Index() {
  
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

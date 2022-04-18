import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import {useState, useEffect} from 'react'

export default function Home() {
  
  const [showSideBar, setShowSideBar] = useState(false)
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="shop24seven admin panel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      <main className={styles.wrapper} >
        <SideBar showSideBar={showSideBar} />
        <div className={styles.main}>
          <h1> others </h1>
        </div>
      </main>
    </div>
  )
}

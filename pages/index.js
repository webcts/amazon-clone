import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import Home1 
from '../components/Home';



export default function Home() {
  return (
    <div className={styles.body}>
      <Head>
        <title>ECOM
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Home1></Home1>
      

      </div>

    
  )
}

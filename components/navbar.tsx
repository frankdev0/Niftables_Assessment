import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
  return (
    <>
      <div className={styles.navcontainer}>
      <div><Image src='/Logo.svg' alt='logo' width={100} height={50} /></div>
      <div className={styles.rightmenu}>
      <div>
      <a href='/#' className={styles.linktag}>Creon Pass</a>
      <a href='/#' className={styles.linktag}>Token<sup className={styles.sup}>SOON</sup></a>
      <a href='/#' className={styles.linktag}>AI Revenue <sup className={styles.sup}>SOON</sup></a>
      <a href='/#' className={styles.linktag}>AI Launchpad <sup className={styles.sup}>SOON</sup></a>
    </div>
        <div>
          <button className={styles.navbtn}>Connect</button>
        </div>
      </div>
      </div>
     
      
    </>
  )
}

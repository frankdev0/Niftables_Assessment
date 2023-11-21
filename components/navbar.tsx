import React, { useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className={styles.navcontainer}>
      <div><Image src='/Logo.svg' alt='logo' width={100} height={50} /></div>
      <div className={styles.rightmenu}>
      <div>
      <Link href='/#' className={styles.linktag}>Creon Pass</Link>
      <Link href='/#' className={styles.linktag}>Token<sup className={styles.sup}>SOON</sup></Link>
      <Link href='/#' className={styles.linktag}>AI Revenue <sup className={styles.sup}>SOON</sup></Link>
      <Link href='/#' className={styles.linktag}>AI Launchpad <sup className={styles.sup}>SOON</sup></Link>
      </div>
    
    <div>
          <button className={styles.navbtn}>Connect</button>
        </div>
        </div>
        <div className={styles.btnmedia}>
        <button className={styles.navbtntwo}>Connect</button>
    <div className={styles.barscontainer} onClick={openMobileMenu}>
    <FaBars className={styles.fabars}/>
    </div>
    </div>
    {isMobileMenuOpen && (
    <div className={styles.mobilemenu}>
      <div className={styles.mobileheader}>
      <button className={styles.navbtn}>Connect</button>
      <div className={styles.close} onClick={closeMobileMenu}>
      <IoClose className={styles.closeicon}/>
      </div>
     
      </div>
      
      <div className={styles.mobilelinks}>
      <Link href='/#' className={styles.mobilelink}>Creon Pass</Link>
      <Link href='/#' className={styles.mobilelink}>Token<sup className={styles.supp}>SOON</sup></Link>
      <Link href='/#' className={styles.mobilelink}>AI Income <sup className={styles.supp}>SOON</sup></Link>
      <Link href='/#' className={styles.mobilelink}>AI Launchpad <sup className={styles.supp}>SOON</sup></Link>
      </div>
    
     </div>
    )}
       
        
     
      </div>
     
      
    </>
  )
}

import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className={styles.footer}>
    
        <div className='d-flex align-items-center'>
        <p className={styles.footertext}> &copy; Creon 2023. All rights reserved.</p>
        </div>
       <div className='mx-5'>
        <Link href='#'>
        <Image src='/socials.svg' alt='logo' width={100} height={50} />
        </Link>
       
       </div>
       
       <div className='d-flex align-items-center'>
        <p><small className={styles.small}>powered by</small> NIFTABLES</p>
       </div>
  
    </div>
  )
}

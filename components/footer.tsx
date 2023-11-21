import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className={styles.footer}>
    <div className='d-flex justify-content-between'>
        <div className='d-flex align-items-center'>
        <p className={styles.footertext}> &copy; Creon 2023. All rights reserved.</p>
       <div className='mx-5'>
        <a href='#'>
        <Image src='/socials.svg' alt='logo' width={100} height={50} />
        </a>
       
       </div>
        </div>
       <div className='d-flex align-items-center'>
        <p><small className={styles.small}>powered by</small> NIFTABLES</p>
       </div>
    </div>
    </div>
  )
}

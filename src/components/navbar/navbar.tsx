import React from 'react'
import Image from 'next/image'
import styles from '../../styles/home/desktop.module.css'


export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarContent}>
      <Image src="/logo-w.png" alt="logo" loading='lazy' width={150} height={50}/>
        <div className={styles.navbarroute}>
          <h2>Home</h2>
          <h2>Service</h2>
        </div>
      </div>
    </div>
  )
}

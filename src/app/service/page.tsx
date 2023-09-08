import Navbar from '@/components/navbar/navbar'
import React from 'react'
import Link from 'next/link'
import { serviceitems } from '@/data/servicesitems'
import styles from '../../styles/service/desktop.module.css'

export default function Service() {
  return (
    <div className={styles.serviceContainer}>
      <div className={styles.serviceContent}>
        <h1>OUR SERVICES</h1>
        <div className={styles.services}>
        {serviceitems.map((item) => (
              <div key={item.id} className={styles.service}>
                <div className={styles.serviceicondiv}>
                  <img src={item.hero} alt="art" className={styles.serviceicon} />
                </div>
                    <h5>{item.writeup}</h5>
                    <Link href='#' style={{color:"black"}}> More </Link>
                    
                
              </div>
            ))}

        </div>
      </div>
    </div>
  )
}

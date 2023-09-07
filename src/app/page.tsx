'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Homepage from '@/app/home/page'
import Navbar from '@/components/navbar/navbar'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Navbar/> */}
      <Homepage/>
      
      
    </main>
  )
}

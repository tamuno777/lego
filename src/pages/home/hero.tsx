import React from 'react'
import styles from '../../styles/home/desktop.module.css'

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
  
        <div className={styles.heroContent}>
            <h2>Pottery Studio</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam non, hic dolore quis eligendi cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, repellendus!</p>
            <button className={styles.button}> Join Today</button>
        </div>
    </div>
  )
}

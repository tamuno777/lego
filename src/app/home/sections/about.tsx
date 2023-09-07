import React from 'react'
import styles from '../../../styles/home/desktop.module.css'


export default function About() {
  return (
    <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
            <div className={styles.about}>
                <h2 >About <span className={styles.span}>Our</span> Studio</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni nesciunt saepe laboriosam. Voluptate laudantium animi ullam ut libero reiciendis ratione incidunt, sapiente architecto doloremque!</p>
            </div>
            <div className={styles.aboutReg}>
                <h2 >Regis<span className={styles.span}>trat</span>ion Open</h2>
                <p>18th Nov 2023 - 30th Nov 2023</p>
                <p> 2 months Session</p>
                <button className={styles.button}> I Want To Register</button>
            </div>
        </div>
    </div>
  )
}

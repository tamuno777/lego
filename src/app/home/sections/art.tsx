import React from 'react'
import styles from '../../../styles/home/desktop.module.css'
import { artitems } from "../../../data/artitems";
import { items } from '@/data/caroselitems';



export default function Artsale() {
  return (
    <div className={styles.artContainer} >
        <div className={styles.artContent}>
                <div className={styles.arttext}>
                    <h2>Art <span className={styles.span}>For</span> Sale</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur quas ab necessitatibus nam at est assumenda, </p>
                </div>

                <div className={styles.artproduct}>
                    {artitems.map((item) => (
              <div key={item.id} className={styles.s}>
                <div className={styles.artimgdiv}>
                  <img src={item.hero} alt="art" className={styles.artimg} />
                </div>
                <div>
                    <h5>{item.productname}</h5>
                    <h6> $ {item.productprice}</h6>
                </div>
                
              </div>
            ))}
                </div>
                <div style={{display:"flex",justifyContent:"center",margin:"30px 0"}}>
                <button className={styles.button}> More Products</button>
                </div>
                
        </div>


    </div>
  )
}

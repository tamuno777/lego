import React from 'react'
import styles from '../../styles/home/desktop.module.css'


export default function Contact() {
  return (
    <div style={{backgroundColor:"black",color:"aliceblue",padding:"20px"}}>
        <div style={{display:"flex",justifyContent:"center",flexDirection:"row",padding:"30px 0"}}>
        <div style={{textAlign:"center",display:"flex",justifyContent:"center",flexDirection:"column",gap:"20px",width:"500px",borderBottom:"1px solid gray",padding:"0 30px 40px 30px"}}>
            <h2>Subscribe to <span className={styles.span}>Ou</span>r Newsletter </h2>
            <p style={{flexWrap:"wrap"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio et quaerat esse necessitatibus officiis suscipit.</p>
            <div style={{display:"flex",justifyContent:"center"}}>
                <input type="text" />
                <button className={styles.button}>Subscribe Now</button>
            </div>
        </div>
        </div>
        <div>
            <div style={{display:"flex",justifyContent:"center",flexDirection:"row",padding:"30px 0",gap:"30px",textAlign:"center"}}>
                <div>
                    <h3 style={{padding:"10px 0"}}>Address</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor.</p>
                </div>
                <div>
                    <h3 style={{padding:"10px 0"}}>Call Us</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor.</p>
                </div>
                <div>
                    <h3 style={{padding:"10px 0"}}>Enroll now</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

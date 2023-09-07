import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image'
import { seconditems } from "../../../data/caroselitems";
import styles from '../../../styles/home/desktop.module.css'



export default function Studio() {
    // const { responsive } = items;
  return (
    <div className={styles.studioContainer}>
        <div className={styles.studioContent}>
            <div className={styles.workshoptext}>
                <h2>Studio & Events</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis eum nostrum quibusdam maiores ducimus voluptas laudantium quas ab in odit!</p>
                <button className={styles.button}> Book your seat</button>
            </div>
            <div className={styles.container}>
          <Carousel
            showArrows={true}
            showIndicators={true}
            infiniteLoop={true}
            dynamicHeight={false}
            className={styles.mySwiper}
          >
            {seconditems.map((item) => (
              <div key={item.id} className={styles.swipItem}>
                <div className={styles.imgBox}>
                  <img src={item.hero} alt="slides" className={styles.workshopImg} />
                </div>
                
              </div>
            ))}
          </Carousel>
        </div>
        </div>
    </div>
  )
}

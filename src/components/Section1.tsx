import styles from "../components/Section1.module.css"
import React from 'react'
import bg from '../Images/1/main.png'
import links from '../Images/1/links.png'

const Section1=()=>{

    return(
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
                <div className={styles.body}>
                    <p className={styles.text1}>Hie Everyone,</p>
                    <p className={styles.text1}>My Name is</p>
                    <p className={styles.text1} style={{color:"#FF6868"}}>tustsuji</p>
                    <p className={styles.text2}>The most adorable animals on Solana</p>
                </div>
                <div className={styles.imageWrapper}>
                    <img
                        className={styles.image}
                        loading="lazy"
                        alt=""
                        src={bg}
                    />
                    <img
                        className={styles.imageSocial}
                        loading="lazy"
                        alt=""
                        src={links}
                    />
                </div>
            </div>
        </div>
    )
}

export default Section1
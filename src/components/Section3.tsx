import styles from "../components/Section3.module.css"
import React from 'react'
import bg from '../Images/3/coin.png'

const Section3=()=>{

    return(
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
                <img
                    className={styles.coin}
                    loading="lazy"
                    alt=""
                    src={bg}
                />
                <p className={styles.text1}>THE LADY THAT OWNED ​“KABOSU” DECIDED TO ADOPT</p>
                <p className={styles.text2}>Tutsuji’s name means “the colour of sound” as described in the tweet below by @kabosumama.
                Join the FIRST Tutsuji community on the blockchain and welcome the new Doge to the family.
                R.I.P. Kabosu November 2, 2005 – May 24, 2024
                </p>
            </div>
        </div>
    )
}

export default Section3
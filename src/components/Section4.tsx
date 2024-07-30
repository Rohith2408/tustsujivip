import styles from "../components/Section4.module.css"
import React from 'react'
import bg from '../Images/4/image.png'

const Section4=()=>{

    return(
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
                <img
                    className={styles.image}
                    loading="lazy"
                    alt=""
                    src={bg}
                />
            </div>
        </div>
    )
}

export default Section4
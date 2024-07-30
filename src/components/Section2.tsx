import styles from "../components/Section2.module.css"
import React, { useRef } from 'react'
import paw from "../Images/2/paw.png"
import dogface from "../Images/2/dogface.png"
import catface from "../Images/2/catface.png"
import fire from "../Images/2/fire.png"

const Section2=()=>{

    const caAddress=useRef("TBA").current
    const items=useRef([
        {text:"Ta"}
    ])

    return(
        <div className={styles.mainWrapper}>
            <div className={styles.subWrapper}>
                <div className={styles.titleWrapper}>
                    <p className={styles.title}>TOKENOMICS</p>
                </div>
                <div className={styles.caWrapper}>
                    <p className={styles.ca}>CA: {caAddress}</p>
                </div>
                <div className={styles.itemsWrapper}>
                    <div className={styles.item}>
                        <p className={styles.itemText}>TAX 0%</p>
                        <img
                            className={styles.itemImg}
                            loading="lazy"
                            alt=""
                            src={paw}
                        />
                    </div>
                    <div className={styles.item}>
                        <div style={{flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center",gap:'10px'}}>
                            <p className={styles.itemText}>LIQUIDITY</p>
                            <img
                                style={{width:"40px",height:"auto",objectFit:"contain"}}
                                loading="lazy"
                                alt=""
                                src={fire}
                            />
                        </div>
                        <img
                            className={styles.itemImg}
                            loading="lazy"
                            alt=""
                            src={dogface}
                        />
                    </div>
                    <div className={styles.item}>
                        <p className={styles.itemText}>0 TEAM TOKENS</p>
                        <img
                            className={styles.itemImg}
                            loading="lazy"
                            alt=""
                            src={catface}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Item=(props:{text:string,icon:string})=>{

    return(
        <div className={styles.item}>
            <p className={styles.itemText}>{props.text}</p>
            <img
                className={styles.itemImg}
                loading="lazy"
                alt=""
                src={props.icon}
            />
        </div>
    )
}

export default Section2
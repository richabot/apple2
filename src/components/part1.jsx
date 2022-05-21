import React from "react"
import styles from "../components/cardstyle.module.css"

let Part1=({date, logo})=>{
    return(
        <div  className={styles.part1}>
            <p>{date}</p>
            <img style={{height:"80px",width:"80px"}}src={logo}></img>
        </div>
    )
}
export default Part1
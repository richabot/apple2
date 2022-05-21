import React from "react"
import styles from "../components/cardstyle.module.css"
let Part2=({heading})=>{
    return(
        <div  className={styles.part2}>
            <h3>{heading}</h3>
        </div>
    )
}
export default Part2
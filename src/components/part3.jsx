import React from "react"
import styles from "../components/cardstyle.module.css"
let Part3=({subheading})=>{
    return(
        <div className={styles.part3}>
            <h3>{subheading}</h3>
        </div>
    )
}
export default Part3
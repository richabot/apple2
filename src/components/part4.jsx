import React from "react"
import styles from "../components/cardstyle.module.css"
{/* <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" /> */}
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
let Part4=({devices})=>{
    return(
        <div className={styles.part4}>
            <p>{devices}</p>
            <FontAwesomeIcon style={{ width:"50px",height:"50px",marginLeft:"60%",marginTop:"3%"}} icon={faArrowCircleRight}></FontAwesomeIcon>
        </div>
    )
}
export default Part4
{/* <i class="fa-solid fa-arrow-right"></i> */}


import React from "react"
import styles from "../components/cardstyle.module.css"
import Part1 from "./part1"
import Part11 from "./part11"
import Part2 from "./part2"
import Part3 from "./part3"
import Part4 from "./part4"
let Maincard=({date,heading,subheading,devices,color,logo })=>{
    return(
        <div style={{backgroundColor:color}} className={styles.divstyle}>
            <Part1 date={date} logo={logo}/>
            <Part11/>
            <Part2 heading={heading}/>
            <Part3 subheading={subheading}/>
            <Part4 devices={devices}/>
        </div>
    )
       
    
}
export default Maincard
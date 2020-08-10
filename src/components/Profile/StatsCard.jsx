import React from 'react'
import './Stats.css';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  
  // Animation
  import { easeQuadInOut } from "d3-ease";
  import AnimatedProgressProvider from "./Animation/AnimatedProgressProvider";
  import ChangingProgressProvider from "./Animation/ChangingProgressProvider";



export default function StatsCard(props){
    
    const { number, time, desc, value } = props

    return(
        <>
        
         <div class='col-6 col-sm-6 col-md-4 col-lg-2'>

      <ChangingProgressProvider values={[value ,0, value]} >
        {percentage => (
          <CircularProgressbar
           value={percentage} text={`${percentage}+`} 
           styles={buildStyles({
            textColor: "#6C59BC",
            pathColor: "#6C59BC",
            trailColor: "gold"
          })}
           />
        )}
      </ChangingProgressProvider>
      <div class="hours text-center my-3">
                <strong>{time}</strong><br/>
                    {desc}
                </div>
      </div>
      
               
 
        </>
    )
}
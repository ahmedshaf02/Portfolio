import React from 'react'
import './Stats.css';
import StatsCard from './StatsCard';



export default function Stats(){

    return(
    <>
            <br/><br/><br/>
        <div class='container'>
            <h1> </h1>
            <div class="p-3 mb-2 bg-info text-white  ">
                <div class='row mt-5 offset-1'>
                   <StatsCard 
                   
                   value ={1000}
                   time = "HOURS"
                   desc = "of full stack coding"
                   />
                   <StatsCard 
                   value ={200}
                   time = "HackerRank"
                   desc = "problems"
                   />
                   <StatsCard 
                   value ={600}
                   time = "GitHub"
                   desc = "Commits"
                   />
                   <StatsCard 
                  value ={20}
                   time = "Projects"
                   desc = "Small and Big"
                   />
                   <StatsCard 
                  value ={100}
                   time = "Hours"
                   desc = "of Soft Skills"
                   />
                </div>
            </div>
        </div>
    </>
    )
}
 

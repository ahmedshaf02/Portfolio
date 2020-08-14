import React from 'react'
import './Project.css';
import ProjectCard from './ProjectCard';



function Profile(){
  
    let obj = {
        images3: '/images/css-5.svg',
        images4: '/images/bootstrap-4.svg',
        images1: '/images/react.svg',
        // images6: '/images/redux.svg',
        images5: '/images/nodejs.svg',
        images2: '/images/mongodb.svg',
    }
    return(
        <>
        <div className="container mb-5">
            <h1 className="text-center text-dark "> Projects</h1>
            <div class='row mt-5 text-center'>
             <ProjectCard 
             projectName="Project 1"
             projectTitle = "EYO-Rooms"
             projectlink={"https://eyo.satishbonam.tech/"}
             projectImg = '/images/eyo.PNG'
             projectStackImages = {obj}
             projectDesc ="In collabaration made a OYO-rooms clone application named EYO-Rooms" 
             />

             
            <ProjectCard 
             projectName="Project 2"
             projectlink={"https://react-connect.ahmedshaf02.now.sh/"}
             projectTitle = "Shopihy-Connect"
             projectImg = '/images/react-connect.PNG'
             projectStackImages = {obj}
             projectDesc ="A shopping site primarily deals with household" 
             />

            <ProjectCard 
             projectName="Project 3"
             projectlink={"https://react-food-recipe-git-master.ahmedshaf02.vercel.app/"}
             projectTitle = "Live Food Recipe App"
             projectImg = '/images/foodrecipe.gif'
             projectStackImages = {obj}
             projectDesc ="An app to search live food recipe of your delicious food" 
             />
             
                
            <ProjectCard 
             projectName="Project 4"
             projectlink={"https://reservation-booking.vercel.app/"}
             projectTitle = "Table Reservation System"
             projectImg = '/images/shwarma.PNG'
             projectStackImages = {obj}
             projectDesc ="Build a Shwarma Restaurant Table Reservation System to book a table for a day" 
             />
             

    
            <ProjectCard 
             projectName="Project 5"
             projectTitle = "Instacalm"
             projectlink={"https://instacalm-app.herokuapp.com/"}
             projectImg = '/images/insta2.PNG'
             projectStackImages = {obj}
             projectDesc ="Made a Social post sharing application to share your post using MERN stack" 
             />


             

             <ProjectCard 
             projectName="Project 6"
             projectlink={"https://react-countdown.now.sh/"}
             projectTitle = "Live Countdown Timer"
             projectImg = '/images/count2.PNG'
             projectStackImages = {obj}
             projectDesc ="Countdown app to set your counter for specific date" 
             />
             <ProjectCard 
             projectName="Project 7"
             projectlink={"https://mybook-application.herokuapp.com/"}
             projectTitle = "Books Store App- CRUD"
             projectImg = '/images/node.PNG'
             projectStackImages = {obj}
             projectDesc ="A book store to register your book, an crud app with Node,MongoDB backend" 
             />
             <ProjectCard 
             projectName="Project 8"
             projectlink={"https://react-live-weather-app.ahmedshaf02.now.sh/"}
             projectTitle = "Live City Weather"
             projectImg = '/images/weather.PNG'
             projectStackImages = {obj}
             projectDesc ="Live Weather of your city along with other details." 
             />
        </div>
    </div>
        </>
    )
}
 
export default Profile;

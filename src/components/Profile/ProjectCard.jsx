import React from 'react'
import './Project.css';

 export default function ProjectCard(props){

    const { projectName, projectImg, projectTitle, projectDesc, projectStackImages,projectlink } = props;
    let arr =[]
    for(let i in projectStackImages){
        arr.push(projectStackImages[i])
    }
    console.log(arr)
    console.log("projectStackImages", projectStackImages)
    return(
        <>
               <div class ='col-12 col-sm-12 col-md-6 col-lg-4 mb-5 offset-sm-2 offset-md-3 offset-lg-0'>  
               <div class=" text-center text-sm-center mt-4">    
                    <h3 >{projectName}</h3></div>  
                    <div class="card mt-2  project shadow">
                        <a href={projectlink} target="_blank">
                            
                            <div className="imgBack">
                                <img src={projectImg} height="200" class="card-img-top  img-fluid p-2" alt="..."/>
                            </div>
                            <div class="text-center ">
                                <i class="fas fa-plus"></i>
                            </div>

                            <div class="card-body">
                                <h5 class="card-title text-center title-color"><a href="../portfolio/projects/Typewriter/keyboard.html">{projectTitle}</a> </h5>
                                <p class="card-text">{projectDesc}</p>
                            </div>
                        <div class="card-footer d-flex justify-content-center">
                            {arr.map(ele=>( 

                            <img src={ele} class="rounded iconFooter mr-2" alt="..."/>
                            ))}
                            
                        </div>
                        </a>
                </div>
            </div>
            
        </>
    )
}
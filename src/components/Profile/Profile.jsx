import React from 'react'
import style from './Profile.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
// import { faMarker, faMailBulk, faMobile } from "@fortawesome/free-solid-svg-icons";


function Profile(){

    return(
        <>
        <div className="container-fluid">
        <div className="row pl-5">
            <div className="bg-white col-md-12 col-lg-3 text-sm-center">
                <img />
                <h3 className="text-primary pt-5">Shafiq Ahmed</h3>
                <h6 className="fullStack pt-2">Full Stack Developer</h6>
                <i class="fas fa-map-marker-alt location pt-3"><span className="ml-2 location">Aurangabad, Maharashtra, India</span></i>
                <p className="desc pt-4 text-sm-center">A passionate aspiring Full Stack Developer skilled in front end JavaScript/ES6/ES2017 areas, moduled and shaped by Masai's intensive and immensive learning. Look forward to join a company where I shall be able to contribute towards individual and company growth.  </p>
                <i className="resume"><a href="/images/ShafiqAhmed.pdf" target="_blank"> View full Resume</a></i>
                <div className="contact pt-5">
                <i class="fas fa-phone-alt"></i> +91-9579593260 </div>
                <div className="contact pt-1"><i class="fas fa-envelope"></i> ahmedshaf02@gmail.com </div>
                <div className="row mt-5">
                <div className="col-sm-12 ">
                <a href="https://github.com/ahmedshaf02" target="_blank"><i class="fab fa-github-square socialIcon"></i></a> 
                
                <a href="https://www.hackerrank.com/ahmedshaf02" target="_blank"><i class="fab fa-hackerrank socialIcon"></i></a>

                <a href="https://www.linkedin.com/in/shafiqahmed02" target="_blank"><i class="fab fa-linkedin socialIcon"></i></a>

                <a href="https://twitter.com/shafiqahmed02" target="_blank"><i class="fab fa-twitter-square socialIcon"></i></a>
               </div></div>
            </div>   
            <div className="col-lg-1"></div>        
            <div className="rightHandProfile col-md-12 col-lg-8 ">
                <div className="pt-5 text-md-center text-sm-center text-center text-lg-left">
                <img src="/images/img.jpg" className="myImg" alt="profileImg" />
                <span className="smallCircle d-md-none d-none d-sm-none d-lg-inline"></span>
                </div>
               <div className='row pt-5 pl-5 text-md-center text-sm-center text-center'>
                    <div className=" col-sm-6 col-md-6 col-6 col-lg-3 mt-2">
                        <img src="/images/html-5.svg" alt="" className="html" />
                    </div>
                    <div className="col-sm-6 col-md-6 col-6 col-lg-3 mt-2">
                        <img src="/images/css-5.svg" alt="" className="icon" />
                    </div>
                    <div className="col-sm-6 col-md-6 col-6 col-lg-3 mt-2">
                        <img src="/images/javascript.svg" alt="" className="icon" />
                    </div>
                    <div className="col-sm-6 col-md-6 col-6 col-lg-3 mt-2">
                        <img src="/images/nodejs.svg" alt="" className="icon" />
                    </div>
               </div>
               <div className='row pt-5 pl-5 text-md-center text-sm-center text-center'>
                    <div className="col-sm-6 col-md-6 col-6 col-lg-3 mt-2">
                        <img src="/images/bootstrap-4.svg" alt="" className="icon" />
                    </div>
                    <div className="col-sm-6 col-md-6 col-6 col-lg-3 mt-2">
                        <img src="/images/react.svg" alt="" className="icon" />
                    </div>
                    <div className="col-sm-6 col-md-6 col-6 col-lg-3 mt-2">
                        <img src="/images/redux.svg" alt="" className="icon" />
                    </div>
                    <div className="col-sm-6 col-md-6 col-6 col-lg-3 mt-2 text-white">
                        <img src="/images/mongodb.svg" alt="" className="icon" />
                    </div>
               </div>
             
            </div>           
        </div>
        <hr  />
        </div>
        </>
    )
}
 
export default Profile;
import { useState } from "react";





import alexLogo from "../assets/SPICYSTUDIOSLOGO.png";
import alexLogo1 from "../assets/SPICYSTUDIOSWHITE.png";



import dayone from "../assets/dayone1.png";
import daytwo from "../assets/daytwo.png";
import daythree from "../assets/daythree.png";
import dayfour from "../assets/dayfour.png";
import dayfive from "../assets/dayfive.png";
import daysix from "../assets/daysix.png";
import dayseven from "../assets/dayseven.png";

import { Link, NavLink } from "react-router-dom";




import "../blog.css";
import React from "react";




const Projects = () => {
  

  return (

    
    
    <>
    <head>
<link rel="icon" type="image/png" href="/SPICYSTUDIOSWHITE.png" />
</head>


<header className="headerproj">

<nav>
  <a href="#" target="_blank">
  <img src={alexLogo1} className="logoalex" alt="Alex Logo" />
  </a>



  <input type="checkbox" id="menu-toggle"  />
  <label for="menu-toggle" class="menu-icon">
    <span></span>
  </label>


  <ul class="list">

 <li>
  <NavLink
    to="/Hero">HOME
  </NavLink>
  </li>

<li>
  <NavLink
    to="/About">ABOUT
  </NavLink>
  </li>


<li>
  <NavLink
    to="/Projects">PROJECTS
  </NavLink>
  </li>


  <li>
  <NavLink
    to="/Blog">BLOG
  </NavLink>
  </li>



  <li>
  <a href="https://drive.google.com/drive/folders/120V8HfIwN3rpQ0FeSH0XdHZN0_JVvUvH?usp=sharing" target="_blank" rel="noopener noreferrer">
    CERTIFICATES
  </a>
</li>









  <li>
  <NavLink
    to="/Experience">EXPERIENCE
  </NavLink>
  </li>




   
    
  </ul>
</nav>

<h1>Projects</h1>

</header>




<div className='blogsec' >

    <h1 className='about4' >
      BLOGSS
    </h1>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
  </div>



<div className="ewan1">

<div className="divbody">

<div className="bloggrid">
      <div className="blogcard">
   <img src={dayone} style={{ height: '250px' }}/>  
        <div className="blogcard__content">
        <h4 className="blogcard__header">Arrival in Manila.</h4>
          <div className="blogcard__text-wrapper">
            <p className="blogcard__text">
              SM MOA + DJM Dorm
            </p>
          </div>
          <NavLink to="/blog1" className="blogcard__btn">
  Read More <span>&rarr;</span>
</NavLink>
        </div>
      </div>

      <div className="blogcard">
      <img src={daytwo} style={{ height: '250px' }} />  
        <div className="blogcard__content">
        <h4 className="blogcard__header">Subic Extravaganza.</h4>
          <div className="blogcard__text-wrapper">
            <p className="blogcard__text">
            SBMA Law Enforcement Dept. + SBMA Seaport Dept.
            </p>
          </div>
          <NavLink to="/blog2" className="blogcard__btn">
  Read More <span>&rarr;</span>
</NavLink>
        </div>
      </div>






      <div className="blogcard">
      <img src={daythree} style={{ height: '250px' }} />  
        <div className="blogcard__content">
        <h4 className="blogcard__header">Museum Date.</h4>
          <div className="blogcard__text-wrapper">
            <p className="blogcard__text">
            Museo ni Manuel Quezon + National Museum of Natural History
            </p>
          </div>
          <NavLink to="/blog3" className="blogcard__btn">
  Read More <span>&rarr;</span>
</NavLink>
        </div>
      </div>

      <div className="blogcard">
      <img src={dayfour} style={{ height: '250px' }} />  
        <div className="blogcard__content">
          <h4 className="blogcard__header">A bank and a tech comp.</h4>
          <div className="blogcard__text-wrapper">
            <p className="blogcard__text">
              Bangko Sentral ng Pilipinas + Hytec Power Inc.
            </p>
          </div>
          <NavLink to="/blog4" className="blogcard__btn">
  Read More <span>&rarr;</span>
</NavLink>
        </div>
      </div>

      <div className="blogcard">
      <img src={dayfive} style={{ height: '250px' }} />          
      <div className="blogcard__content">
      <h4 className="blogcard__header">FAVORITE VISIT</h4>
          <div className="blogcard__text-wrapper">
            <p className="blogcard__text">
            Traffic Engineering Center + LRT 2
            </p>
          </div>
          <NavLink to="/blog5" className="blogcard__btn">
  Read More <span>&rarr;</span>
</NavLink>
        </div>
      </div>


      <div className="blogcard">
      <img src={daysix} style={{ height: '250px' }} />         
       <div className="blogcard__content">
          <h4 className="blogcard__header">The cold and the hot room</h4>
          <div className="blogcard__text-wrapper">
            <p className="blogcard__text">
             Strawberry Farm + Chinese Bell Church + PMA..
            </p>
          </div>
          <NavLink to="/blog6" className="blogcard__btn">
  Read More <span>&rarr;</span>
</NavLink>
        </div>
      </div>


      <div className="blogcard" style={{ height: '100%' }}>
      <img src={dayseven} style={{ height: '250px' }} />          
      <div className="blogcard__content">
      <h4 className="blogcard__header">Last Hurrah. </h4>
  
          <div className="blogcard__text-wrapper">
            <p className="blogcard__text">
            Back to Manila
            </p>
          </div>
          <NavLink to="/blog7" className="blogcard__btn">
  Read More <span>&rarr;</span>
</NavLink>
        </div>
      </div>










    </div>


</div>

</div>









    </>
  )
}

export default Projects
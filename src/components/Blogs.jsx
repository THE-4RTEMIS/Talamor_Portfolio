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




    <li><a href="#">CONTACT</a></li>
    
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
              Not much happened. Stayed in a room with people idk lol.
            </p>
          </div>
          <button className="blogcard__btn">Explore <span>&rarr;</span></button>
        </div>
      </div>

      <div className="blogcard">
      <img src={daytwo} style={{ height: '250px' }} />  
        <div className="blogcard__content">
        <h4 className="blogcard__header">Subic Extravaganza.</h4>
          <div className="blogcard__text-wrapper">
            <p className="blogcard__text">
            Explored a part of subic that is uninhabited by locals.
            </p>
          </div>
          <button className="blogcard__btn">Explore <span>&rarr;</span></button>
        </div>
      </div>






      <div className="blogcard">
      <img src={daythree} style={{ height: '250px' }} />  
        <div className="blogcard__content">
        <h4 className="blogcard__header">Museum Date.</h4>
          <div className="blogcard__text-wrapper">
            <p className="blogcard__text">
            My creative ahh is happy. Eventhough i was not able to see the spoliarium. I need to come back here.
            </p>
          </div>
          <button className="blogcard__btn" style={{ marginTop: '70px' }}>Explore <span>&rarr;</span></button>
        </div>
      </div>

      <div className="blogcard">
      <img src={dayfour} style={{ height: '250px' }} />  
        <div className="blogcard__content">
          <h4 className="blogcard__header">A bank and a tech comp.</h4>
          <div className="blogcard__text-wrapper">
            <p className="blogcard__text">
              There's not much pics in here since it was not allowed.
            </p>
          </div>
          <button className="blogcard__btn">Explore <span>&rarr;</span></button>
        </div>
      </div>

      <div className="blogcard">
      <img src={dayfive} style={{ height: '250px' }} />          
      <div className="blogcard__content">
      <h4 className="blogcard__header">FAVORITE VISIT</h4>
          <div className="blogcard__text-wrapper">
            <p className="blogcard__text">
            SRR 8, LRT. THAT'S IT.
            </p>
          </div>
          <button className="blogcard__btn">Explore <span>&rarr;</span></button>
        </div>
      </div>


      <div className="blogcard">
      <img src={daysix} style={{ height: '250px' }} />         
       <div className="blogcard__content">
          <h4 className="blogcard__header">The cold and the hot room</h4>
          <div className="blogcard__text-wrapper">
            <p className="blogcard__text">
             First time in baguio. I will comeback for sure.
            </p>
          </div>
          <button className="blogcard__btn">Explore <span>&rarr;</span></button>
        </div>
      </div>


      <div className="blogcard" style={{ height: '100%' }}>
      <img src={dayseven} style={{ height: '250px' }} />          
      <div className="blogcard__content">
      <h4 className="blogcard__header">Last Hurrah. </h4>
  
          <div className="blogcard__text-wrapper">
            <p className="blogcard__text">
            Got drunk with jaden and people i do not know. It was fun for a last day.
            </p>
          </div>
          <button className="blogcard__btn">Explore <span>&rarr;</span></button>
        </div>
      </div>










    </div>


</div>

</div>









    </>
  )
}

export default Projects
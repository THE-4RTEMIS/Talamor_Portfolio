import { useState } from "react";





import alexLogo from "../assets/SPICYSTUDIOSLOGO.png";
import alexLogo1 from "../assets/SPICYSTUDIOSWHITE.png";

import museum8 from "../assets/day3/museum8.jpg";


import { Link, NavLink } from "react-router-dom";




import "../About.css";
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
      ABOOUT
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


</div>
<div id="page">
  <div className="card">
    <div class="half half-left">
      <div className="img-container">
        <img src={museum8}  alt=""/>
      </div>
    </div>
    <div className="half half-right">
     
      <h4 className="name">Alexies D. Talamor</h4>
      <p>Graphic Artist, 3D Artist, & Frontend Developer</p>
      <br></br>
      <h3 className="bio">Bio</h3>
      <p>I'm a Graphic Artist, 3D Designer, and Frontend Developer obsessed with raw visuals and functional design. I build bold interfaces, sculpt digital form, and break the grid when it makes sense. My style leans Brutalist — unapologetic, minimal, and driven by clarity. Whether it’s a jagged 3D render or a stripped-back UI, I’m here to make things that hit hard and work smart.</p>
      <br></br>
      <h3 className="location">Location</h3>
      <p>Zamboanga City, Philippines</p>
      
    </div>
    <div className="triangle">
      <ul>
        <li><a href="https://www.facebook.com/alecs.talamor.08/"  className="fa fa-facebook " target="_blank" rel="noopener noreferrer"></a></li>
        <li><a href="https://x.com/4lecsees"  className="fa fa-twitter" target="_blank" rel="noopener noreferrer"></a></li>
        <li><a href="https://www.youtube.com/@NisaNuggets"  className="fa fa-youtube-play" target="_blank" rel="noopener noreferrer"></a></li>
        <li><a href="https://www.instagram.com/a.is.for.alecs/"  className="fa fa-instagram" target="_blank" rel="noopener noreferrer"></a></li>
        <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=talamoralexies03@gmail.com&subject=Hello&body=I wanted to reach out..."className="fa fa-google"target="_blank"rel="noopener noreferrer"></a></li>
        <li><a href="https://github.com/THE-4RTEMIS"  className="fa  fa-github-alt" target="_blank" rel="noopener noreferrer"></a></li>
      </ul>
     
  
</div>
</div>
</div>
</div>









    </>
  )
}

export default Projects
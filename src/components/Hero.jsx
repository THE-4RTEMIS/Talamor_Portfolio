import { useState } from "react";



import spicy2 from "../assets/SPICYSTUDIOSSTAR1.png";
import spicy3 from "../assets/SPICYSTUDIOSSTAR2.png";
import overlay from "../assets/overlay2.png";


import alexLogo from "../assets/SPICYSTUDIOSLOGO.png";
import alexLogo1 from "../assets/SPICYSTUDIOSWHITE.png";

import { Link, NavLink } from "react-router-dom";




import "../App.css";
import "../index.css";
import React from "react";




const Hero = () => {
  

  return (

    
    
    <>
    <head>
<link rel="icon" type="image/png" href="/SPICYSTUDIOSWHITE.png" />
</head>

<header>


<img src={overlay} className="overlay" alt="Alex Logo" />
  
<nav>
  <a href="#" target="_blank">
  <img src={alexLogo1} className="logoalex" alt="Alex Logo" />
  </a>


  <input type="checkbox" id="menu-toggle" />
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

     
  <div className="container">
    <div className="contalex">
    <img src={spicy2} className="spicy1" alt="Alex Logo" />
    <img src={spicy3} className="spicy2" alt="Alex Logo" />
      <a href="#">
        <img src={alexLogo} className="logo" alt="Alex Logo" />
      </a>
    </div>
  </div>
</header>


<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

<div className='aboutsec' id='aboutsection' >
  <div className="about-content">
    <h1 className='about0' id='about1'>
      You're looking at <span className='about1' >thee most fly Assian</span>, straight up.
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



    <h3 className='aboutme' id='aboutme'>
      I’m a developer and graphic artist who’s deep into 3D modeling and Brutalist design—think raw, bold, and in-your-face visuals. 
      I don’t do boring. Whether I’m coding up something sleek or messing with brutal textures, I keep it sharp and unapologetic. 
      If it ain't hitting hard, it ain't worth it. Let’s make something spicy.
    </h3>
 <br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

  </div>



</div>



    </>
  )
}

export default Hero
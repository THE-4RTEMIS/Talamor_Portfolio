import { useState } from 'react'
import alexLogo from './assets/SPICYSTUDIOSLOGO.png'
import alexLogo2 from './assets/091.png'
import spicywords from './assets/SPICYWORDS.png'
import alexLogo1 from '/SPICYSTUDIOSWHITE.png'
import nutshell from './assets/inanutshell.png'
import spicy2 from './assets/SPICYSTUDIOSSTAR1.png'
import spicy3 from './assets/SPICYSTUDIOSSTAR2.png'
import overlay from './assets/overlay2.png'
import './App.css'
import './index.css'
import React from "react";




function App() {
  
  const [count, setCount] = useState(0)
  const scrollToAbout = () => {
    document.getElementById("aboutsection").scrollIntoView({ behavior: "smooth" });
    
  };
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
    <li><a href="#about1">ABOUT</a></li>
    <li><a href="#">PROJECTS</a></li>
    <li><a href="#">CONTACT</a></li>
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




<div className='aboutsec' id='aboutsection'>
  <div className="about-content">
    <h1 className='about' id='about1'>
      You're looking at <span className='about1' >thee most fly Assian</span>, straight up.
    </h1>
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
  </div>



</div>

<div className="nutshell">
<h1 className="nutshell-heading">
IN A NUTSHELL
</h1>
  
</div>


<div className='ewan'></div>
    </>
  )
}

export default App
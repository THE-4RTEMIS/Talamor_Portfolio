import { useState } from 'react'
import alexLogo from './assets/SPICYSTUDIOSLOGO.png'
import wire1 from './assets/09.png'
import wire2 from './assets/21.png'
import spicywords from './assets/SPICYWORDS.png'
import alexLogo1 from './assets/SPICYSTUDIOSWHITE.png'

import spicy2 from './assets/SPICYSTUDIOSSTAR2.png'
import spicy3 from './assets/SPICYSTUDIOSSTAR3.png'

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
<link rel="icon" type="image/png" href="./assets/SPICYSTUDIOSWHITE.png" />
</head>

<nav>
      <a href="" target="_blank">
          <img src={alexLogo1} className="logoalex" alt="logo alex" />
        </a>
  
  <ul class="list">
  <li><a href="#" onClick={scrollToAbout}>About</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <button class="search">Search</button>
  <button class="menu">Menu</button>
</nav>

<a href="" target="_blank">
          <img src={spicy3} className="spicy2" alt="wire2" />
        </a>
<a href="" target="_blank">
          <img src={spicy2} className="spicy1" alt="wire1" />
        </a>

     
      <div className='contalex'>

        <a href="#" target="_blank">
          <img src={alexLogo} className="logo alex" alt="logo alex" />
        </a>

     
      </div>
      


      <div class="word">



      <div class="word-slide">
<img src={spicywords} className="word" />
<img src={spicywords} className="word" />
<img src={spicywords} className="word" />
<img src={spicywords} className="word" />
<img src={spicywords} className="word" />
<img src={spicywords} className="word" />
<img src={spicywords} className="word" />


</div>
<div class="word-slide">
<img src={spicywords} className="word" />
<img src={spicywords} className="word" />
<img src={spicywords} className="word" />
<img src={spicywords} className="word" />
<img src={spicywords} className="word" />
</div>


</div>
<div className='aboutsec' id='aboutsection' >
  <h1 className='about' >About me</h1>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
<h3 className='aboutme'><strong>You're looking at the most fly Asian, straight up. </strong>I’m a developer and graphic artist who’s deep into 3D modeling and Brutalist design—think raw, bold, and in-your-face visuals. I don’t do boring. Whether I’m coding up something sleek or messing with brutal textures in Blender, I keep it sharp and unapologetic. If it ain't hitting hard, it ain't worth it. Let’s make something spicy.</h3>
</div>

    </>
  )
}

export default App

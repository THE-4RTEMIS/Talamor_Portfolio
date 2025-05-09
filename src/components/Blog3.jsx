import { useState } from "react";






import alexLogo1 from "../assets/SPICYSTUDIOSWHITE.png";


import mnl1 from "../assets/day1/mnl1.jpg";
import mnl2 from "../assets/day1/mnl2.jpg";
import mnl3 from "../assets/day1/mnl3.jpg";
import mnl4 from "../assets/day1/mnl4.jpg";
import mnl5 from "../assets/day1/mnl5.jpg";
import mnl6 from "../assets/day1/mnl6.jpg";
import mnl7 from "../assets/day1/mnl7.jpg";
import mnl8 from "../assets/day1/mnl8.jpg";
import mnl9 from "../assets/day1/mnl9.jpg";
import mnl10 from "../assets/day1/mnl10.jpg";



import { Link, NavLink } from "react-router-dom";

import museum5 from "../assets/day3/museum5.jpg";
import museum6 from "../assets/day3/museum6.jpg";
import museum7 from "../assets/day3/museum7.jpg";
import museum8 from "../assets/day3/museum8.jpg";
import museum10 from "../assets/day3/museum10.jpg";
import museum13 from "../assets/day3/museum13.jpg";
import museum14 from "../assets/day3/museum14.jpg";
import museum17 from "../assets/day3/museum17.jpg";
import museum18 from "../assets/day3/museum18.jpg";
import museum26 from "../assets/day3/museum26.jpg";



import "../App.css";
import "../index.css";
import "../projects.css";
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




<div className='projsec' id='projsection' >

    <h1 className='about2' >
      DAY THREE
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




<div className='ewan'>




<div className="body1">
  

<div className="intro-text" style={{ width:'62%' }}>
  <p>As an artist, I never thought I’d say this, but today might’ve been one of the highlights of this whole tour. I know, hard to believe (even I’m still in denial), but this was actually my first time ever setting foot in a museum. Wild, right? First stop was the Museo ni Manuel Quezon, where we saw a bunch of historical artifacts including, get this, a Rolls-Royce Phantom V associated with Imelda Marcos. Apparently, it’s one of those ultra-rare limited editions and supposedly the most expensive car tied to a Philippine First Lady. My grandparents allegedly helped her buy it… totally sarcastic, of course. After that, we hit the National Museum of Natural History, which was a total vibe if you're into biology, zoology, or just cool things in glass cases. Sadly, we didn’t get to visit the National Museum of Fine Arts, so no Spoliarium for me, which hurt my little art soul. But still, I was genuinely, unexpectedly, ridiculously happy. I need to come back. Like, seriously, I owe my inner artist a proper museum redemption arc.</p>
</div>






<div className="blogsection" >

    <section >
        



<a href="#modal1" className="card1">
<div className="card1__img">  
  <img src={museum5} />
  <div className="card1__overlay">
  </div>
  </div>
</a>




<a href="#modal2" className="card1">
  <div className="card1__img">  
    <img src={museum8} />        
    <div className="card1__overlay">

    </div>
    </div>
  </a>



<a href="#modal3" className="card1">
<div className="card1__img">  
<img src={museum7} />  
  <div className="card1__overlay">
  </div>
  </div>
</a>



<a href="#modal4" className="card1">
<div className="card1__img">  
<img src={museum6} />        
  <div className="card1__overlay">
  </div>
  </div>
</a>



<a href="#modal5" className="card1">
  <div className="card1__img">  
  <img src={museum10} />  
    <div className="card1__overlay">
    </div>
    </div>
  </a>



<a href="#modal6" className="card1">
<div className="card1__img">  
<img src={museum17} />       
  <div className="card1__overlay">

  </div>
  </div>
</a>



<a href="#modal7" className="card1">
<div className="card1__img">  
<img src={museum13} />         
  <div className="card1__overlay">

  </div>
  </div>
</a>



<a href="#modal8" className="card1">
<div className="card1__img">  
<img src={museum14} />         
  <div className="card1__overlay">
  
  </div>
</div>
</a>



<a href="#modal9" className="card1">
<div className="card1__img">  
<img src={museum18} />         
  <div className="card1__overlay">


  </div>
</div>
</a>



<a href="#modal10" className="card1">
<div className="card1__img">  
<img src={museum26} />        
  <div className="card1__overlay">
 
  </div>
</div>
</a>





<div id="modal1" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={museum5}  className="modal-content"/> 
</div>


<div id="modal2" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={museum8} className="modal-content"/>  
</div>

<div id="modal3" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={museum7}  className="modal-content"/> 
</div>

<div id="modal4" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={museum6}     className="modal-content"/> 
</div>

<div id="modal5" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={museum10}  className="modal-content"/>    
</div>

<div id="modal6" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={museum17} className="modal-content"/> 
</div>



<div id="modal7" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={museum13}   className="modal-content" /> 
</div>

<div id="modal8" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={museum14} className="modal-content"/> 
</div>


<div id="modal9" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={museum18} className="modal-content"/> 
</div>

<div id="modal10" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={museum26}    className="modal-content"/>
</div>










    </section>
    </div>
    


</div>

</div>




{/*second section*/}




    </>
  )
}

export default Projects
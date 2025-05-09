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
      DAY OONE
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
  

<div className="intro-text">
  <p>Just touched down in Manila for our educational tour, and not gonna lie, day one was kind of a snoozefest. The whole day felt like a warm-up, nothing too crazy. We checked in, got our room assignments, and I ended up bunking with people I barely know, which was a little awkward at first. It’s that weird mix of trying to be chill while silently wondering who snores. Later in the afternoon, we went to SM Mall of Asia. We didn’t really have an agenda, so we just wandered around, grabbed some snacks, took a bunch of random pictures, and tried not to get lost in that maze of a mall. It felt more like a casual hangout than part of a tour, but it was a nice way to ease into things. Even though not much happened, there’s this buzz of excitement under the surface, I know the real adventure hasn’t even started yet, and I’m honestly looking forward to whatever chaos and memories the next few days will bring.</p>
</div>






<div className="blogsection" >

    <section >
        



<a href="#modal1" className="card1">
<div className="card1__img">  
  <img src={mnl10} />
  <div className="card1__overlay">

  </div>
  </div>
</a>




<a href="#modal2" className="card1">
  <div className="card1__img">  
    <img src={mnl2} />        
    <div className="card1__overlay">

    </div>
    </div>
  </a>



<a href="#modal3" className="card1">
<div className="card1__img">  
<img src={mnl8} />  
  <div className="card1__overlay">

  </div>
  </div>
</a>



<a href="#modal4" className="card1">
<div className="card1__img">  
<img src={mnl6} />        
  <div className="card1__overlay">

  </div>
  </div>
</a>



<a href="#modal5" className="card1">
  <div className="card1__img">  
  <img src={mnl3} />  
    <div className="card1__overlay">
    </div>
    </div>
  </a>



<a href="#modal6" className="card1">
<div className="card1__img">  
<img src={mnl1} />       
  <div className="card1__overlay">
  </div>
  </div>
</a>



<a href="#modal7" className="card1">
<div className="card1__img">  
<img src={mnl4} />         
  <div className="card1__overlay">

  </div>
  </div>
</a>



<a href="#modal8" className="card1">
<div className="card1__img">  
<img src={mnl5} />         
  <div className="card1__overlay">

  </div>
</div>
</a>



<a href="#modal9" className="card1">
<div className="card1__img">  
<img src={mnl7} />         
  <div className="card1__overlay">


  </div>
</div>
</a>



<a href="#modal10" className="card1">
<div className="card1__img">  
<img src={mnl9} />        
  <div className="card1__overlay">

  </div>
</div>
</a>





<div id="modal1" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={mnl10}  className="modal-content"/> 
</div>


<div id="modal2" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={mnl2}   className="modal-content"/>  
</div>

<div id="modal3" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={mnl8}   className="modal-content"/> 
</div>

<div id="modal4" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={mnl6}    className="modal-content"/> 
</div>

<div id="modal5" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={mnl3}  className="modal-content"/>    
</div>

<div id="modal6" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={mnl1}  className="modal-content"/> 
</div>



<div id="modal7" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={mnl4}    className="modal-content" /> 
</div>

<div id="modal8" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={mnl5}  className="modal-content"/> 
</div>


<div id="modal9" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={mnl7} className="modal-content"/> 
</div>

<div id="modal10" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={mnl9}     className="modal-content"/>
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
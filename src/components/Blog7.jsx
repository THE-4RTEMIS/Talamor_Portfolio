import { useState } from "react";






import alexLogo1 from "../assets/SPICYSTUDIOSWHITE.png";


import bag1 from "../assets/day6/bag1.jpg";
import bag2 from "../assets/day6/bag2.jpg";
import bag3 from "../assets/day6/bag3.jpg";
import bag4 from "../assets/day6/bag4.jpg";
import bag5 from "../assets/day6/bag5.jpg";
import bag6 from "../assets/day6/bag6.jpg";
import bag7 from "../assets/day6/bag7.jpg";
import bag8 from "../assets/day6/bag8.jpg";
import bag9 from "../assets/day6/bag9.jpg";
import bag10 from "../assets/day6/bag10.jpg";


import { Link, NavLink } from "react-router-dom";


import uwi1 from "../assets/day7/uwi1.jpg";
import uwi2 from "../assets/day7/uwi2.jpg";
import uwi3 from "../assets/day7/uwi3.jpg";
import uwi4 from "../assets/day7/uwi4.jpg";
import uwi5 from "../assets/day7/uwi5.jpg";
import uwi6 from "../assets/day7/uwi6.jpg";
import uwi7 from "../assets/day7/uwi7.jpg";
import uwi8 from "../assets/day7/uwi8.jpg";
import uwi9 from "../assets/day7/uwi19.jpg";


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
      DDAY SEVEN
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
  

<div className="intro-text" style={{ width:'100%' }}>
  <p>Last day of the tour and thank God. Not because I hated it, but because I’m tired, broke, and emotionally hungover in every way possible. But if there’s one thing that made this entire chaotic ride actually bearable, it’s Jaden. This isn’t even about the trip anymore, this is about him. My unhinged twin flame, the only person who matched my energy without even trying. No questions asked, no explanations needed, he just got it.
<br></br><br></br>
Every late-night rant session at 7/11 felt like a free podcast no one asked for but everyone lowkey needed. People were definitely staring, and honestly? Let them. We were out there trauma-dumping like it was a sport. Those nights hit harder than any tourist spot or guided tour ever could. Real talk, those convos were the real highlight.
<br></br><br></br>
Getting drunk with him for the first time? Top-tier core memory. I’m already manifesting more nights like that, less filtered, more chaotic. I don’t even know if he’ll ever read this, but if he does, he already knows. He’s seen the best, the worst, and the downright feral parts of me. Best boy. Certified. No one comes close.</p>
</div>






<div className="blogsection" >

    <section >
        



<a href="#modal1" className="card1">
<div className="card1__img">  
  <img src={uwi1} />
  <div className="card1__overlay">
  </div>
  </div>
</a>




<a href="#modal2" className="card1">
  <div className="card1__img">  
  <img src={uwi5} />        
    <div className="card1__overlay">

    </div>
    </div>
  </a>



<a href="#modal3" className="card1">
<div className="card1__img">  
<img src={uwi2} />  
  <div className="card1__overlay">
  </div>
  </div>
</a>



<a href="#modal4" className="card1">
<div className="card1__img">  
<img src={uwi4} />        
  <div className="card1__overlay">
  </div>
  </div>
</a>



<a href="#modal5" className="card1">
  <div className="card1__img">  
  <img src={uwi3} />  
    <div className="card1__overlay">
    </div>
    </div>
  </a>



<a href="#modal6" className="card1">
<div className="card1__img">  
<img src={uwi6} />       
  <div className="card1__overlay">

  </div>
  </div>
</a>



<a href="#modal7" className="card1">
<div className="card1__img">  
<img src={uwi7} />         
  <div className="card1__overlay">

  </div>
  </div>
</a>



<a href="#modal8" className="card1" >
<div className="card1__img">  
<img src={uwi8} />         
  <div className="card1__overlay">
  
  </div>
</div>
</a>



<a href="#modal9" className="card1">
<div className="card1__img">  
<img src={uwi9} />         
  <div className="card1__overlay">


  </div>
</div>
</a>



<a href="#modal10" className="card1"style={{ visibility: 'hidden' }}>
<div className="card1__img">  
<img src={uwi8} />        
  <div className="card1__overlay">
 
  </div>
</div>
</a>





<div id="modal1" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={uwi1}  className="modal-content"/> 
</div>


<div id="modal2" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={uwi5} className="modal-content"/>  
</div>

<div id="modal3" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={uwi2}  className="modal-content"/> 
</div>

<div id="modal4" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={uwi4}      className="modal-content"/> 
</div>

<div id="modal5" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={uwi3}   className="modal-content"/>    
</div>

<div id="modal6" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={uwi6} className="modal-content"/> 
</div>



<div id="modal7" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={uwi7}   className="modal-content" /> 
</div>

<div id="modal8" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={uwi9} className="modal-content"/> 
</div>


<div id="modal9" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={bag7} className="modal-content"/> 
</div>

<div id="modal10" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={bag6}   className="modal-content"/>
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
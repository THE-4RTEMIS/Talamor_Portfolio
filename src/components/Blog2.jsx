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





import subic1 from "../assets/day2/subic1.jpg";
import subic2 from "../assets/day2/subi2.jpg";
import subic3 from "../assets/day2/subic3.jpg";
import subic4 from "../assets/day2/subic4.jpg";
import subic5 from "../assets/day2/subic5.jpg";
import subic6 from "../assets/day2/subic6.jpg";












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
      DDAY TWO
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
  

<div className="intro-text" style={{  width: '100%' }}>
  <p>Day 2 was a whole shift—we left the city noise behind and headed to Subic, which was actually my first time there. Gotta say, the place is stunning in that “hidden gem” kind of way. It’s super clean, super chill, and kinda feels like a ghost town because it’s so isolated—like, barely any people walking around, which was lowkey weird but also peaceful. First stop was the SBMA Law Enforcement Department, aka their version of a police HQ. Then we hit up the SBMA Seaport Department and got a peek at how they handle all the behind-the-scenes port stuff. Not exactly action-packed, but it was cool seeing how tight and organized everything is. Subic gave off major “calm before the storm” vibes—quiet, structured, and totally different from the city chaos we’re used to.</p>
</div>






<div className="blogsection" >

    <section >
        



<a href="#modal1" className="card1">
<div className="card1__img">  
  <img src={subic1} />
  <div className="card1__overlay">
  </div>
  </div>
</a>




<a href="#modal2" className="card1">
  <div className="card1__img">  
    <img src={subic5} />        
    <div className="card1__overlay">
    </div>
    </div>
  </a>



<a href="#modal3" className="card1">
<div className="card1__img">  
<img src={subic3} />  
  <div className="card1__overlay">
  </div>
  </div>
</a>



<a href="#modal4" className="card1">
<div className="card1__img">  
<img src={subic6} />        
  <div className="card1__overlay">

  </div>
  </div>
</a>



<a href="#modal5" className="card1">
  <div className="card1__img">  
  <img src={subic4} />  
    <div className="card1__overlay">

    </div>
    </div>
  </a>



<a href="#modal6" className="card1">
<div className="card1__img">  
<img src={subic2} />       
  <div className="card1__overlay">
  </div>
  </div>
</a>



<a href="#modal7" className="card1"  style={{ visibility: 'hidden' }}>
<div className="card1__img">  
<img src={subic6} />         
  <div className="card1__overlay">

  </div>
  </div>
</a>



<a href="#modal8" className="card1"  style={{ visibility: 'hidden' }}>
<div className="card1__img">  
<img src={subic5} />         
  <div className="card1__overlay">

  </div>
</div>
</a>



<a href="#modal9" className="card1"  style={{ visibility: 'hidden' }}>
<div className="card1__img">  
<img src={subic4} />         
  <div className="card1__overlay">

    <p>Video</p>
  </div>
</div>
</a>



<a href="#modal10" className="card1"  style={{ visibility: 'hidden' }}>
<div className="card1__img">  
<img src={subic3} />        
  <div className="card1__overlay">

  </div>
</div>
</a>





<div id="modal1" className="modal" >
<a href="#" className="modal-close">&times;</a>
<img src={subic1}  className="modal-content"/> 
</div>


<div id="modal2" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={subic5}  className="modal-content"/>  
</div>

<div id="modal3" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={subic3}    className="modal-content"/> 
</div>

<div id="modal4" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={subic6}   className="modal-content"/> 
</div>

<div id="modal5" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={subic4} className="modal-content"/>    
</div>

<div id="modal6" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={subic2}  className="modal-content"/> 
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
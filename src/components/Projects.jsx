import { useState } from "react";






import alexLogo1 from "../assets/SPICYSTUDIOSWHITE.png";
import project3 from "../assets/projects/belnd.png";
import project4 from "../assets/projects/donut.png";
import project6 from "../assets/projects//motomami.png";
import project8 from "../assets/projects/Talamor_Collage.png";
import project9 from "../assets/projects/TALAMOR_FLYER.png";
import project10 from "../assets/projects/Talamor_AdvocacyPoster.png";
import project11 from "../assets/projects/Talamor_SportsPoster.png";
import project12 from "../assets/projects/frontcoverfinal.png";
import project13 from "../assets/projects/TALAMOR_TYPOGRAPHY.png";
import project14 from "../assets/projects/inanutshell.png";


import project15 from "../assets/vids/donutvid.mp4";
import project16 from "../assets/vids/motomamivid.mp4";
import project17 from "../assets/vids/alexblend.mp4";



import project18 from "../assets/projects/pokedex.png";
import project19 from "../assets/projects/todolist.png";


import githubb from "../assets/github-sign.png";





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
      PROOJECTS
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
  
    <section>
        



<a href="#modal1" className="card1">
<div className="card1__img">  
  <img src={project4} />
  <div className="card1__overlay">
    <h4 className="h2o">3D Donut</h4>
    <p>Video</p>
  </div>
  </div>
</a>




<a href="#modal5" className="card1">
  <div className="card1__img">  
    <img src={project10} />        
    <div className="card1__overlay">
    <h4 className="h2o">Advocacy Poster</h4>
      <p>Second render with a human subject</p>
    </div>
    </div>
  </a>



<a href="#modal3" className="card1">
<div className="card1__img">  
<img src={project11} />  
  <div className="card1__overlay">
  <h4 className="h2o">Palaro 2024</h4>
    <p>Sports Poster</p>
  </div>
  </div>
</a>



<a href="#modal4" className="card1">
<div className="card1__img">  
<img src={project8} />        
  <div className="card1__overlay">
  <h4 className="h2o">3D Portrait</h4>
    <p>My first render with a human subject</p>
  </div>
  </div>
</a>



<a href="#modal2" className="card1">
  <div className="card1__img">  
  <img src={project9} />  
    <div className="card1__overlay">
    <h4 className="h2o">143</h4>
      <p>Poster Redesign</p>
    </div>
    </div>
  </a>



<a href="#modal6" className="card1">
<div className="card1__img">  
<img src={project3} />       
  <div className="card1__overlay">
  <h4 className="h2o">Chrome Text</h4>
    <p>Video</p>
  </div>
  </div>
</a>



<a href="#modal7" className="card1">
<div className="card1__img">  
<img src={project12} />         
  <div className="card1__overlay">
  <h4 className="h2o">Portfolio Cover</h4>
    <p>When i first met brutalism</p>
  </div>
  </div>
</a>



<a href="#modal8" className="card1">
<div className="card1__img">  
<img src={project13} />         
  <div className="card1__overlay">
  <h4 className="h2o">Typography Art</h4>
    <p>Made out of halley's comet lyrics</p>
  </div>
</div>
</a>



<a href="#modal9" className="card1">
<div className="card1__img">  
<img src={project6} />         
  <div className="card1__overlay">
  <h4 className="h2o">3D Logo</h4>
    <p>Video</p>
  </div>
</div>
</a>



<a href="#modal10" className="card1">
<div className="card1__img">  
<img src={project14} />        
  <div className="card1__overlay">
  <h4 className="h2o">Random brutalist art</h4>
    <p>Just because</p>
  </div>
</div>
</a>




<div id="modal1" className="modal">
<a href="#" className="modal-close">&times;</a>
<video className="modal-content" controls autoPlay loop muted>
    <source src={project15} type="video/mp4" />

  </video>
</div>


<div id="modal2" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={project10}   className="modal-content"/>  
</div>

<div id="modal3" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={project11}   className="modal-content"/> 
</div>

<div id="modal4" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={project8}    className="modal-content"/> 
</div>

<div id="modal5" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={project9} className="modal-content"/>    
</div>

<div id="modal6" className="modal">
<a href="#" className="modal-close">&times;</a>
<video className="modal-content" controls autoPlay loop muted>
    <source src={project17} type="video/mp4" />

  </video>
</div>



<div id="modal7" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={project12}   className="modal-content" /> 
</div>

<div id="modal8" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={project13}   className="modal-content"/> 
</div>


<div id="modal9" className="modal">
<a href="#" className="modal-close">&times;</a>
<video className="modal-content" controls autoPlay loop muted>
    <source src={project16} type="video/mp4" />

  </video>
</div>

<div id="modal10" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={project14}     className="modal-content"/>
</div>











    </section>

</div>
</div>



<br>
</br>
<br>
</br>
<br>
</br>
<br>
</br>
<br>
</br>




{/*second section*/}

<div className='ewan1'>

<div className="body2">
  
    <section className="section2">
        


    <a className="card1">
  <div className="card1__img">
    {/* GitHub Button */}
    <a
      href="https://github.com/THE-4RTEMIS/MyPokedex" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="github-button"
    >
      Go to GitHub
    </a>

    <img src={project18} alt="Pokedex Preview" />
    <div className="card1__overlay">
      <h4 className="h2o">Pokedex</h4>
      <p>React.js + Poke.api</p>
    </div>
  </div>
</a>




<a className="card1">
<div className="card1__img">
    {/* GitHub Button */}
    <a
      href="https://github.com/THE-4RTEMIS/To-do-List" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="github-button"
    >
      Go to GitHub
    </a>
    <img src={project19} />        
    <div className="card1__overlay">
    <h4 className="h2o">To-do list</h4>
      <p>React.js + Tailwind.css</p>
    </div>
    </div>
  </a>



<a href="#modal3" className="card1" style={{ visibility: "hidden" }}>
<div className="card1__img">  
<img src={project11} />  
  <div className="card1__overlay">
  <h4 className="h2o">Palaro 2024</h4>
    <p>Sports Poster</p>
  </div>
  </div>
</a>



<a href="#modal4" className="card1" style={{ visibility: "hidden" }}>
<div className="card1__img">  
<img src={project8} />        
  <div className="card1__overlay">
  <h4 className="h2o">3D Portrait</h4>
    <p>My first render with a human subject</p>
  </div>
  </div>
</a>



<a href="#modal2" className="card1" style={{ visibility: "hidden" }}>
  <div className="card1__img">  
  <img src={project9} />  
    <div className="card1__overlay">
    <h4 className="h2o">143</h4>
      <p>Poster Redesign</p>
    </div>
    </div>
  </a>



<a href="#modal6" className="card1" style={{ visibility: "hidden" }}>
<div className="card1__img">  
<img src={project3} />       
  <div className="card1__overlay">
  <h4 className="h2o">Chrome Text</h4>
    <p>Video</p>
  </div>
  </div>
</a>



<a href="#modal7" className="card1" style={{ visibility: "hidden" }}>
<div className="card1__img">  
<img src={project12} />         
  <div className="card1__overlay">
  <h4 className="h2o">Portfolio Cover</h4>
    <p>When i first met brutalism</p>
  </div>
  </div>
</a>



<a href="#modal8" className="card1" style={{ visibility: "hidden" }}>
<div className="card1__img">  
<img src={project13} />         
  <div className="card1__overlay">
  <h4 className="h2o">Typography Art</h4>
    <p>Made out of halley's comet lyrics</p>
  </div>
</div>
</a>



<a href="#modal9" className="card1" style={{ visibility: "hidden" }}>
<div className="card1__img">  
<img src={project6} />         
  <div className="card1__overlay">
  <h4 className="h2o">3D Logo</h4>
    <p>Video</p>
  </div>
</div>
</a>



<a href="#modal10" className="card1" style={{ visibility: "hidden" }}>
<div className="card1__img">  
<img src={project14} />        
  <div className="card1__overlay">
  <h4 className="h2o">Random brutalist art</h4>
    <p>Just because</p>
  </div>
</div>
</a>




<div id="modal1" className="modal">
<a href="#" className="modal-close">&times;</a>
<video className="modal-content" controls autoPlay loop muted>
    <source src={project15} type="video/mp4" />

  </video>
</div>


<div id="modal2" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={project10}   className="modal-content"/>  
</div>

<div id="modal3" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={project11}   className="modal-content"/> 
</div>

<div id="modal4" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={project8}    className="modal-content"/> 
</div>

<div id="modal5" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={project9} className="modal-content"/>    
</div>

<div id="modal6" className="modal">
<a href="#" className="modal-close">&times;</a>
<video className="modal-content" controls autoPlay loop muted>
    <source src={project17} type="video/mp4" />

  </video>
</div>



<div id="modal7" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={project12}   className="modal-content" /> 
</div>

<div id="modal8" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={project13}   className="modal-content"/> 
</div>


<div id="modal9" className="modal">
<a href="#" className="modal-close">&times;</a>
<video className="modal-content" controls autoPlay loop muted>
    <source src={project16} type="video/mp4" />

  </video>
</div>

<div id="modal10" className="modal">
<a href="#" className="modal-close">&times;</a>
<img src={project14}     className="modal-content"/>
</div>











    </section>

</div>
</div>





    </>
  )
}

export default Projects
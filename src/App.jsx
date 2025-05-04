import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Blog from "./components/Blogs.jsx";
import Blog1 from "./components/Blog1.jsx";
import Blog2 from "./components/Blog2.jsx";
import Blog3 from "./components/Blog3.jsx";
import Blog4 from "./components/Blog4.jsx";
import Blog5 from "./components/Blog5.jsx";
import Blog6 from "./components/Blog6.jsx";
import Blog7 from "./components/Blog7.jsx";
import Experience from "./components/Experience.jsx";


function App() {
  return (
    <div className="app-container">
    
      <Routes>
  <Route path="/" element={<Hero />} />
  <Route path="/Hero" element={<Hero />} />
  <Route path="/About" element={<About />} />
  <Route path="/Blog" element={<Blog />} />
  <Route path="/Projects" element={<Projects />} />
  <Route path="/Blog1" element={<Blog1 />} />
  <Route path="/Blog2" element={<Blog2 />} />
  <Route path="/Blog3" element={<Blog3 />} />
  <Route path="/Blog4" element={<Blog4 />} />
  <Route path="/Blog5" element={<Blog5 />} />
  <Route path="/Blog6" element={<Blog6 />} />
  <Route path="/Blog7" element={<Blog7 />} />
  <Route path="/Experience" element={<Experience />} />
</Routes>
    </div>
  );

    <>
    <head>
<link rel="icon" type="image/png" href="/SPICYSTUDIOSWHITE.png" />
</head>

<header>

  
<nav>

<a href="" target="_blank">
    <img src={alexLogo1} className="logoalex" alt="logo alex" />
  </a>

<ul class="list">
<li><a href="#" onClick={scrollToAbout}>About</a></li>
<li><a href="#">Projects</a></li>
<li><a href="#">Contact</a></li>
</ul>

</nav>

     
  <div className="container">
    <div className="contalex">
      <a href="#">
        <img src={alexLogo} className="logo alex" alt="Alex Logo" />
      </a>
    </div>
  </div>
</header>




<div className='aboutsec' id='aboutsection'>
  <div className="about-content">
    <h1 className='about'>
      You're looking at <span className='about1'>thee most fly Assian</span>, straight up.
    </h1>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

    <h3 className='aboutme'>
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
  <img src={nutshell}  alt="logo alex" />
</div>

    </>
  

}

export default App;
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Blog from "./components/Blogs.jsx";


function App() {
  return (
    <div className="app-container">
    
      <Routes>
  <Route path="/" element={<Hero />} />
  <Route path="/Hero" element={<Hero />} />
  <Route path="/About" element={<About />} />
  <Route path="/Blog" element={<Blog />} />
  <Route path="/Projects" element={<Projects />} />
</Routes>
    
    </div>
  );
}

export default App;
import { useState } from 'react'
import alexLogo from './assets/ALEXLOGO1.png'
import wire1 from './assets/09.png'
import wire2 from './assets/21.png'
import alexLogo1 from './assets/ALEXLOGOoutline.png'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<nav>
      <a href="" target="_blank">
          <img src={alexLogo1} className="logoalex" alt="logo alex" />
        </a>
  
  <ul class="list">
    <li><a href="#">About</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <button class="search">Search</button>
  <button class="menu">Menu</button>
</nav>

<a href="" target="_blank">
          <img src={wire2} className="wire2" alt="wire2" />
        </a>
<a href="" target="_blank">
          <img src={wire1} className="wire1" alt="wire1" />
        </a>

     
      <div className='contalex'>
  <h1>Hi i'm</h1>
        <a href="#" target="_blank">
          <img src={alexLogo} className="logo alex" alt="logo alex" />
        </a>

        <h2>Talamor</h2>
      </div>
      
    

    </>
  )
}

export default App

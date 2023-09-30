
import './App.css';

import logo from "./Assets/ibwhite.svg"

function App() {
  return (
    <main>
      <header className='header-container'>
        
        <img className = "logo" src={logo}></img>
        <nav className ='menu-options'>
        
        <a>Home</a>
        <a>Projects</a>
        <a>About Me</a>
        </nav>
        <button class="glow-on-hover" type="button">Contact me!</button>
        
      </header>


      <div class="div1">
      <div class="table-display">
        <div class="cell-display div2"></div>
        <div class="cell-display">
          <div class="div3"></div>
          <div class="div4"></div>
        </div>
      </div>
    </div>
    </main>
    
    


  );
}

export default App;

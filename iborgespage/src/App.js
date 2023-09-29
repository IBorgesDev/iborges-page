
import './App.css';

import logo from "./Assets/ibwhite.svg"

function App() {
  return (
    <main>
      <header className='header-container'>
        <img src={logo}></img>
        <nav className ='menu-options'>
        
        <a>Home</a>
        <a>Projects</a>
        <a>About Me</a>
        </nav>
        <button>Contact Me</button>
      </header>
    </main>
    
    


  );
}

export default App;

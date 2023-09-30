import './App.css';
import logo from "./Assets/ibwhite.svg"

function App() {
  return (
    <main>
      <header className='header-container'>
        {/* Provide meaningful alt text for the image */}
        <img className="logo" src={logo} alt="IBorgesDev Logo" />
        <nav className='menu-options'>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About Me</a>
        </nav>
        <button className="glow-on-hover" type="button">Contact me!</button>
      </header>
      
      <div className="div1">
        <div className="table-display">
          <div className="cell-display div2"></div>
          <div className="cell-display">
            <div className="div3"></div>
            <div className="div4"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

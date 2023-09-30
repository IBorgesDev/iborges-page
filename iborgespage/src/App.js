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
    </main>
  );
}

export default App;

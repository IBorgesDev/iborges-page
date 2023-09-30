import './App.css';
import logo from "./Assets/ibwhite.svg"

function App() {
  return (
    <main>
      <header className='header-container'>
        {/* Provide meaningful alt text for the image */}
        <img className="logo" src={logo} alt="IBorgesDev Logo" />
        <nav className='menu-options'>
          <a href="Home">Home</a>
          <a href="Projects">Projects</a>
          <a href="About">About Me</a>
        </nav>
        <button className="glow-on-hover" type="button">Contact me!</button>
        
      </header>
      <div className='content-container'>
            <h1>Who am i?</h1>
            <h2>My name is Ícaro Borges</h2>
            <h3>Software Engineer</h3>
            <h1>Tools and Languages</h1>
        </div>
    </main>
  );
}

export default App;

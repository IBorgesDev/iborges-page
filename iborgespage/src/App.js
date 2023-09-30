import './App.css';
import logo from "./Assets/ibwhite.svg"
import photo from "./Assets/iphoto.jpg"

function App() {
  return (
    <main>
      <header className='header-container'>
        <img className="logo" src={logo} alt="IBorgesDev Logo" />
        <nav className='menu-options'>
          <a href="Home">Home</a>
          <a href="Projects">Projects</a>
          <a href="About">About Me</a>
        </nav>
        <button className="glow-on-hover" type="button">Contact me!</button>
      </header>
    
      <div class="my-element">
        <div class="who">
          <h1> Who am I.</h1>
        </div>
        <div class="box1">
          <h1> </h1>
          <h1>Icaro Borges <br/><span>Software Engineer</span></h1>
          </div>
        <div class="box3"><img src = {photo} alt= "Icaro Borges"></img></div>
       
        </div>
    
    </main>
  );
}

export default App;

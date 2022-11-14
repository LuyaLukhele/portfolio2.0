import HomePage from "./compnents/HomePage";
import NavBar from "./compnents/NavBar";
import About from "./compnents/About";
import Projects from "./compnents/Projects";
import PlayGround from "./compnents/PlayGround";
import Skills from "./compnents/Skills";
import Contact from "./compnents/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <HomePage/>
      <About/>
      <Projects/>
      <Skills/>
      <PlayGround/>
      <Contact/>
    </div>
  );
}

export default App;

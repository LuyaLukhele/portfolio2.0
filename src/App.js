import HomePage from "./compnents/HomePage";
import NavBar from "./compnents/NavBar";
import About from "./compnents/About";
import Projects from "./compnents/Projects";
import PlayGround from "./compnents/PlayGround";


 

function App() {
  return (
    <div>
      <NavBar />
      <HomePage/>
      <About/>
      <Projects/>
      <PlayGround/>
    </div>
  );
}

export default App;

import "./App.css";
import About from "./Components/About";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ProjectsDisplay from "./Components/ProjectsDisplay";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex items-center justify-center flex-col">
        <AboutMe />
      </div>
      <div className="m-20 ">
        <ProjectsDisplay />
      </div>
      <div className="">
        <About />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;

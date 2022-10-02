import "./App.css";
import AboutMe from "./Components/AboutMe";
import Navbar from "./Components/Navbar";
import ProjectsDisplay from "./Components/ProjectsDisplay";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex items-center justify-center flex-col">
        <AboutMe />
      </div>
      <div className="mt-20 w-full ">
        <ProjectsDisplay />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import AboutMe from "./Components/AboutMe";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex items-center justify-center">
        <AboutMe />
      </div>
    </div>
  );
}

export default App;

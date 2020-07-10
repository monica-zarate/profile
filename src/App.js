import React from "react";
import "./components/styles/main.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <About />
        <Contact />
        <Projects />
      </div>
    );
  }
}

export default App;

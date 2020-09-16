import React from "react";
import "./components/styles/main.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>
    );
  }
}

export default App;

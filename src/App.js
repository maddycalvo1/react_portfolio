import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './folio';
import About from './folio/about';
import Projects from './folio/projects';
import Resume from './folio/resume';


function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/Projects" exact component={Projects} />
        <Route path="/Resume" exact component={Resume} />
      </Switch>
    </Router>
  );
}

export default App;

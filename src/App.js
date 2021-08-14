import './App.css';

import Academic from "./components/content/academic";
import Skill from "./components/content/skill";
import Project from "./components/content/project";
import Certificate from "./components/content/certificate";
import Home from "./components/home";


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container-fluid pr-0" style={{backgroundColor:"aquamarine"}}>
          <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/skill" component={Skill}></Route>
              <Route path="/academic" component={Academic}></Route>
              <Route path="/project" component={Project}></Route>
              <Route path="/certificate" component={Certificate}></Route>
          </Switch>
      </div>
    </Router>  
  );
}

export default App;

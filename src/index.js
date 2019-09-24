import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import Landing from "./components/landing"
import Forms from "./components/Forms";
import Test from "./components/Forms/test"
import {BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"

function App() {
  return (
     <Router>

    <div>
    <nav>
        <div>
          <Link to="/"><h1>Landing</h1></Link>
        </div>
        <ul>
         <Link to="/form"> <li>Form</li></Link>
         <Link to="/test"> <li>Test</li></Link>
        </ul>
      </nav>

      <Switch>
       <Route exact path="/form" component={Forms} />
       <Route exact path="/test" component={Test} />
       <Route exact path="/" component={Landing} />

      </Switch>
   
    </div>
  
    </Router>
  );
  
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
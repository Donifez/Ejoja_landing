import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import Landing from "./components/landing"
import Forms from "./components/Forms";
import Test from "./components/Forms/test"
import Faq from "./components/FAQ/faq";
import Promo from "./components/Promo Request Form/promo_form";
import {BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"

function App() {
  return (
     <Router>

    <div>
    {/* <nav>
        <div>
          <Link to="/"><h1>Landing</h1></Link>
        </div>
        <ul>
         <Link to="/form"> <li>Form</li></Link>
         <Link to="/test"> <li>Test</li></Link>
        </ul>
      </nav> */}

      <Switch>
       <Route exact path="/form" component={Forms} />
       <Route exact path="/test" component={Test} />
       <Route exact path="/landing" component={Landing} />
       <Route exact path="/faq" component={Faq} />
       <Route exact path="/" component={Promo} />

      </Switch>
   
    </div>
  
    </Router>
  );
  
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
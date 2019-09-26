import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import Landing from "./components/landing"
import Forms from "./components/Forms";
import Test from "./components/Forms/test"
import FAQ from "./components/Forms"
import {Provider} from "react-redux"
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import reducers from "./reducers"
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"


const store = createStore(reducers, applyMiddleware(reduxLogger, thunk));


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
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, rootElement);
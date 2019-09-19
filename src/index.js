import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import Landing from "./components/landing"
import Forms from "./components/Forms"
function App() {
  return (
    <div>
       <Forms />
    </div>
   

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

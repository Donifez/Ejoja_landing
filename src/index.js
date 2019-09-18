import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import Landing from "./components/landing"
function App() {
  return (
    <div>
       <Landing />
    </div>
   

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

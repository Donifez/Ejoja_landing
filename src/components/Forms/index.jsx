import React, { Component } from "react";
import "../../scss/main.scss";
import "./form.scss";
import First from "./first.jsx";
import {Link } from "react-router-dom"
import Second from "./second.jsx";
import Third from "./third.jsx";
import Success from "./success.jsx"
class MasterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: "",
      username: "",
      password: ""
    };
  }



  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(`Your registration detail: \n 
           Email: ${email} \n 
           Username: ${username} \n
           Password: ${password}`);
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 3 ? 4 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };


    
  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep ===4  ) {
      return (
        <Link to="/"
          className="done-btn"
       > Home</Link>
      );
    }
    else if (currentStep >=2){
      return (
        <button
          className="btn-prev"
          type="button"
          onClick={this._prev}>
        Previous
        </button>
      );
    }
    
  }
  




  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn-next"
          type="button"
          onClick={this._next}>
          Next
        </button>
      );
    }
    
    else if (currentStep ===3){
      return(
        <button
          className="submit-btn"
          type="button"
          onClick={this._next}>
          Submit
        </button>
      )
    }
   
    return null;

    
  }
  

  render() {
    return (
      <div className="form-general-wrapper">
        <p className="position">Step {this.state.currentStep} </p>
        <form onSubmit={this.handleSubmit}>
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
          />
          <Step4
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
          />
          
          {this.previousButton()}
          {this.nextButton()}
        </form>
      </div>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className="form-group">
      <First />
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className="form-group">
      <Second />
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <React.Fragment>
      <Third />
    </React.Fragment>
  );
}
function Step4(props) {
  if (props.currentStep !== 4) {
    return null;
  }
  return (
    <React.Fragment>
      <Success />
    </React.Fragment>
  );
}

export default MasterForm;

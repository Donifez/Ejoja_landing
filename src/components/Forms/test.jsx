import React, { Component } from "react";
import "../../scss/main.scss";
import "./form.scss";
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false, cchecked: false };
    this.handleChange = this.handleChange.bind(this);
    this.companyChange = this.companyChange.bind(this);
  }
  handleChange() {
    this.setState({
      checked: !this.state.checked
    });
  }
  companyChange() {
    this.setState({
      cchecked: !this.state.cchecked
    });
  }
  render() {
    const coy = this.state.cchecked ? (
      <div className="form-item-container">
        <div className="form-item-control">
          <p className="right-pararagraph">
            Name the person(s) who is the rights holder*
          </p>
          <small>
            If multiple people, please separate each name with a comma.
          </small>

          <input className="form-control" type="text" />
        </div>
      </div>
    ) : null;
    const content = this.state.checked ? (
      <div className="form-item-container">
        <div className="form-item-control">
          <p>Name the person(s) who is the rights holder*</p>
          <small>
            If multiple people, please separate each name with a comma.
          </small>
          <input className="form-control" type="text" />
        </div>
        <div className="form-item-control">
          <p className="right-pararagraph">Professionally known as*</p>
          <small>For example your artist, band or label name. .</small>
          <input className="form-control" type="text" />
        </div>
      </div>
    ) : null;
    return (
      <div className="form-container">
        <div className="rights">
          <input
            type="checkbox"
            name="check"
            id="ckeck"
            cchecked={this.state.checked}
            onChange={this.companyChange}
          />
          <label className="rights-label" htmlFor="Company">
            Company
          </label>
        </div>
        <div className="rights">
          <input
            type="checkbox"
            name="check"
            checked={this.state.checked}
            onChange={this.handleChange}
          />
          <label className="rights-label" htmlFor="persons">
            Person(s)
          </label>
        </div>
        {coy}
        {content}
      </div>
    );
  }
}
export default Test;

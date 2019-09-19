import React from "react";

function First(props) {
  return (
    <div className="form-container">
      <h2>Personal Information</h2>
      <p> To get started you’ll need to provide your details/</p>
      <form>
        <div className="form-item-container">
          <div className="form-item-control">
            <label htmlFor="email">First Name</label>
            <input
              className="form-control"
              required
              id="email"
              name="email"
              type="text"
              placeholder="Enter your First Name"
              value={props.email}
              onChange={props.handleChange}
            />
          </div>
          <div className="form-item-control">
            <label htmlFor="email">Last Name</label>
            <input
              className="form-control"
              required
              id="email"
              name="email"
              type="text"
              placeholder="Enter your Last Name"
              value={props.email}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="form-item-container">
          <div className="form-item-control">
            <label htmlFor="email">Email Address</label>
            <input
              className="form-control"
              required
              id="email"
              name="email"
              type="text"
              placeholder="Enter your Email Address"
              value={props.email}
              onChange={props.handleChange}
            />
            <input type="checkbox" name="newsletter" id="" />
            <label htmlFor="newsletter">
              I would like to recieve updates from Ejoya about special events
              and programs via email
            </label>
          </div>
          <div className="form-item-container">
            <div className="form-item-control">
              <label htmlFor="email">Email Address</label>
              <select name="" className="form-select">
              <option value="select" selected>Please Select one</option>
                <option value="artist">Artist</option>
                <option value="producer">Producer</option>
                <option value="band">Band</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default First;

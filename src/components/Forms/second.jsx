import React from "react";
import RightHolders from "./rightHolders";
import Radio from "./radio"
function Second(props) {
  return (
    <div className="form-container">
      <h2>Halfway there!</h2>
      <p>
        We would like to now about your music you want to distribute via Ejoya
      </p>
      <form>
        <div className="progree-bar">
          <div className="progress-2" />
        </div>
        <div className="form-item-container">
            <RightHolders />
          
        </div>
        <div className="form-item-container">
          <div className="form-item-control">
            <p className="country-select">Country</p>
            <select
              className="form-control-country"
              id="country"
              name="country"
              value={props.username}
              onChange={props.handleChange}>
              <option value="nigeria">Nigeria</option>
            </select>
          </div>
        </div>
        <div>
          <Radio />
        </div>

        <div className="form-item-container">
          <div className="form-item-control">
            <p className="release-paragraph">
              Do you want Ejoya to collect revenue on your behalf for user
              generated content on Youtube ?
            </p>
            <small>
              If a content creator on YouTube were to use your music Ejoya will
              monetize tht usage on your behalf..
            </small>

            <div className="release-note">
              <input type="radio" name="revenue" value="yes" /> Yes
              <br />
              <input type="radio" name="revenue" value="no" /> No
              <br />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Second;

import React from "react";

function Second(props) {
  return (
    <div className="form-container">
      <h2>Halfway there!</h2>
      <p>
        We would like to now about your music you want to distribute via Ejoya
      </p>
      <form>
        <div className="form-item-container">
          <div className="form-item-control">
            <p>Are the rights owned by a person or comapny ?</p>
            <input type="radio" name="ownership" value="company" /> Company
            <br />
            <input type="radio" name="ownership" value="persons" /> Person (s)
            <br />
          </div>
        </div>
        <div className="form-item-container">
          <div className="form-item-control">
            <p>Country</p>
            <select
              className="form-control"
              id="country"
              name="country"
              value={props.username}
              onChange={props.handleChange}>
              <option value="nigeria">Nigeria</option>
            </select>
          </div>
        </div>

        <div className="form-item-container">
          <div className="form-item-control">
            <p>Have You Released Music under this Name?</p>
            <p>
              Select ‘Yes” only if your music is on Spotify, Apple Music, iTunes
              etc.
            </p>
            <input type="radio" name="release" value="yes" /> Yes
            <br />
            <input type="radio" name="release" value="no" /> No
            <br />
          </div>
        </div>

        <div className="form-item-container">
          <div className="form-item-control">
            <p>
              Do you want Ejoya to collect revenue on your behalf for user
              generated content on Youtube ?
            </p>
            <p>
              If a content creator on YouTube were to use your music Ejoya will
              monetize tht usage on your behalf..
            </p>
            <input type="radio" name="revenue" value="yes" /> Yes
            <br />
            <input type="radio" name="revenue" value="no" /> No
            <br />
          </div>
        </div>
      </form>
    </div>
  );
}
export default Second;

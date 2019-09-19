import React from "react";
function Third(props) {
  return (
    <div className="form-container">
      <h2>Final Step</h2>
      <p>It’s time to showcase your music, we are listening to you.</p>
      <form>
        <div className="form-item-container">
          <div className="form-item-control" />
          <p>
            Which of the following profiles do you have ? Select al that apply{" "}
          </p>
          <small>
            Please select at least one and provide links in the fields below{" "}
          </small>
          <input type="checkbox" name="profiles" value="soundcloud" id="" />{" "}
          Soundcloud <br />
          <input type="checkbox" name="profiles" value="facebook" id="" />{" "}
          Facebook Page <br />
          <input type="checkbox" name="profiles" value="spotify" id="" />{" "}
          Spotify Artist <br />
          <input type="checkbox" name="profiles" value="youtube" id="" />{" "}
          Youtube Chanel
          <br />
        </div>
        <div className="form-item-container">
          <div className="form-item-control">
            <p>Soundcloud</p>
            <small>Please copy and paste your Soundcloud link here</small>
            <input type="text" className="soundcloud" />
          </div>
        </div>

        <div className="form-item-container">
          <div className="form-item-control">
            <p>Spotify Artist *</p>
            <small>Please copy and paste your Spotify Artist link here</small>
            <input type="text" className="soundcloud" />
          </div>
        </div>

        <div className="form-item-container">
          <div className="form-item-control">
            <p>Do you have a Website?</p>
            <small>Please copy and paste your Soundcloud link here</small>
            <input type="text" className="soundcloud" />
          </div>
        </div>
        <div className="form-item-container">
          <div className="form-item-control">
            <p>What else should we know about you</p>
            <small>
              Put your best foot forward, tell us about yourself. The more we
              know the better
            </small>
            <textarea className="more-you" />
          </div>
        </div>

        <div className="form-item-container">
          <div className="form-item-control">
            <p>Did Someone else refer you to Ejoya ?</p>
            <input type="radio" name="refer" value="yes" /> Yes
            <br />
            <input type="radio" name="refer" value="no" /> No
            <br />
          </div>
        </div>
        <div className="agreement">
          <input type="radio" name="refer" value="no" />
          <p>
            I agree that if Ejoya accepts my application then the terms and
            conditions will apply and I acknowledge that by clicking “Submit”, I
            am 18 years of age or older and I have read and understand the
            practices in relation to the use and disclosure of personal data as
            described in Ejoya privacy policy.
          </p>
        </div>
        <input type="button" value="Submit" className="submit-btn" />
      </form>
    </div>
  );
}
export default Third;

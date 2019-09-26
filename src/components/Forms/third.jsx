import React from "react";
import SocialProfiles from "./socialProfile"
function Third(props) {
  return (
    <div className="form-container">
      <h2>Final Step</h2>
      <p>It’s time to showcase your music, we are listening to you.</p>
      <form>
        <div className="progree-bar">
          <div className="progress-3"></div>
        </div>
        <div className="third-form-container">
          <SocialProfiles />
         </div>

        <div className="third-form-container">
          <div className="third-form-control">
            <p>Do you have a Website?</p>
            <small>Please copy and paste your link here</small>
            <input type="text" className="soundcloud" />
          </div>
        </div>
    
        <div className="third-form-container">
          <div className="third-form-control">
            <p>What else would you like us to know about You?</p>
           
            <textarea type="text" className="soundcloud" />
          </div>
        </div>

        <div className="third-form-container">
          <div className="form-item-control">
            <p>Did Someone else refer you to Ejoya ?</p>
            <input type="radio" name="refer" value="yes" /> Yes
            <br />
            <input type="radio" name="refer" value="no" /> No
            <br />
          </div>
        </div>


        <div className="third-form-container">
          <div className="agreement">
          <div className="agree-block">
          <input type="radio" name="refer" value="agree" /> <label htmlFor="agree">I Agree</label>

          </div>
                     <p>
            I agree that if Ejoya accepts my application then the terms and
            conditions will apply and I acknowledge that by clicking “Submit”, I
            am 18 years of age or older and I have read and understand the
            practices in relation to the use and disclosure of personal data as
            described in Ejoya privacy policy.
          </p>
          </div>
        </div>
        {/* <input type="button" value="Submit" 
        className="submit-btn" /> */}
      </form>
    </div>
  );
}
export default Third;

import React, { Component } from "react";
    class Radio extends Component {
      constructor(props) {
        super(props);
        this.state = { status: 0 }; // 0: hides div, 1: show yes, 2: show no.
      }

      radioHandler = (status) => {
        this.setState({status});
      }

      render() {
        const { status } = this.state;

        return (
          
        <div className="form-item-container">
            <div className="form-item-control">
            <p className="release-paragraph">
              Have You Released Music under this Name?
            </p>
            <small>
              Select ‘Yes” only if your music is on Spotify, Apple Music, iTunes
              etc.
            </small>
            <div className="release-note">
            <input
              type="radio"
              name="release"
              checked={status === 1}
              onClick={(e) => this.radioHandler(1)}
              value="yes"
             /> Yes
             <br/>
            <input
              type="radio"
              name="release"
              checked={status === 2}
              onClick={(e) => this.radioHandler(2)}
              value="no"
            /> No
            </div>
          </div>

            
            {status === 1 && 
            <div className="form-item-container">
            <div className="form-item-control">
              <p className="role-label">Which distributor did you use for your last release?*
              </p>
              <select name="ex-distributor" className="form-controlt">
                <option value="independent" selected>Independent Label</option>
                <option value="believe">Believe</option>
                <option value="cdbaby">CD Baby</option>
                <option value="distro">Distro Kid</option>
                <option value="awal">AWAL</option>
                <option value="tunecore">Tunecore</option>
                <option value="major">Major Label</option>
                <option value="ingroove">InGFroove</option>
                <option value="spinnup">Spinnup</option>
                <option value="others">Other</option>
              </select>
            </div>
          </div>
            
            
            }
            {status === 2 && null}
          </div>
        );
       }
     }
     export default Radio;
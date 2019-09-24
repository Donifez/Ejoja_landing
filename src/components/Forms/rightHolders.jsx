import React, { Component } from "react";
    class RightHolders extends Component {
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
              name="right"
              checked={status === 1}
              onClick={(e) => this.radioHandler(1)}
              value="company"
             /> Company
             <br/>
            <input
              type="radio"
              name="right"
              checked={status === 2}
              onClick={(e) => this.radioHandler(2)}
              value="persons"
            /> Person(s)
            </div>
          </div>
            {status === 1 && 
            
            <div className="form-item-container">
        <div className="form-item-control">
          <p className="right-pararagraph">
            Company Name *
          </p>
          <input className="form-control" type="text" />
        </div>
      </div>
            
            }
            {status === 2 && 
            
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
            
            }
          </div>
        );
       }
     }
     export default RightHolders;
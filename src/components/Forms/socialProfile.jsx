import React, { Component } from "react";
class socialProfiles extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false, facebook :false, 
      spotify:false, youtube:false};
    this.handleChange = this.handleChange.bind(this)
    this.handleFacebook = this.handleFacebook.bind(this)
    this.handleSpotify = this.handleSpotify.bind(this)
    this.handleYoutube = this.handleYoutube.bind(this)
  }

 handleChange() {
      this.setState({
        checked: !this.state.checked
      });
    }
    handleFacebook() {
      this.setState({
        facebook: !this.state.facebook
      });
    }

    handleSpotify() {
      this.setState({
        spotify: !this.state.spotify
      });
    }
    handleYoutube() {
      this.setState({
        youtube: !this.state.youtube
      });
    }

  render() {
    const soundcloudDiv  = this.state.checked ? (
      <div className="third-form-container">
        <div className="third-form-control">
          <p>Soundcloud</p>
          <small>Please copy and paste your Soundcloud link here</small>
          <input type="text" className="soundcloud" />
        </div>
      </div>
    ) :null;

    const facebookDiv  = this.state.facebook ? (
      <div className="third-form-container">
        <div className="third-form-control">
          <p>Facebook Page</p>
          <small>Please copy and paste your Soundcloud link here</small>
          <input type="text" className="soundcloud" />
        </div>
      </div>
    ) :null;

    const spotifyDiv  = this.state.spotify ? (
      <div className="third-form-container">
        <div className="third-form-control">
          <p>Spotify Artist</p>
          <small>Please copy and paste your Spotify Artist link here</small>
          <input type="text" className="soundcloud" />
        </div>
      </div>
    ) :null;
    
    const youTubeDiv  = this.state.youtube ? (
      <div className="third-form-container">
        <div className="third-form-control">
          <p>YouTube Chanel</p>
          <small>Please copy and paste your SYouTube Chanel link here</small>
          <input type="text" className="soundcloud" />
        </div>
      </div>
    ) :null;
    

    return (
      <div className="third-form-control">
        <p className="platforms-profiles">
          Which of the following profiles do you have ? Select al that apply
        </p>
        <small className="profiles-small">
          Please select at least one and provide links in the fields below
        </small>
        <div className="release-note">
          <input
            type="checkbox"
            name="social"
            soundcloud={this.state.checked}
            onClick={this.handleChange}
            value="soundcloud"
          />{" "}
          SoundCloud
          <br />
          <input
            type="checkbox"
            name="facebook"
            facebook={this.state.facebook}
            onClick={this.handleFacebook}
            value="facebook"
          />Facebook Page
          <br />
          <input
            type="checkbox"
            name="spotify"
            spotify={this.state.spotiy}
            onClick={this.handleSpotify}
            value="spotify"
          />Spotify Artist
          <br />
          <input
            type="checkbox"
            name="youtube"
            youtube={this.state.youtube}
            onClick={ this.handleYoutube}
            value="youtube"
          />YouTube Chanel
          <br />
        </div>
        {soundcloudDiv}
        {facebookDiv}
        {spotifyDiv}
        {youTubeDiv}
      </div>
    );
  }
}
export default socialProfiles;

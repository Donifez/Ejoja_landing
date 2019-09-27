import React, {Component} from "react"
import "./__promo.scss";
import Logo from "../../ejoya-logo.png";

class Request extends Component {
  render () {
    return (
      <div className="promo_wrapper">
          <div className="promo_nav">
          <img className="logo" src={Logo} srcset=""/>
         
          </div>
          <div className="promo_body">
          <div className="promo_header">
             <h6>Promo Request Form</h6> 
             <p className="promo_header_details">  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Dolor natoque tincidunt vivamus mauris eu vestibulum aliquam quis.
                   At rutrum quam turpis quis.</p>
              </div>
              <div className="form_details">
                  <div className="details1">
                      <h6>What is your stage name?  <span>*</span></h6>
                      <p>This is the name that would be displayed on the stores. Please note if you have distributed music before,
                           to use the name you have been using all along for uniformity . </p>
                           <input required type="text" placeholder="Type your answer"/>
                          

                  </div>

                  <div className="details2">
                      <h6>What is the name of the song(or Album) you are releasing?  <span>*</span></h6>
                      <p> Please note this is case sensitive . </p>
                           <input required type="text" placeholder="Type your answer"/>
                          

                  </div>
                  <div className="details3">
                      <h6>What is the name of your label? <span>*</span></h6>
                      <p> If you don't have a label, fill in independent or put in your name . </p>
                           <input required type="text" placeholder="Type your answer"/>
                          

                  </div>
                  <div className="details4">
                      <h6> Focus Track  <span>*</span></h6>
                      <p> If an EP/album, select a previously UNRELEASED track to focus on, which has the same release date as the album/EP (for playlist consideration) </p>
                           <input required type="text" placeholder="Type your answer"/>
                          

                  </div>

                  <div className="details5">
                      <h6> Artist + Release Background  <span>*</span></h6>
                      <p> Short overview of your artists’ background and successes so far + notes on this release - Max. 500 characters </p>
                           <input required type="text" placeholder="Type your answer"/>
                          

                  </div>

                  <div className="details6">
                      <h6> Release plan <span>*</span></h6>
                      <p> What is your marketing plan for this release? Please provide a relevant timeline if available + any information regarding additional assets (singles, videos, etc). Plus, what will you do to drive traffic to DSPs and create buzz around this release?
                           Please include recent press coverage, awards and other relevant support when applicable - Max. 500 characters</p>
                           <input required type="text" placeholder="Type your answer"/>
                          

                  </div>
                  <div className="details7">
                      <h6> Points Of Interest  <span>*</span></h6>
                    <p>In addition to your release plan please provide POIs for your release.
                         These should be streamlined bullet points pointing out the most important and relevant parts of the release.
                          EXAMPLE: ~ "Track Title" is the first single from upcoming album X, out June X 2019 ~
                           "Track Title" will be released in tandem with Tour announcement ~ Artist has been featured at Pitchfork,
                         The Guardian, Resident Advisor ~ Artist has fanbase in country X because a, b and c  </p>
                           <input required type="text" placeholder="Type your answer"/>
                          

                  </div>
                  <div className="details8">
                      <h6> Goals & Expectations  <span>*</span></h6>
                    <p>Please list the goals set for this campaign across all media platforms  </p>
                           <input required type="text" placeholder="Type your answer"/>
                          

                  </div>

                  <div className="details9">
                      <h6> Artist Long-Term Plans  <span>*</span></h6>
                    <p>Any noteworthy long-term artist plans that will strengthen our pitch to DSPs? EXAMPLES: follow up singles, 
                        relevant collaborations, touring / festival dates, partnerships and endorsements, 
                        campaigning for president </p>
                           <input required type="text" placeholder="Type your answer"/>
                          

                  </div>

                  <div className="details10">
                      <h6> Other information you'd like to add ? </h6>
                   
                           <input required type="text" placeholder="Type your answer"/>
                          

                  </div>

                

              </div>
              <div className="options">
                      <div><p>CANCEL</p></div>
                      <div><button>SUBMIT</button></div>
                  </div>

          </div>
         
        
         
   </div>
    )
  }
}
export default Request;
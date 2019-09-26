import React, {Component} from "react"
import "./__faq.scss";
import Logo from "../../ejoya-logo.png";
import Group from "../../Group.svg";
import Minus from "../../minus.svg";
import Gradient from "../../Rectangle.svg";
class Faq extends Component {
  render () {
    return (
      <div className="faq_wrapper">
          <div className="faq_nav">
          <img className="logo" src={Logo} srcset=""/>
          <a href ="#" className="nav-faq">FAQ's</a>
          <a href ="#" className="nav-back">BACK</a>
          </div>
         
          <div className="body">
          <div className="gradient">
             <img src={Gradient} srcset=""/>
          </div>
         <a id="top"> <p className="header">Frequently Asked Questions</p></a>  
            <div className="list">
            <ul>
               <li className="list_one"><h3>How do I apply to Ejoya Plus?</h3>
               <img className="minus" src={Minus}/>
                <p>Click "Upload Music" on the home page and follow the steps to submit your application.</p>
              
               </li>
               

               <li className="list_two"><h3>What's the Revenue Share?</h3>
               <img className="minus" src={Minus}/>
                <p>The Ejoya Plus deal is a simple digital distribution license with a 30 days rolling term which means that 
                    you can terminate your deal with us at any time on 30 days notice. We take a percentage of revenue baased 
                    on agreement with you. There are no additional fees for distributing and marketing

                </p>
                
               </li>
               
                
               <li className="list_three"><h3>Can I switch to Ejoya from another distributor?</h3>
               <img className="minus" src={Minus}/>
                <p>
                </p>
                
               </li>
              
               <li className="list_four"><h3>How can I submit my music to Ejoya?</h3>
               <img className="minus" src={Minus}/>
                <p>You can submit your song by logging into your account. 
                    You will receive login details via email once we have processed your application and you have been accepted as an Ejoya Plus member.
                     From there you log in to your Ejoya Plus account and click on the new release button to upload and distribute your music. 
                </p>
            
               </li>
               

               <li className="list_five"><h3>How long does it take to release my music? </h3>
               <img className="minus" src={Minus}/>
                <p>In order to make the most of the promotional opportunities for your release, 
                    we recommend that your song, promo form and metadata be filled and uploaded at least four weeks in advance of your release date.
                </p>
              
               </li>
             
               <li className="list_six"><h3>What promotions will Ejoya Plus offer for my release?</h3>
               <img className="minus" src={Minus}/>
                <p>We pitch for store promotions, editorial coverage, playlist pitching, social media promo. Promotions are also subject to the deal you have with us.
                </p>
            
               </li>
               
               <li className="list_seven"><h3>Which stores will my release appear?</h3>
               <img className="minus" src={Minus}/>
                <p> Your song will appear on all digital stores Ejoya partners with.
                </p>
           
               </li>
              
               <li className="list_eight"><h3>Where can I see my revenue figures?</h3>
               <img className="minus" src={Minus}/>
                <p>  You can view them by clicking on analytics when you log in to your account.
                </p>
                
               </li>
              
               <li className="list_nine"><h3>What is a UPC code?</h3>
               <img className="minus" src={Minus}/>
                <p> UPC stands for Universal Product Code;
                     it is a barcode that identifies your release. We assign this at no cost, it is free of charge.
                </p>
              
               </li>
             
               <li className="list_ten"><h3> What is ISRC code? </h3>
               <img className="minus" src={Minus}/>
                <p> ISRC means International Standard Recording Code, 
                    it is a unique identifier for a recording, we give this free of charge at no cost once your release has been submitted. 
                </p>
               
               </li>
              
               <li className="list_eleven"><h3> When will I get paid? </h3>
               <img className="minus" src={Minus}/>
                <p> 
               
                </p>
                
               </li>
               
               <li className="list_twelve"><h3>What happens if I want to terminate my contract? </h3>
               <img className="minus" src={Minus}/>
                <p> 
               
                </p>
              
               </li>
          


            </ul>
          </div>
      <a href="#top">  <h1 className='redirects'>Back to Top  <img src={Group}/></h1></a>
          </div>
         
   </div>
    )
  }
}
export default Faq
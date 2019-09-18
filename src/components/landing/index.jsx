import React, {Component} from "react"
import { FiChevronsDown, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
class Landing extends Component {
  render () {
    return (
      <div className="landing-wrapper">
    <nav>
      <div className="logo">
      <img src="/images/ejoya-logo.png" alt="Ejopya Logo" srcset=""/>
      </div>
      <ul>
        <li>FAQ</li>
        <li className="login-btn">Login</li>
      </ul>

    </nav>

    <section className="ejoya-hero">
      <h1>GET YOUR MUSIC HEARD GLOBALLY</h1>
      <p>To expand your reach, fan base and push your music career further, submit your music to Ejoya.
      
      </p>
      <button className="cta-btn">
      UPLOAD YOUR MUSIC
      </button>
      <FiChevronsDown className="chevron-down" />
    
    </section>
    <section className="what-we-do">
      <div className="content-container">
          <h2>WHAT WE DO</h2>
          <p>At Ejoya we offer bouquet of marketing services that allows your to choose the right kind of marketing that will work best for you. </p>
      </div>
      <div className="svg-container">
        <img src="/images/Rectangle 2.4.svg" alt="" srcset=""/>

      </div>
      
    </section>
    <div className="content-2">
      <img src="/images/joel-muniz-bJ2Dm9ZyeIY-unsplash.png" alt="" srcset=""/>
      <div className="content-info">
      <h3>Partners</h3>
      <p>We are constantly working on strategic parnerships that, ensuring your content is placed in front of millions of users</p>
      </div>
   </div>
    <div className="content-2">
    <div className="content-info">
      <h3>Growth</h3>
      <p className="padded-paragraph">We are constantly working on strategic parnerships that, ensuring your content is placed in front of millions of users</p>
    </div>
      <img src="/images/turntable-1109588_1920.png" alt="" srcset=""/>
   
    </div>

    <div className="content-2">
      <img src="/images/5d7929304459f.png" alt="" srcset=""/>
      <div className="content-info">
      <h3>Revenue</h3>
      <p>We go above and beyond to ensure we are constantly providiong features and services to ensure our artists enjoy continued increase in revenue.</p>
      </div>
    </div>

      <div className="content-2">
        <div className="content-info">
          <h3>Star Your Show</h3>
          <p className="padded-paragraph">Best of all, we own no part of your music so you get to keep 100% of your rights! </p>
        </div>
       <img src="/images/vishnu-r-nair-kWCHq48Xwgw-unsplash.png" alt="" srcset=""/>
      
    </div>
    <section className="join">
      <div className="svg-div">
          <img src="/images/Rectangle 2.5.svg" alt="" srcset=""/>
      </div>
      <div className="join-content">
      <h2>JOIN OUR THRIVING ARTISTE COMMUNITY</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
     
      </div>
       
    </section>
    <section className="testimonial">
    <div className="testimonial-card">
    <img src="/images/josh-rocklage-HAAsKeZbHAc-unsplash.png" alt="" srcset=""/>
    <h3>SOUL STAR- R$B singer</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, nunc est nibh malesuada. Fringilla viverramagna nulla amet, et tortor.</p>
    </div>
    <div className="testimonial-card card-2">
    <img src="/images/joel-muniz-bJ2Dm9ZyeIY-unsplash (1).png" alt="" srcset=""/>
    <h3>XX Radar- Rapper</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, nunc est nibh malesuada. Fringilla viverramagna nulla amet, et tortor.</p>

    </div>
    
    </section>
    <section className="music-stores">
    <div className="music-store-mobile">
      <img src="/images/spotify-logo-png-7079.png"  alt="spotify logo" className="spotify-logo"/>
      <img src="/images/deezer-logo-png-transparent.png" className="deezer-logo" />
      <img src="/images/google-play-png-logo-3803.png" className="google-play-music-logo" />
      <img src="/images/youtube-logo-png-2061.png" className="youtube-logo" />
      <img src="/images/1200px-ITunes_logo.svg.png"  className="spotify-logo"/>
      <img src="/images/tidal_icon_png_9.png" className="deezer-logo" />

    </div>
    <div className="music-store-left">
    <img src="/images/spotify-logo-png-7079.png"  alt="spotify logo" className="spotify-logo"/>
    <img src="/images/deezer-logo-png-transparent.png" className="deezer-logo" />
    <img src="/images/google-play-png-logo-3803.png" className="google-play-music-logo" />
      <img src="/images/youtube-logo-png-2061.png" className="youtube-logo" />
    </div>
    <div className="music-store-center">
    <h3>EXPRESS YOURSERLF</h3>
    <p>At Ejoya we believe that music is a vital form of self-expression and everyone should be given the same opportunities to share their expressions with the world</p>
    <button> LEARN MORE </button>
    </div>
    <div className="music-store-right">
    <img src="/images/1200px-ITunes_logo.svg.png"  className="spotify-logo"/>
    <img src="/images/tidal_icon_png_9.png" className="deezer-logo" />
    <img src="/images/google-play-png-logo-3803.png" className="play-logo" />
      <img src="/images/youtube-logo-png-2061.png" className="youtube-logo" />
 
    </div>
    </section>
    <section className="newsletter">
    <div className="newsletter-container">
    <p>Never miss a beat, subscribe to our amazing newsletter.</p>

    </div>
      <div className="newsletter-container">
        <input type="text" placeholder="enter your email address"/>
        <button>Subscribe</button>

      </div>
      
    </section>
    <footer>
      <div className="footer-links">
        <li>About us</li>
        <li>Blog</li>
        <li>Career</li>
        <li>Help</li>
        <li>Legal</li>
        <li>Privacy</li>
        <li>Cookies</li>
      <li>Charts</li>
      </div>
      <div className="footer-social">
         <FiTwitter/>
        <FiFacebook/>
        <FiInstagram />
      </div>
      <div className="footer-copyright">
      <p> <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />
Copyright. Ejoya 2019.</p>
      </div>
    </footer>
   </div>
    )
  }
}
export default Landing
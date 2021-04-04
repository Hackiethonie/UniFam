import "./LandingStyle.css";
import Landpage from './Landing_Page (2).PNG'

const LandingPage = () => (
  
  <div className="wrapper">
    <div className="row">
      <h1>
        <span className="heading-p1">Uni</span>
        <span className="heading-p2">Fam</span>
      </h1>
    </div>
    <div className="row2">
      <div className="info">
        <div className="action">
          Connect with your peers. <p></p>Find your fam today.
        </div>
        <a href="./signup">
          <button className="action-btn">Join Now</button>
        </a>
      </div>

      <div className = "container">
      <img src = {Landpage} alt= "picture"/>
      </div>

      
    </div>
  </div>
);

export default LandingPage;

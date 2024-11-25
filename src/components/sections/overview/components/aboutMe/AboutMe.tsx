import "./AboutMe.scss";
import Headshot from "@assets/dominick-headshot.png";

const AboutMe = () => {
  return (
    <div className="aboutme-container">
      <div className="aboutme-header">
        <div className="headshot-container">
          <img src={Headshot} alt="headshot" />
        </div>
      </div>
      <div className="aboutme-body">
        <h1>Hello! I'm</h1>
        <h1>Dominick Nitecki</h1>
      </div>
    </div>
  );
};

export default AboutMe;

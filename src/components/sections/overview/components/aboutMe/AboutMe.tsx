import { MEDIA_FILES } from "@constants/constants";
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
        <h1 className="name">Dominick Nitecki</h1>
      </div>
      <div className="aboutme-footer">
        <div className="aboutme-logo">
          <img src={MEDIA_FILES.dnIcon} alt="Dominick Nitecki Logo" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

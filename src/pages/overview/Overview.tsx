import "./Overview.scss";
import Headshot from "../../assets/dominick-headshot.png";
const Overview = () => {
  return (
    <div className="overview-container">
      <div className="overview-grid">
        <div className="aboutme-container">
          <div className="aboutme-header">
            <div className="headshot-container">
              <img src={Headshot} alt="headshot" />
            </div>
          </div>
        </div>
        <div className="portfolio-container"></div>
        <div className="photo-container"></div>
        <div className="certs-container"></div>
      </div>
    </div>
  );
};

export default Overview;

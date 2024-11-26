import AboutMe from "./components/aboutMe/AboutMe";
import CertWidget from "./components/certWidget/CertWidget";
import "./Overview.scss";

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="overview-grid">
        <AboutMe />
        <CertWidget />
        <div className="portfolio-container"></div>
        <div className="photo-container"></div>
      </div>
    </div>
  );
};

export default Overview;

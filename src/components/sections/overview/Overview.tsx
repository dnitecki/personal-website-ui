import AboutMe from "./components/aboutMe/AboutMe";
import "./Overview.scss";

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="overview-grid">
        <AboutMe />
        <div className="portfolio-container"></div>
        <div className="photo-container"></div>
        <div className="certs-container"></div>
      </div>
    </div>
  );
};

export default Overview;

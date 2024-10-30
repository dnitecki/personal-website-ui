import "./Overview.scss";
const Overview = () => {
  return (
    <div className="overview-container">
      <h1>About Me</h1>
      <div className="overview-grid">
        <div className="aboutme-container"></div>
        <div className="portfolio-container"></div>
        <div className="photo-container"></div>
        <div className="certs-container"></div>
      </div>
    </div>
  );
};

export default Overview;

import React, { useState } from "react";
import "./Resume.scss";

export default function Resume() {
  const [jpmcClicked, setJpmcClicked] = useState(false);
  const [stnClicked, setStnClicked] = useState(false);

  const handleJpmcClick = () => {
    setJpmcClicked(!jpmcClicked);
  };
  const handleStnClick = () => {
    setStnClicked(!stnClicked);
  };

  return (
    <div className="resume-container">
      <div onClick={handleJpmcClick} className="resume-card glass">
        <div className="bg-image-jpmc" />
        <div
          className={`resume-card-bg ${jpmcClicked ? "closed" : "open"} jpmc`}
        ></div>
        <div
          className={`resume-card-front ${jpmcClicked ? "visible" : "hidden"}`}
        >
          <h2>Add Info</h2>
        </div>
        <div className="resume-card-back">
          <div className="resume-firm">
            <h2>JPMorgan Chase</h2>
          </div>
          <div className="resume-title">
            <h3>Software Engineer</h3>
          </div>
          <div className="resume-dates">
            <h4>Nov 2022 to Present</h4>
          </div>
        </div>
      </div>
      <div onClick={handleStnClick} className="resume-card glass">
        <div className="bg-image-stn" />
        <div
          className={`resume-card-bg ${stnClicked ? "closed" : "open"} stn`}
        ></div>
        <div
          className={`resume-card-front ${stnClicked ? "visible" : "hidden"}`}
        >
          <h2>Add Info</h2>
        </div>
        <div className="resume-card-back">
          <div className="resume-firm">
            <h2>Stantec</h2>
          </div>
          <div className="resume-title">
            <h3>Application Developer</h3>
          </div>
          <div className="resume-dates">
            <h4>Jan 2021 to Nov 2022</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

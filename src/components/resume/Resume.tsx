import React from "react";
import "./Resume.scss";

export default function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-card">
        <div className="bg-image-jpmc" />
        <div className="resume-card-bg jpmc"></div>
        <div className="resume-card-front">
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
      <div className="resume-card">
        <div className="bg-image-stn" />
        <div className="resume-card-bg stn"></div>
        <div className="resume-card-front">
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

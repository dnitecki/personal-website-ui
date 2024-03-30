import React, { useState } from "react";
import "./Resume.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StantecLogo from "../../assets/StantecLogoColor.png";
import ChaseLogo from "../../assets/ChaseLogo.png";
import Certs from "../certs/Certs";

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
    <>
      <div className="resume-container">
        <div onClick={handleJpmcClick} className="resume-card glass">
          <div
            className={`resume-icon ${
              jpmcClicked ? "icon-closed" : "icon-open"
            }`}
          >
            <ChevronRightIcon fontSize="inherit" />
          </div>
          <div className="bg-image-jpmc" />

          <div
            className={`resume-card-bg ${
              jpmcClicked ? "resume-closed" : "resume-open"
            }`}
          ></div>
          <div
            className={`resume-card-front ${
              jpmcClicked ? "visible" : "hidden"
            }`}
          >
            {jpmcClicked && <h2>Add Info</h2>}
          </div>
          <div className="resume-card-back">
            <div className="resume-header">
              <div className="resume-logo-container">
                <img
                  className="resume-logo"
                  src={ChaseLogo}
                  alt="stantec logo"
                />
              </div>

              <div className="resume-title">
                <h2>JPMorgan Chase</h2>
                <h3>Software Engineer</h3>
              </div>
            </div>
            <div className="resume-dates">
              <p>Nov 2022 to Present</p>
            </div>
          </div>
        </div>
        <div onClick={handleStnClick} className="resume-card glass">
          <div
            className={`resume-icon ${
              stnClicked ? "icon-closed" : "icon-open"
            }`}
          >
            <ChevronRightIcon fontSize="inherit" />
          </div>
          <div className="bg-image-stn" />
          <div
            className={`resume-card-bg ${
              stnClicked ? "resume-closed" : "resume-open"
            }`}
          ></div>
          <div
            className={`resume-card-front ${stnClicked ? "visible" : "hidden"}`}
          >
            {stnClicked && <h2>Add Info</h2>}
          </div>

          <div className="resume-card-back">
            <div className="resume-header">
              <div className="resume-logo-container">
                <img
                  className="resume-logo"
                  src={StantecLogo}
                  alt="stantec logo"
                />
              </div>
              <div className="resume-title">
                <h2>Stantec</h2>
                <h3>Application Developer</h3>
              </div>
            </div>
            <div className="resume-dates">
              <p>Jan 2021 to Nov 2022</p>
            </div>
          </div>
        </div>
      </div>
      <Certs />
    </>
  );
}

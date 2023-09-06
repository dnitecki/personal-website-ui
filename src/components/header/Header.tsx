import React from "react";
import "./Header.scss";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../../assets/Profile.png";
import logo from "../../assets/MyLogo.png";

export default function Header() {
  return (
    <div className="header">
      <div className="profile-image">
        <div className="front">
          <img className="headshot" src={profile} alt="headshot" />
        </div>
        <div className="back">
          <div className="logo-background">
            <img className="dn-logo" src={logo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="header-container">
        <div className="header-content">
          <div className="header-text">
            <h3>Dominick Nitecki</h3>
            <p>Software Engineer</p>
          </div>
          <div className="header-links">
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./Header.scss";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import profile from "../../assets/Profile.png";
import logo from "../../assets/MyLogo.png";

export default function Header() {
  const [moreClicked, setMoreClicked] = useState(false);

  const handleMoreClick = () => {
    setMoreClicked(true);
  };
  const handleModalClose = () => {
    setMoreClicked(false);
  };
  return (
    <>
      <div className="header shadow">
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
              <h2>Dominick Nitecki</h2>
              <h3>Software Engineer</h3>
            </div>
            <div className="header-links">
              <a
                href="https://www.linkedin.com/in/dnitecki/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.instagram.com/dominick_nitecki/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://github.com/dnitecki"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <button onClick={handleMoreClick}>
                <FontAwesomeIcon icon={faEllipsis} />
              </button>
            </div>
          </div>
        </div>
        {moreClicked ? (
          <>
            <div className="modal-bg" onClick={handleModalClose} />
            <div id="mode-modal" className="more-modal glass">
              <button className="modal-close" onClick={handleModalClose}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
              <h2>Modal Content</h2>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

import React, { useState } from "react";
import "./Header.scss";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faLink,
  faShareFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import profile from "../../assets/Profile.png";
import logo from "../../assets/MyLogo.png";

export default function Header() {
  const [moreClicked, setMoreClicked] = useState(false);

  const shareData = {
    text: "Thanks for sharing!",
    url: "https://www.dominicknitecki.com",
  };

  const handleMoreClick = () => {
    setMoreClicked(true);
  };
  const handleModalClose = () => {
    setMoreClicked(false);
  };

  const copyText = () => {
    try {
      navigator.clipboard.writeText(shareData.url);
      window.alert("Copied!");
    } catch (error) {
      window.alert("Copy Failed");
    }
  };

  const handleShare = async () => {
    try {
      await navigator.share(shareData);
    } catch (error) {
      window.alert("Sharing Failed");
    }
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
                <FontAwesomeIcon icon={faShareNodes} />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`modal-bg ${moreClicked ? "bg-open" : "bg-close"}`}
          onClick={handleModalClose}
        />
        <div
          id="more-modal"
          className={`more-modal ${moreClicked ? "modal-open" : "modal-close"}`}
        >
          <button className="share-icon-btn" onClick={copyText}>
            <FontAwesomeIcon className="share-icon" icon={faLink} />
            <p>Copy Link</p>
          </button>
          <a
            className="share-icon-btn"
            href="sms://?&body=www.dominicknitecki.com"
          >
            <FontAwesomeIcon className="share-icon" icon={faComment} />
            <p>Message</p>
          </a>
          <button className="share-icon-btn" onClick={handleShare}>
            <FontAwesomeIcon className="share-icon" icon={faShareFromSquare} />
            <p>Share to...</p>
          </button>
        </div>
      </div>
    </>
  );
}

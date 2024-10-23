import { useState } from "react";
import "./Header.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import ShareIcon from "@mui/icons-material/Share";
import LinkIcon from "@mui/icons-material/Link";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import IosShareIcon from "@mui/icons-material/IosShare";
import Skills from "../skills/Skills";
import { MEDIA_FILES } from "../../utils/constants";

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
      setMoreClicked(false);
    }
  };

  return (
    <>
      {/* <div className="bubble">
        <div className="text-bubble">Dommmmmmm</div>
        <div className="bubble-3" />
        <div className="bubble-2" />
        <div className="bubble-1" />
      </div> */}
      <div className="header shadow">
        <div className="profile-image">
          <div className="front">
            <div className="headshot-container">
              <img
                className="headshot"
                src={MEDIA_FILES.dnMemoji}
                alt="headshot"
              />
            </div>
          </div>
          <div className="back">
            <div className="logo-background">
              <img className="dn-logo" src={MEDIA_FILES.dnIcon} alt="logo" />
            </div>
          </div>
        </div>
        <div className="header-container">
          <div className="header-content">
            <div className="header-text">
              <h2>Dominick Nitecki</h2>
              <h3>Software Engineer</h3>
              <Skills />
            </div>

            <div className="header-links">
              <a
                href="https://www.linkedin.com/in/dnitecki/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon fontSize="inherit" />
              </a>
              <a
                href="https://www.instagram.com/dominick_nitecki/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon fontSize="inherit" />
              </a>
              <a
                href="https://github.com/dnitecki"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon fontSize="inherit" />
              </a>
              <button onClick={handleMoreClick}>
                <ShareIcon fontSize="inherit" />
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
            <LinkIcon fontSize="inherit" className="share-icon" />
            <p>Copy Link</p>
          </button>
          <a
            className="share-icon-btn"
            href="sms://?&body=www.dominicknitecki.com"
          >
            <ChatBubbleIcon fontSize="inherit" className="share-icon" />
            <p>Message</p>
          </a>
          <button className="share-icon-btn" onClick={handleShare}>
            <IosShareIcon fontSize="inherit" className="share-icon" />
            <p>Share to...</p>
          </button>
        </div>
      </div>
    </>
  );
}

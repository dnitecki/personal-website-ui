import { useEffect, useRef, useState } from "react";
import "./Navigation.scss";
import { EMPTY_STRING, MEDIA_FILES } from "../../utils/constants";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import ShareIcon from "@mui/icons-material/Share";
import LinkIcon from "@mui/icons-material/Link";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import IosShareIcon from "@mui/icons-material/IosShare";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);
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

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        )?.target;
        if (visibleSection) {
          setActiveSection(visibleSection.id);
        }
      },
      {
        threshold: 0.5,
      }
    );

    const sections = document.querySelectorAll("[section-id]");

    sections.forEach((section) => {
      observer.current.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="navigation-container">
      <div className="navigation-logo">
        <img src={MEDIA_FILES.dnIcon} alt="Dominick Nitecki Logo" />
      </div>
      <ul>
        <li>
          <a
            href="#overview"
            className={activeSection === "overview" ? "active" : EMPTY_STRING}
          >
            <p>Overview</p>
          </a>
        </li>
        <li>
          <a
            href="#resume"
            className={activeSection === "resume" ? "active" : EMPTY_STRING}
          >
            <p>Resume</p>
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className={activeSection === "portfolio" ? "active" : EMPTY_STRING}
          >
            <p>Portfolio</p>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : EMPTY_STRING}
          >
            <p>Contact</p>
          </a>
        </li>
      </ul>
      <div className="navigation-links">
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
        <a href="https://github.com/dnitecki" target="_blank" rel="noreferrer">
          <GitHubIcon fontSize="inherit" />
        </a>
        <button onClick={handleMoreClick}>
          <ShareIcon fontSize="inherit" />
        </button>
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
  );
};

export default Navigation;

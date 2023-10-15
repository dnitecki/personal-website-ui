import React, { useEffect, useRef, useState } from "react";
import "./PortfolioSlider.scss";
import { motion } from "framer-motion";
import finfetchMockup from "../../assets/FinfetchMockup.png";
import finfetchIcon from "../../assets/FinFetch-icon.png";
import insuranceMockup from "../../assets/InsuranceMockup.png";
import insuranceIcon from "../../assets/onestop-icon.png";
import { finfetch, insurance } from "../../utils/constants";
import { speedbumpProps } from "../../utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function PortfolioSlider() {
  const [width, setWidth] = useState(0);
  const [url, setUrl] = useState("");
  const [appName, setAppName] = useState("");
  const [speedbumpOpen, setSpeedbumpOpen] = useState(false);
  const slider = useRef<HTMLDivElement | null>(null);

  const handleFinfetchClick = () => {
    setUrl(finfetch.url);
    setAppName(finfetch.appName);
    setSpeedbumpOpen(true);
  };

  const handleInsuranceClick = () => {
    setUrl(insurance.url);
    setAppName(insurance.appName);
    setSpeedbumpOpen(true);
  };

  const handleSpeedbumpClose = () => {
    setUrl("");
    setAppName("");
    setSpeedbumpOpen(false);
  };

  const handleSpeedbumpNavigation = (url: string) => {
    window.open(url, "_blank");
    setSpeedbumpOpen(false);
    setUrl("");
    setAppName("");
  };

  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);

  const SpeedBump = ({ url, appName }: speedbumpProps) => {
    return (
      <div className="speedbump-container">
        <div className="speedbump-icon">
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>
        <div className="speedbump-text">
          <h2>You will navigate away to {appName} </h2>
        </div>
        <div className="speedbump-buttons">
          <button className="speedbump-close" onClick={handleSpeedbumpClose}>
            <h3>Close</h3>
          </button>
          <button
            className="speedbump-proceed"
            onClick={() => {
              handleSpeedbumpNavigation(url);
            }}
          >
            <h3>Proceed</h3>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      {speedbumpOpen && <SpeedBump url={url} appName={appName} />}
      <div ref={slider} className="slider">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-slider"
        >
          <div className="item">
            <div className="portfolio-card glass" onClick={handleFinfetchClick}>
              <div className="portfolio-image-container">
                <img
                  className="portfolio-logo finfetch-icon"
                  src={finfetchIcon}
                  alt="icon"
                />
                <img
                  className="portfolio-image finfetch"
                  src={finfetchMockup}
                  alt="finfetch"
                />
              </div>
            </div>
          </div>
          <div className="item">
            <div
              className="portfolio-card glass"
              onClick={handleInsuranceClick}
            >
              <div className="portfolio-image-container">
                <img
                  className="portfolio-logo insurance-icon"
                  src={insuranceIcon}
                  alt="icon"
                />
                <img
                  className="portfolio-image insurance"
                  src={insuranceMockup}
                  alt="onestopinsurance"
                />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="portfolio-card glass"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

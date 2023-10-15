import React, { useEffect, useRef, useState } from "react";
import "./PortfolioSlider.scss";
import { motion } from "framer-motion";
import finfetchMockup from "../../assets/FinfetchMockup.png";
import finfetchIcon from "../../assets/FinFetch-icon.png";
import insuranceMockup from "../../assets/InsuranceMockup.png";
import insuranceIcon from "../../assets/onestop-icon.png";
import { finfetch, insurance } from "../../utils/constants";
import { speedbumpProps } from "../../utils/types";

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
  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);

  const SpeedBump = ({ url, appName }: speedbumpProps) => {
    return (
      <div className="speedbump-container">
        <h2>{appName}</h2>
        <button onClick={handleSpeedbumpClose}>CLOSE</button>
      </div>
    );
  };
  return (
    <div>
      {speedbumpOpen ? <SpeedBump url={url} appName={appName} /> : null}
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

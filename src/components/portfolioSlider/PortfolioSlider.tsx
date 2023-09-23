import React, { useEffect, useRef, useState } from "react";
import "./PortfolioSlider.scss";
import { motion } from "framer-motion";
import finfetch from "../../assets/FinfetchMockup.png";
import finfetchIcon from "../../assets/FinFetch-icon.png";
import insurance from "../../assets/InsuranceMockup.png";

export default function PortfolioSlider() {
  const [width, setWidth] = useState(0);
  const slider = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);
  return (
    <div>
      <div ref={slider} className="slider">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-slider"
        >
          <div className="item">
            <a
              className="portfolio-card"
              href="https://www.finfetch.dominicknitecki.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="portfolio-image-container">
                <img className="portfolio-logo" src={finfetchIcon} alt="icon" />
                <img
                  className="portfolio-image finfetch"
                  src={finfetch}
                  alt="finfetch"
                />
              </div>
            </a>
          </div>
          <div className="item">
            <a
              className="portfolio-card"
              href="https://www.finfetch.dominicknitecki.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="portfolio-image-container">
                <img
                  className="portfolio-image insurance"
                  src={insurance}
                  alt="finfetch"
                />
              </div>
            </a>
          </div>
          <div className="item">
            <div className="portfolio-card"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import "./ResumeSlider.scss";
import { AnimatePresence, motion } from "framer-motion";

const JPMCLogo = require("../../assets/JP-Morgan-Chase-Logo.png");
const STNLogo = require("../../assets/Stantec-Logo.png");

export default function ResumeSlider() {
  const [width, setWidth] = useState(0);
  const slider = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);
  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div ref={slider} className="slider">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            dragPropagation
            style={{ touchAction: "none" }}
            className="inner-slider"
            animate={{
              x: 0,
            }}
          >
            <motion.div className="item">
              <div className="glass resume-card">
                <div className="top-card">
                  <div className="logo-container">
                    <img className="JPMCLogo" src={JPMCLogo} alt="logo" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="item">
              <div className="glass resume-card">
                <div className="top-card">
                  <div className="logo-container">
                    <img className="STNLogo" src={STNLogo} alt="logo" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="item">
              <div className="glass resume-card">
                <div className="top-card">
                  <div className="logo-container">
                    <img className="STNLogo" src={STNLogo} alt="logo" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

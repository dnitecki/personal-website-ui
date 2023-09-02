import React, { useEffect, useRef, useState } from "react";
import "./MainPage.scss";
import Card from "../../components/card/Card";
import Lottie from "react-lottie-player";
import Logo from "./MyLogo.json";
import BottomNav from "../../components/bottomNav/BottomNav";
import { motion } from "framer-motion";

const JPMCLogo = require("../../assets/JP-Morgan-Chase-Logo.png");
const STNLogo = require("../../assets/Stantec-Logo.png");

export default function MainPage() {
  const [width, setWidth] = useState(0);
  const slider = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);
  return (
    <div className="main-page-content">
      <div className="main-page-logo">
        <Lottie animationData={Logo} className="player" loop play />
      </div>
      <div className="resume">
        <motion.div ref={slider} className="slider">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-slider"
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
          </motion.div>
        </motion.div>
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
      <BottomNav />
    </div>
  );
}

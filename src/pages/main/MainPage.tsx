import React from "react";
import "./MainPage.scss";
import { motion } from "framer-motion";
import BottomNav from "../../components/bottomNav/BottomNav";
import PortfolioSlider from "../../components/portfolioSlider/PortfolioSlider";
import Header from "../../components/header/Header";
import Resume from "../../components/resume/Resume";
import Certs from "../../components/certs/Certs";
import ModeToggle from "../../components/modeToggle/ModeToggle";

export default function MainPage() {
  return (
    <>
      <div id="main-page-content" className="main-page-content">
        <ModeToggle />
        <div id="home" className="home">
          <Header />
        </div>
        <motion.div id="portfolio" className="section">
          <div className="section-name">
            <h1>Portfolio</h1>
          </div>
          <PortfolioSlider />
        </motion.div>
        <div id="experience" className="section">
          <div className="section-name">
            <h1>Experience</h1>
          </div>
          <Resume />
          <Certs />
        </div>
        <div id="contact" className="section">
          <div className="section-name">
            <h1>Let's Connect</h1>
          </div>
          <div className="glass contact"></div>
        </div>
        <BottomNav />
      </div>
    </>
  );
}

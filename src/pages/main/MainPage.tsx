import React from "react";
import "./MainPage.scss";
import BottomNav from "../../components/bottomNav/BottomNav";
import PortfolioSlider from "../../components/portfolioSlider/PortfolioSlider";
import Header from "../../components/header/Header";
import Resume from "../../components/resume/Resume";

export default function MainPage() {
  return (
    <div className="main-page-content bg-wrap">
      <div id="home" className="home">
        <Header />
      </div>
      <div id="portfolio" className="section">
        <div className="section-name">
          <h1>Portfolio</h1>
        </div>
        <PortfolioSlider />
      </div>
      <div id="experience" className="section">
        <div className="section-name">
          <h1>Experience</h1>
        </div>
        <Resume />
      </div>
      <div id="contact" className="section">
        <div className="section-name">
          <h1>Let's Connect</h1>
        </div>
        <div className="glass contact"></div>
      </div>
      <BottomNav />
    </div>
  );
}

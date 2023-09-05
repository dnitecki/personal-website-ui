import React from "react";
import "./MainPage.scss";
import Card from "../../components/card/Card";
import BottomNav from "../../components/bottomNav/BottomNav";
import PortfolioSlider from "../../components/portfolioSlider/PortfolioSlider";
import Header from "../../components/header/Header";

export default function MainPage() {
  return (
    <div className="main-page-content">
      <Header />
      <div className="section-name">
        <h1>Portfolio</h1>
      </div>
      <PortfolioSlider />
      <div className="section-name">
        <h1>Experience</h1>
      </div>
      <Card />
      <Card />
      <Card />
      <div className="section-name">
        <h1>Contact</h1>
      </div>
      <Card />
      <BottomNav />
    </div>
  );
}

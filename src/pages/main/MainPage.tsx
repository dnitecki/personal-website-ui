import React from "react";
import "./MainPage.scss";
import Card from "../../components/card/Card";
import BottomNav from "../../components/bottomNav/BottomNav";
import PortfolioSlider from "../../components/portfolioSlider/PortfolioSlider";

export default function MainPage() {
  return (
    <div className="main-page-content">
      <div className="portfolio">
        <PortfolioSlider />
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
      <BottomNav />
    </div>
  );
}

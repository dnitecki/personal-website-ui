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
      <PortfolioSlider />
      <Card />
      <Card />
      <Card />
      <Card />
      <BottomNav />
    </div>
  );
}

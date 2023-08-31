import React from "react";
import "./MainPage.scss";
import Card from "../../components/card/Card";
import Lottie from "react-lottie-player";
import Logo from "./MyLogo.json";
import BottomNav from "../../components/bottomNav/BottomNav";

export default function MainPage() {
  return (
    <div className="main-page-content">
      <Card />
      <div className="main-page-logo">
        <Lottie animationData={Logo} className="player" loop play />
      </div>
      <div className="main-page-bottom">
        <BottomNav />
      </div>
    </div>
  );
}

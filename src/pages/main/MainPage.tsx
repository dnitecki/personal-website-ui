import React from "react";
import "./MainPage.scss";
import Card from "../../components/card/Card";
import Lottie from "react-lottie-player";
import Logo from "./MyLogo.json";
import BottomNav from "../../components/bottomNav/BottomNav";

const JPMCLogo = require("../../assets/JP-Morgan-Chase-Logo.png");
const STNLogo = require("../../assets/Stantec-Logo.png");

export default function MainPage() {
  return (
    <div className="main-page-content">
      <div className="main-page-logo">
        <Lottie animationData={Logo} className="player" loop play />
      </div>
      <div className="resume">
        <div className="glass resume-card">
          <div className="top-card">
            <div className="logo-container">
              <img className="JPMCLogo" src={JPMCLogo} alt="logo" />
            </div>
          </div>
        </div>
        <div className="glass resume-card">
          <div className="top-card">
            <div className="logo-container">
              <img className="STNLogo" src={STNLogo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <BottomNav />
    </div>
  );
}

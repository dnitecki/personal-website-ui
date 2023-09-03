import React from "react";
import "./StartupAnimation.scss";
import Lottie from "react-lottie-player";
import Logo from "../../assets/MyLogo.json";

export default function StartupAnimation() {
  return (
    <div>
      <div className="startup-container">
        <div className="main-page-logo">
          <Lottie animationData={Logo} className="player" loop play />
        </div>
      </div>
    </div>
  );
}

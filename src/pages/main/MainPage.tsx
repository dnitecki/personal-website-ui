import React from "react";
import "./MainPage.scss";
import Card from "../../components/card/Card";
import Lottie from "lottie-react";
import Logo from "./MyLogo.json";

export default function MainPage() {
  return (
    <div className="main-page-content">
      <Card />
      <div>
        <Lottie animationData={Logo} />
      </div>
    </div>
  );
}

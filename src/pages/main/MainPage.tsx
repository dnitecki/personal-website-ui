import React from "react";
import "./MainPage.scss";
import Card from "../../components/card/Card";
import BottomNav from "../../components/bottomNav/BottomNav";
import ResumeSlider from "../../components/resumeSlider/ResumeSlider";

export default function MainPage() {
  return (
    <div className="main-page-content">
      <div className="resume">
        <ResumeSlider />
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
      <BottomNav />
    </div>
  );
}

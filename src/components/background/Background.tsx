import React, { useEffect } from "react";
import "./Background.scss";
import Clouds from "../clouds/Clouds";

export default function Background() {
  useEffect(() => {
    createStars(75);
  });

  const createStars = (stars: number) => {
    for (let i = 0; i < stars; i++) {
      drawStar();
    }
  };

  const drawStar = () => {
    const tmpStar = document.createElement("figure");
    tmpStar.className = "star";
    tmpStar.style.top = 100 * Math.random() + "%";
    tmpStar.style.left = 100 * Math.random() + "%";
    document.getElementById("stars").appendChild(tmpStar);
  };

  return (
    <>
      <Clouds />
      <div className="stars-container">
        <div className="stars" id="stars" />
      </div>
    </>
  );
}

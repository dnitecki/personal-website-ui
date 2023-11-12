import React, { useEffect } from "react";
import "./Background.scss";

export default function Background() {
  function createStars(stars: number) {
    for (let i = 0; i < stars; i++) {
      drawStar();
    }
  }

  function drawStar() {
    const tmpStar = document.createElement("figure");
    tmpStar.className = "star";
    tmpStar.style.top = 100 * Math.random() + "%";
    tmpStar.style.left = 100 * Math.random() + "%";
    document.getElementById("stars").appendChild(tmpStar);
  }

  useEffect(() => {
    createStars(75);
  });
  return <div className="stars" id="stars"></div>;
}

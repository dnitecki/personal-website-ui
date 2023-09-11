import React, { useEffect } from "react";
import "./Background.scss";

export default function Background() {
  function createStars(i: number) {
    for (i; i; i--) {
      drawStars();
    }
  }

  function drawStars() {
    const tmpStar = document.createElement("figure");
    tmpStar.className = "star";
    tmpStar.style.top = 100 * Math.random() + "%";
    tmpStar.style.left = 100 * Math.random() + "%";
    document.getElementById("stars").appendChild(tmpStar);
  }

  useEffect(() => {
    createStars(50);
  });
  return <div className="stars" id="stars"></div>;
}

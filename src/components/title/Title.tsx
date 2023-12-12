import React from "react";
import "./Title.scss";
import { Parallax } from "react-scroll-parallax";

export default function Title() {
  return (
    <>
      <Parallax speed={-35} className="title-container">
        <div className="title-text">
          <h1>Dominick</h1>
        </div>
        <div className="title-text">
          <h2>Nitecki</h2>
        </div>
      </Parallax>
    </>
  );
}

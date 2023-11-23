import React from "react";
import "./Envelope.scss";

export default function Envelope() {
  return (
    <div className="envelope-container">
      <div id="envelope" className="envelope open">
        <div className="front-envelope flap"></div>
        <div className="front-envelope pocket"></div>
        <div className="letter">
          <div className="words line1"></div>
          <div className="words line2"></div>
          <div className="words line3"></div>
          <div className="words line4"></div>
        </div>
      </div>
    </div>
  );
}

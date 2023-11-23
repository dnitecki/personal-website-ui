import React from "react";
import "./Envelope.scss";

export default function Envelope() {
  return (
    <div className="envlope-container">
      <div id="envelope" className="envelope">
        <div className="front flap"></div>
        <div className="front pocket"></div>
        <div className="letter">
          <div className="words line1"></div>
          <div className="words line2"></div>
          <div className="words line3"></div>
          <div className="words line4"></div>
        </div>
        <div className="hearts">
          <div className="heart a1"></div>
          <div className="heart a2"></div>
          <div className="heart a3"></div>
        </div>
      </div>
    </div>
  );
}

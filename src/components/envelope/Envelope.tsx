import React, { useEffect, useState } from "react";
import "./Envelope.scss";

export default function Envelope() {
  const [formComplete, setFormComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFormComplete(true);
    }, 500);
  });

  return (
    <div className="envelope-container">
      <div className={`envelope ${formComplete ? "close" : "open"}`}>
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

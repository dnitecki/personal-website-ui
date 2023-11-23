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
      <div className="sent-text">
        <svg
          className="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            className="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            className="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
        <h1>Message Sent!</h1>
      </div>
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

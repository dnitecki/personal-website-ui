import React from "react";
import "./Background.scss";

export default function Background() {
  return (
    <div className="bg-wrap">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <rect x="0" y="0" width="100%" height="100%" fill="#192841"></rect>
      </svg>
    </div>
  );
}

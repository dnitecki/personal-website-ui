import React from "react";
import "./ModeToggle.scss";

export default function ModeToggle() {
  return (
    <div className="mode-toggle-container">
      <input type="checkbox" id="mode-toggle" className="mode-toggle" />
      <label htmlFor="mode-toggle" className="toggle-label"></label>
    </div>
  );
}

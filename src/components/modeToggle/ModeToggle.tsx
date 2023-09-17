import React, { useState } from "react";
import "./ModeToggle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function ModeToggle() {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
    if (checked) {
      document.getElementById("app").style.color = "white";
    } else {
      document.getElementById("app").style.color = "black";
    }
  };
  return (
    <div className="mode-toggle-container">
      <input
        onChange={handleCheck}
        defaultChecked={checked}
        type="checkbox"
        id="mode-toggle"
        className="mode-toggle"
      />
      <label htmlFor="mode-toggle" className="toggle-label">
        <div className="toggle-icons">
          <FontAwesomeIcon className="moon" icon={faMoon} />
          <FontAwesomeIcon className="sun" icon={faSun} />
        </div>
      </label>
    </div>
  );
}

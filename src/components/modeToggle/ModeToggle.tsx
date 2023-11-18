import React, { useContext, useEffect, useState } from "react";
import "./ModeToggle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { ToggleContext } from "../../context/toggleContext";

export default function ModeToggle() {
  const [checked, setChecked] = useState(false);
  const { setToggle } = useContext(ToggleContext);

  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  const handleCheck = () => {
    if (checked) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    setChecked(!checked);
    setToggle(!checked);
  };
  return (
    <div className="mode-toggle-container">
      <input
        onChange={handleCheck}
        type="checkbox"
        id="mode-toggle"
        className="mode-toggle"
      />
      <label htmlFor="mode-toggle" className="toggle-label">
        <div className="toggle-icons">
          <FontAwesomeIcon
            className={`moon ${
              checked ? "icon-inactive moon-color" : "icon-active"
            }`}
            icon={faMoon}
          />
          <FontAwesomeIcon
            className={`sun ${
              checked ? "icon-active" : "icon-inactive sun-color"
            }`}
            icon={faSun}
          />
        </div>
      </label>
    </div>
  );
}

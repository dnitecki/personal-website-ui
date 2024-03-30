import React, { useContext, useEffect, useState } from "react";
import "./ModeToggle.scss";
import { ToggleContext } from "../../context/toggleContext";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Brightness7Icon from "@mui/icons-material/Brightness7";
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
          <NightsStayIcon
            fontSize="inherit"
            className={`moon ${
              checked ? "icon-inactive moon-color" : "icon-active"
            }`}
          />
          <Brightness7Icon
            fontSize="inherit"
            className={`sun ${
              checked ? "icon-active" : "icon-inactive sun-color"
            }`}
          />
        </div>
      </label>
    </div>
  );
}

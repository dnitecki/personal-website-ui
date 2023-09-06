import React from "react";
import "./BottomNav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function BottomNav() {
  return (
    <div className=" bottomNav-container">
      <div className="bottomNav-links">
        <FontAwesomeIcon icon={faHouse} />
        <FontAwesomeIcon icon={faFolder} />
        <FontAwesomeIcon icon={faBusinessTime} />
        <FontAwesomeIcon icon={faPaperPlane} />
      </div>
    </div>
  );
}

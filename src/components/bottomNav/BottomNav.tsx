import React from "react";
import "./BottomNav.scss";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function BottomNav() {
  return (
    <div className=" bottomNav-container">
      <ul className="bottomNav-links">
        <li>
          <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-15}
            duration={500}
          >
            <FontAwesomeIcon icon={faFolder} />
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-15}
            duration={500}
          >
            <FontAwesomeIcon icon={faBusinessTime} />
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-15}
            duration={500}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

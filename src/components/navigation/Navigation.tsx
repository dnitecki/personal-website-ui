import React, { useState } from "react";
import "./Navigation.scss";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFolder,
  faBriefcase,
  faPaperPlane,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const [show, setShow] = useState(false);

  const handleMenuClick = () => {
    setShow(!show);
  };

  return (
    <>
      <button
        className={`menu-btn ${show ? "inactive-btn" : "active-btn"}`}
        onClick={handleMenuClick}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <button
        className={`menu-btn ${show ? "active-btn" : "inactive-btn"}`}
        onClick={handleMenuClick}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div
        className={`bottomNav-container ${show ? "nav-show" : "nav-hidden"}`}
      >
        <ul className="bottomNav-links">
          <li className="nav-btn">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              height="50px"
            >
              <FontAwesomeIcon icon={faHouse} />
            </Link>
          </li>
          <li className="nav-btn">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              <FontAwesomeIcon icon={faFolder} />
            </Link>
          </li>
          <li className="nav-btn">
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              <FontAwesomeIcon icon={faBriefcase} />
            </Link>
          </li>
          <li className="nav-btn">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import "./BottomNav.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function BottomNav() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY + 5) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  });

  return (
    <div className={`bottomNav-container ${show ? "nav-show" : "nav-hidden"}`}>
      <ul className="bottomNav-links">
        <li className="nav-button">
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
        <li className="nav-button">
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
        <li className="nav-button">
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <FontAwesomeIcon icon={faBusinessTime} />
          </Link>
        </li>
        <li className="nav-button">
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
  );
}

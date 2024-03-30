import React, { useState } from "react";
import "./Navigation.scss";
import { Link } from "react-scroll";
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import WorkIcon from "@mui/icons-material/Work";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

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
        <MenuIcon />
      </button>
      <button
        className={`menu-btn ${show ? "active-btn" : "inactive-btn"}`}
        onClick={handleMenuClick}
      >
        <CloseIcon />
      </button>
      <div
        className={`navigation-container ${show ? "nav-show" : "nav-hidden"}`}
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
              <HomeIcon fontSize="inherit" />
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
              <FolderIcon fontSize="inherit" />
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
              <WorkIcon fontSize="inherit" />
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
              <SendIcon fontSize="inherit" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

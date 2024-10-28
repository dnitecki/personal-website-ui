import { useEffect, useRef, useState } from "react";
import "./Navigation.scss";
import { EMPTY_STRING, MEDIA_FILES } from "../../utils/constants";
import Links from "./components/Links";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        )?.target;
        if (visibleSection) {
          setActiveSection(visibleSection.id);
        }
      },
      {
        threshold: 0.5,
      }
    );

    const sections = document.querySelectorAll("[section-id]");

    sections.forEach((section) => {
      observer.current.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="navigation-container">
      <div className="navigation-logo">
        <img src={MEDIA_FILES.dnIcon} alt="Dominick Nitecki Logo" />
      </div>
      <ul>
        <li>
          <a
            href="#overview"
            className={activeSection === "overview" ? "active" : EMPTY_STRING}
          >
            <p>Overview</p>
          </a>
        </li>
        <li>
          <a
            href="#resume"
            className={activeSection === "resume" ? "active" : EMPTY_STRING}
          >
            <p>Resume</p>
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className={activeSection === "portfolio" ? "active" : EMPTY_STRING}
          >
            <p>Portfolio</p>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : EMPTY_STRING}
          >
            <p>Contact</p>
          </a>
        </li>
      </ul>
      <Links />
    </div>
  );
};

export default Navigation;

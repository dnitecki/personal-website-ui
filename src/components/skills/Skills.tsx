import React, { useEffect, useRef, useState } from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import { SkillItems } from "../../mappers/contentMappers";

export default function Skills() {
  const [width, setWidth] = useState(0);
  const slider = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);

  return (
    <div className="skills-container">
      <motion.div
        ref={slider}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-container"
      >
        {SkillItems.map((item: any, index: number) => (
          <div className="skill-item" key={index}>
            <div className="skill-bubble">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

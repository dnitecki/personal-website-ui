import React, { useEffect, useRef, useState } from "react";
import "./PortfolioSlider.scss";
import { motion } from "framer-motion";

export default function PortfolioSlider() {
  const [width, setWidth] = useState(0);
  const slider = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);
  return (
    <div>
      <div ref={slider} className="slider">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-slider"
        >
          <div className="item">
            <div className="glass portfolio-card"></div>
          </div>
          <div className="item">
            <div className="glass portfolio-card"></div>
          </div>
          <div className="item">
            <div className="glass portfolio-card"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

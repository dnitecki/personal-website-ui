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
      <motion.div ref={slider} className="slider">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-slider"
        >
          <motion.div className="item">
            <div className="glass portfolio-card"></div>
          </motion.div>
          <motion.div className="item">
            <div className="glass portfolio-card"></div>
          </motion.div>
          <motion.div className="item">
            <div className="glass portfolio-card"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

import React from "react";
import "./MainPage.scss";
import { motion } from "framer-motion";
import BottomNav from "../../components/bottomNav/BottomNav";
import ModeToggle from "../../components/modeToggle/ModeToggle";
import { MainPageItems } from "../../mappers/mainPageMapper";
import { MainPageType } from "../../utils/types";

export default function MainPage() {
  return (
    <>
      <div id="main-page-content" className="main-page-content">
        <ModeToggle />
        {MainPageItems.map((section: MainPageType, index: number) => (
          <motion.div key={index} id={section.id} className={section.className}>
            {section.headerText && (
              <div className="section-name">
                <h1>{section.headerText}</h1>
              </div>
            )}
            <section.component />
          </motion.div>
        ))}
        <BottomNav />
      </div>
    </>
  );
}

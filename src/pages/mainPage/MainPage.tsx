import "./MainPage.scss";
import { motion } from "framer-motion";
import Navigation from "../../components/navigation/Navigation";
import { MainPageItems } from "../../mappers/mainPageMapper";
import { MainPageType } from "../../utils/types";

export default function MainPage() {
  return (
    <>
      <div id="main-page-content" className="main-page-content">
        {MainPageItems.map((section: MainPageType, index: number) => (
          <motion.div
            key={index}
            id={section.id}
            className={section.className}
            initial={{ translateY: 500 }}
            animate={{ translateY: 0 }}
            transition={{ duration: 1, delay: index * 0.15 }}
          >
            {section.headerText && (
              <div className="section-name">
                <h1>{section.headerText}</h1>
              </div>
            )}
            <section.component />
          </motion.div>
        ))}
        <Navigation />
      </div>
    </>
  );
}

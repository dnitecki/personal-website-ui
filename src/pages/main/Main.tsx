import Header from "../../components/header/Header";
import Contact from "../contact/Contact";
import Overview from "../overview/Overview";
import Portfolio from "../portfolio/Portfolio";
import Resume from "../resume/Resume";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main-container">
      <section id="overview">
        <Overview />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Main;

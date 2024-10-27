import Contact from "../contact/Contact";
import Overview from "../overview/Overview";
import Portfolio from "../portfolio/Portfolio";
import Resume from "../resume/Resume";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main-container">
      <section section-id="overview" id="overview">
        <Overview />
      </section>
      <section section-id="resume" id="resume">
        <Resume />
      </section>
      <section section-id="portfolio" id="portfolio">
        <Portfolio />
      </section>
      <section section-id="contact" id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Main;

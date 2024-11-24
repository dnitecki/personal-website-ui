import Contact from "@components/sections/contact/Contact";
import Overview from "@components/sections/overview/Overview";
import Portfolio from "@components/sections/portfolio/Portfolio";
import Resume from "@components/sections/resume/Resume";
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

import Header from "../../components/header/Header";
import Contact from "../contact/Contact";
import Overview from "../overview/Overview";
import Portfolio from "../portfolio/Portfolio";
import Resume from "../resume/Resume";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main-container">
      <section>
        <Overview />
      </section>
      <section>
        <Resume />
      </section>
      <section>
        <Portfolio />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
};

export default Main;

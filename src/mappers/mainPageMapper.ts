import { MainPageType } from "../utils/types";
import Header from "../components/header/Header";
import PortfolioSlider from "../components/portfolioSlider/PortfolioSlider";
import Resume from "../components/resume/Resume";
import Contact from "../components/contact/Contact";

export const MainPageItems: MainPageType[] = [
  {
    id: "home",
    className: "home section",
    component: Header,
  },
  {
    id: "portfolio",
    className: "section",
    headerText: "Portfolio",
    component: PortfolioSlider,
  },
  {
    id: "experience",
    className: "section",
    headerText: "Resume",
    component: Resume,
  },
  {
    id: "contact",
    className: "section",
    headerText: "Let's Connect",
    component: Contact,
  },
];

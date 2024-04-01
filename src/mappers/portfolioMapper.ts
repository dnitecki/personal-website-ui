import { finfetch, insurance } from "../utils/constants";
import finfetchMockup from "../assets/FinfetchMockup.png";
import finfetchIcon from "../assets/FinFetch-icon.png";
import insuranceMockup from "../assets/InsuranceMockup.png";
import insuranceIcon from "../assets/onestop-icon.png";

export const PortfolioItems = [
  {
    icon: {
      src: finfetchIcon,
      className: "finfetch-icon",
    },
    coverImage: {
      src: finfetchMockup,
      className: "finfetch",
    },
    url: finfetch.url,
    appName: finfetch.appName,
  },
  {
    icon: {
      src: insuranceIcon,
      className: "insurance-icon",
    },
    coverImage: {
      src: insuranceMockup,
      className: "insurance",
    },
    url: insurance.url,
    appName: insurance.appName,
  },
];

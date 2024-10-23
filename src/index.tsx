import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { ParallaxProvider } from "react-scroll-parallax";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <ParallaxProvider>
    <App />
  </ParallaxProvider>
);

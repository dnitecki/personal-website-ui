import React, { useEffect } from "react";
import "./App.scss";
import Background from "./components/background/Background";
import MainPage from "./pages/main/MainPage";

function App() {
  // useEffect(() => {
  //   const documentHeight = () => {
  //     const doc = document.documentElement;
  //     doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
  //   };
  //   window.addEventListener("resize", documentHeight);
  //   documentHeight();
  // }, []);

  return (
    <div className="app">
      <Background />
      <div className="app-container">
        <MainPage />
      </div>
    </div>
  );
}

export default App;

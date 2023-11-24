import React, { useEffect, useState } from "react";
import "./App.scss";
import MainPage from "./pages/main/MainPage";
import StartupAnimation from "./components/startupAnimation/StartupAnimation";
import Background from "./components/background/Background";
import { Parallax } from "react-scroll-parallax";

function App() {
  const [showStartup, setShowStartup] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowStartup(false);
    }, 4000);
  }, []);

  return (
    <div className="app" id="app">
      {showStartup && <StartupAnimation />}
      <div className="bg-wrap">
        <div className="background" />
        <Parallax speed={-20}>
          <Background />
        </Parallax>
      </div>
      <div
        id="app-container"
        className={showStartup ? "app-container no-scroll" : "app-container"}
      >
        <MainPage />
      </div>
    </div>
  );
}

export default App;

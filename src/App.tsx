import React, { useEffect, useState } from "react";
import "./App.scss";
import Background from "./components/background/Background";
import MainPage from "./pages/main/MainPage";
import StartupAnimation from "./components/startupAnimation/StartupAnimation";

function App() {
  const [showStartup, setShowStartup] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowStartup(false);
    }, 4000);
  }, []);

  return (
    <div className={showStartup ? "app no-scroll" : "app"}>
      {showStartup ? <StartupAnimation /> : null}
      <Background />
      <div className="app-container">
        <MainPage />
      </div>
    </div>
  );
}

export default App;

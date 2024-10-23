import { useEffect, useState } from "react";
import "./App.scss";
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
    <div className="app " id="app">
      {showStartup ? (
        <StartupAnimation />
      ) : (
        <div
          id="app-container"
          className={
            showStartup ? "app-container no-scroll" : "app-container background"
          }
        >
          <MainPage />
        </div>
      )}
    </div>
  );
}

export default App;

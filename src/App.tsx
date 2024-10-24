import { useEffect, useState } from "react";
import "./App.scss";
import MainPage from "./pages/mainPage/MainPage";
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
        <div id="app-container" className="app-container">
          <MainPage />
        </div>
      )}
    </div>
  );
}

export default App;

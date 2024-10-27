import { useEffect, useState } from "react";
import "./App.scss";
import MainPage from "./pages/mainPage/MainPage";
import StartupAnimation from "./components/startupAnimation/StartupAnimation";
import Overview from "./pages/overview/Overview";
import Navigation from "./components/navigation/Navigation";

function App() {
  const [showStartup, setShowStartup] = useState(false);

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
          <Navigation />
          <Overview />
        </div>
      )}
    </div>
  );
}

export default App;

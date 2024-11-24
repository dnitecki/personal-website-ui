import { useEffect, useState } from "react";
import "./App.scss";
import StartupAnimation from "./components/animations/startupAnimation/StartupAnimation";
import Navigation from "./components/navigation/Navigation";
import Main from "@pages/main/Main";

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
          <Main />
        </div>
      )}
    </div>
  );
}

export default App;

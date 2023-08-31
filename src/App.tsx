import React, { useEffect } from "react";
import "./App.scss";
import Background from "./components/background/Background";
import MainPage from "./pages/main/MainPage";

function App() {
  window.addEventListener("load", function () {
    setTimeout(function () {
      // This hides the address bar:
      window.scrollTo(0, 1);
    }, 0);
  });

  useEffect(() => {
    if (window.scrollY >= 100) {
      window.scrollTo(0, 1);
    } else {
      window.scrollTo(0, 0);
    }
  }, [window.scrollY]);

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

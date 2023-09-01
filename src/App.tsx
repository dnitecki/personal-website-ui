import React, { useEffect } from "react";
import "./App.scss";
import Background from "./components/background/Background";
import MainPage from "./pages/main/MainPage";

function App() {
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

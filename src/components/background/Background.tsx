import React from "react";
import "./Background.scss";
import Lottie from "react-lottie-player";
import background from "./dark.json";

export default function Background() {
  return (
    <div className="bg-wrap">
      <Lottie
        animationData={background}
        className="player"
        play
        speed={0.3}
        rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
        style={{ height: "100%" }}
      />
    </div>
  );
}

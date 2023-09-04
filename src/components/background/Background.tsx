import React from "react";
import "./Background.scss";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import background from "./dark.json";

export default function Background() {
  return (
    <div className="bg-wrap">
      <Lottie
        animationData={background}
        className="player"
        play
        renderer="svg"
        rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
        style={{ height: "100%" }}
      />
    </div>
  );
}

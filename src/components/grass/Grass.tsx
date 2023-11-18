import React, { useEffect, useRef } from "react";
import "./Grass.scss";

const CanvasAnimation = () => {
  const canvasRef = useRef(null);
  const stackRef = useRef([]);
  const width = window.innerWidth - 60;
  const height = "100";

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const drawer = () => {
      // Clear the canvas with a transparent color
      ctx.clearRect(0, 0, width, height);

      stackRef.current.forEach((el) => el());
      requestAnimationFrame(drawer);
    };

    const grassAnimation = () => {
      let x = 0;
      const maxTall = Math.random() * 100 + 3;
      const maxSize = Math.random() * 5 + 2;
      const speed = Math.random() * 0.1;
      const swayAmplitude = 20;
      const position = Math.random() * width - width / 2;
      const c = (l: any, u: any) =>
        Math.round(Math.random() * (u || 255) + l || 0);
      const color =
        "rgba(" + c(50, 10) + "," + c(150, 50) + "," + c(50, 50) + ", 0.5)";

      return () => {
        const deviation =
          Math.cos(x / 30) * Math.min(x / swayAmplitude, swayAmplitude);
        const tall = Math.min(x / 2, maxTall);
        const size = Math.min(x / 50, maxSize);
        x += speed;

        ctx.save();
        ctx.strokeWidth = 10;
        ctx.translate(width / 2 + position, height);
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.lineTo(-size, 0);
        ctx.quadraticCurveTo(-size, -tall / 3, deviation, -tall);
        ctx.quadraticCurveTo(size, -tall / 3, size, 0);
        ctx.fill();
        ctx.restore();
      };
    };

    // Populate the stack with anim functions
    stackRef.current = Array.from({ length: 400 }, grassAnimation);

    canvas.width = width;
    canvas.height = height;

    drawer();

    // Cleanup function
    return () => {
      // Clear the canvas when the component is unmounted
      ctx.clearRect(0, 0, width, height);
    };
  }, [width, height]);

  return <canvas className="grass-container" ref={canvasRef}></canvas>;
};

export default CanvasAnimation;

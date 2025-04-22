"use client";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function StarsBackground() {
  const particlesInit = async (main: any) => {
    await loadSlim(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: "#000000" } },
        particles: {
          number: { value: 300 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 1, random: true },
          size: { value: 2, random: false },
          move: {
            enable: true,
            speed: 5,
            direction: "bottom",
            outModes: { default: "out" },
          },
        },
      }}
    />
  );
}

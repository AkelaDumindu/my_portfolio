import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

const ParticleBack = (props) => {
  const [init, setInit] = useState(false);

  // Initialize the particles engine once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "#000", // Black background
        },
        opacity: 1,
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      detectRetina: true,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: true,
            mode: "trail",
          },
          resize: {
            delay: 0.5,
            enable: true,
          },
        },
        modes: {
          trail: {
            delay: 0.005,
            pauseOnStop: true,
            quantity: 5,
            particles: {
              color: {
                value: "#ffffff", // White trail particles
              },
              move: {
                speed: 2,
              },
              size: {
                value: {
                  min: 0.5,
                  max: 1.5, // Adjusted size for smaller dots
                },
                animation: {
                  enable: true,
                  speed: 5,
                  startValue: "min",
                  destroy: "max",
                },
              },
            },
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff", // White dots
          animation: {
            h: {
              enable: true,
              speed: 50,
            },
          },
        },
        shape: {
          type: "circle", // Circular dots
        },
        size: {
          value: {
            min: 0.5,
            max: 1.5, // Smaller size for the dots
          },
          animation: {
            enable: true,
            speed: 3,
            startValue: "random",
          },
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
          value: 100, // Total number of dots
        },
        opacity: {
          value: {
            min: 0.3,
            max: 0.8,
          },
          animation: {
            enable: true,
            speed: 0.5,
          },
        },
        move: {
          enable: true,
          speed: 2,
          outModes: {
            default: "out",
          },
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    }),
    []
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticleBack;

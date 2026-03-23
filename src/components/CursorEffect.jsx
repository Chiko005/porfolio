import Particles from "react-tsparticles";

export default function CursorEffect() {
  return (
    <Particles
      options={{
        particles: {
          number: { value: 0 },
          move: {
            enable: true,
            speed: 5,
            outModes: { default: "destroy" }
          },
          size: { value: 5 },
          opacity: { value: 0.5 }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "trail" }
          },
          modes: {
            trail: {
              delay: 0.02,
              quantity: 5
            }
          }
        }
      }}
    />
  );
}
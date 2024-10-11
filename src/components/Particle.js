import React from "react";
import Particles from "react-tsparticles";

const PARTICLE_OPTIONS = {
  particles: {
    number: {
      value: 500,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
    shape: {
      type: ["circle", "square", 'triangle'],
    },
    color: {
      value: [
        "rgba(244, 67, 54, 0.5)", // Reduced opacity for the theme colors
        "rgba(233, 30, 99, 0.5)",
        "rgba(156, 39, 176, 0.5)",
        "rgba(103, 58, 183, 0.5)",
        "rgba(63, 81, 181, 0.5)",
        "rgba(33, 150, 243, 0.5)",
        "rgba(3, 169, 244, 0.5)",
        "rgba(0, 188, 212, 0.5)",
        "rgba(0, 150, 136, 0.5)",
        "rgba(76, 175, 80, 0.5)",
        "rgba(139, 195, 74, 0.5)",
        "rgba(205, 220, 57, 0.5)",
        "rgba(255, 235, 59, 0.5)",
        "rgba(255, 193, 7, 0.5)",
        "rgba(255, 152, 0, 0.5)",
        "rgba(255, 87, 34, 0.5)"
      ],
    },
    size: {
      value: { min: 5, max: 10 },
      random: true,
    },
    opacity: {
      value: 0.4, // Set a base opacity for particles to make them less visible
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.4, // Minimum opacity to add subtle animation
      },
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
};

function Particle() {
  return (
    <Particles id="tsparticles" params={PARTICLE_OPTIONS} />
  );
}

export default Particle;

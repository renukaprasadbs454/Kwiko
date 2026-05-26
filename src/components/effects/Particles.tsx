"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "7%", top: "30%", scale: 1.4 },
  { left: "14%", top: "36%", scale: 1.9 },
  { left: "21%", top: "42%", scale: 1.8 },
  { left: "28%", top: "48%", scale: 1.8 },
  { left: "35%", top: "54%", scale: 0.74 },
  { left: "42%", top: "60%", scale: 1.3 },
  { left: "49%", top: "66%", scale: 0.8 },
  { left: "56%", top: "72%", scale: 0.64 },
  { left: "63%", top: "78%", scale: 1.9 },
  { left: "70%", top: "84%", scale: 0.76 },
  { left: "77%", top: "90%", scale: 0.62 },
  { left: "84%", top: "96%", scale: 1.5 },
];

export function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-70">
      {particles.map((particle, index) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="absolute h-1.5 w-1.5 rounded-full bg-brand-light/70"
          style={{
            left: particle.left,
            top: particle.top,
            transform: `scale(${particle.scale})`,
          }}
          animate={{
            y: ["0%", "30%", "0%"],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 8 + index,
            delay: index * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

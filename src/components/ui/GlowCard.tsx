"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlowCard({ children, className = "", delay = 0 }: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
      className={`group relative rounded-2xl gradient-border glass p-6 transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(0,1,146,0.25)] ${className}`}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/0 via-brand/0 to-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

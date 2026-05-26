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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -5, boxShadow: "0 8px 32px rgba(0,1,146,0.12)" }}
      className={`group relative rounded-2xl bg-white border border-slate-200 p-6 transition-all duration-300 ${className}`}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/0 to-indigo-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

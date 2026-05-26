"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mb-14 ${alignClass}`}
    >
      {eyebrow && (
        <span className="inline-block text-sm font-medium tracking-widest uppercase text-brand-light/80 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gradient">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

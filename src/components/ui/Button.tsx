"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
}

const variants = {
  primary:
    "bg-brand text-white hover:bg-[#0000b8] glow-brand border border-brand-light/20",
  secondary:
    "glass text-white hover:border-brand-light/30 hover:bg-white/5",
  ghost: "text-white/80 hover:text-white hover:bg-white/5",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300";

  const classes = `${base} ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.98 },
    className: classes,
  };

  if (href) {
    return (
      <motion.div {...motionProps}>
        <Link href={href} className="inline-flex items-center justify-center gap-2 w-full h-full">
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  );
}

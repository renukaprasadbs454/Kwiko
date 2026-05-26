"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-surface/80 backdrop-blur-3xl">
      <motion.div
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        className="h-16 w-16 rounded-full border border-brand-light/60 bg-gradient-to-br from-brand to-[#101828]"
      />
    </div>
  );
}

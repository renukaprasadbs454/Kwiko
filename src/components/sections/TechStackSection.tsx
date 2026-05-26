"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TECH_STACK } from "@/lib/constants";

export function TechStackSection() {
  return (
    <section id="tech" className="relative py-20">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#000192]/60 to-transparent" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Tech Stack" title="We ship with modern infrastructure and AI platforms." />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-3 md:grid-cols-4"
        >
          {TECH_STACK.map((tech, index) => (
            <div
              key={tech}
              className="glass flex items-center justify-center rounded-2xl border border-white/10 px-4 py-5 text-center text-white/80"
              style={{ boxShadow: "0 0 40px rgba(0, 1, 146, 0.25)" }}
            >
              <motion.span
                animate={{ rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 6, delay: index * 0.2 }}
                className="text-lg font-semibold uppercase tracking-[0.3em]"
              >
                {tech}
              </motion.span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

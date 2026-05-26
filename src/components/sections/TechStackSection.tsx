"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TECH_STACK } from "@/lib/constants";

export function TechStackSection() {
  return (
    <section id="tech" className="relative py-20 bg-white">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Tech Stack" title="We ship with modern infrastructure and AI platforms." />
        <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {TECH_STACK.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,1,146,0.12)" }}
              className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-5 text-center transition-all duration-200"
            >
              <span className="text-sm font-semibold text-slate-700 tracking-wide">{tech}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

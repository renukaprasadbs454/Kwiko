"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MissionSection() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#000192]/40 via-transparent to-transparent" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-6">
        <SectionHeading eyebrow="Mission" title="Empower businesses with AI, automation, and cutting-edge technology." />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl border border-white/5 p-8 text-white/80"
        >
          <p className="text-lg leading-relaxed">
            Our mission is to empower businesses using AI, automation, and cutting-edge technology, turning visionary goals into measurable outcomes with elegant design, secure infrastructure, and responsive partnerships.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

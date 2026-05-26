"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MissionSection() {
  return (
    <section className="relative py-20 bg-white">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-6">
        <SectionHeading
          eyebrow="Mission"
          title="Empower businesses with AI, automation, and cutting-edge technology."
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-brand/20 bg-gradient-to-br from-indigo-50/60 to-white p-8 shadow-sm"
        >
          <p className="text-lg leading-relaxed text-slate-600">
            Our mission is to empower businesses using AI, automation, and cutting-edge technology,
            turning visionary goals into measurable outcomes with elegant design, secure infrastructure,
            and responsive partnerships.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

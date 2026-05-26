"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-slate-50">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="Modern AI & software delivery for ambitious teams."
          subtitle="Kwiko Technologies And Services blends product design, AI, and automation to craft scalable, high-performing platforms."
        />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <p className="text-lg leading-relaxed text-slate-600">
            A modern software and AI solutions company helping startups and businesses drive intelligent digital transformation.
            We craft AI systems, scalable software, branding, and online growth strategies grounded in transparent collaboration and measurable outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

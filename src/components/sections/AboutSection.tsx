"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-x-0 top-10 h-60 bg-gradient-to-b from-brand/30 to-transparent blur-3xl" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="Modern AI & software delivery for ambitious teams."
          subtitle="Kwiko Technologies And Services blends product design, AI, and automation to craft scalable, high-performing platforms."
        />
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl border border-white/5 p-8 text-white/80"
        >
          <p className="text-lg leading-relaxed text-white/80">
            A modern software and AI solutions company helping startups and businesses drive intelligent digital transformation.
            We craft AI systems, scalable software, branding, and online growth strategies grounded in transparent collaboration and measurable outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

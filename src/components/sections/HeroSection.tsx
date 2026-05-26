"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";
import { Cpu, Sparkles, Target } from "lucide-react";

const phrases = [
  "Crafting intelligent digital experiences.",
  "Automating workflows with precision.",
  "Scaling bold ideas through AI.",
];

const floatingCards = [
  { Icon: Cpu, label: "AI & Automation" },
  { Icon: Sparkles, label: "Product Design" },
  { Icon: Target, label: "Measurable Results" },
];

export function HeroSection() {
  const typedText = useTypingEffect(phrases);

  return (
    <section id="home" className="relative overflow-hidden bg-white pt-20 pb-16">
      <div className="hero-glow absolute inset-0 pointer-events-none" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6">
        {/* Logo lockup */}
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16">
            <Image src="/logo.png" alt="Kwiko logo" fill className="object-contain" priority />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-400">KWIKO</p>
            <p className="text-xs text-slate-400 tracking-widest">Technologies And Services Pvt. Ltd.</p>
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-5 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Building{" "}
            <span className="text-gradient">AI-Powered</span>{" "}
            Digital Solutions.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed"
          >
            A modern software and AI solutions company helping startups and businesses drive
            intelligent digital transformation, scalable software, branding, and growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex items-center gap-2 text-sm font-medium text-slate-500"
          >
            <span className="text-brand font-semibold">Now</span>
            <span>{typedText}&nbsp;</span>
            <span className="inline-block h-4 w-0.5 rounded-full bg-brand animate-pulse" />
          </motion.div>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Button href="#services">Our Services</Button>
          <Button variant="secondary" href="#contact">Contact Us</Button>
        </motion.div>

        {/* Info chips */}
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { label: "Mission", value: "AI. Automation. Impact." },
            { label: "Tech Stack", value: "React · Next.js · AWS" },
            { label: "Location", value: COMPANY.location },
          ].map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4"
            >
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">{item.label}</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Status banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-between rounded-2xl border border-brand/20 bg-gradient-to-r from-brand/5 via-indigo-50/60 to-white px-6 py-5 shadow-sm"
        >
          <div className="space-y-1">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Status</p>
            <p className="text-lg font-bold text-slate-900">Ready to launch AI endeavors</p>
          </div>
          <div className="flex items-center gap-3 text-slate-500 text-sm">
            <span>Cloud · Automation · Data</span>
            <div className="relative h-9 w-9">
              <Image src="/logo.png" alt="Kwiko badge" fill className="object-contain" />
            </div>
          </div>
        </motion.div>

        {/* Floating tech cards */}
        <div className="grid gap-5 sm:grid-cols-3">
          {floatingCards.map(({ Icon, label }, index) => (
            <motion.div
              key={label}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 10 + index * 2, delay: index, ease: "easeInOut" }}
              className="glass rounded-2xl px-5 py-6 text-center shadow-sm"
            >
              <Icon className="mx-auto text-brand" size={28} />
              <p className="mt-3 text-sm font-medium text-slate-700">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

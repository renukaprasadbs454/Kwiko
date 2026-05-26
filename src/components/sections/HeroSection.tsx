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

export function HeroSection() {
  const typedText = useTypingEffect(phrases);

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20">
      <div className="hero-glow absolute inset-0" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="flex items-center gap-4">
          <div className="relative h-20 w-20">
            <Image src="/logo.png" alt="Kwiko logo" fill className="object-contain" priority />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.6em] text-white/60">KWIKO</p>
            <p className="text-xs text-white/50 tracking-[0.4em]">Technologies And Services</p>
          </div>
        </div>

        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Building AI-Powered Digital Solutions.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-white/70 max-w-2xl"
          >
            A modern software and AI solutions company helping startups and businesses with intelligent
            digital transformation, scalable software, branding, and growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-baseline gap-2 text-sm font-semibold uppercase tracking-[0.4em]"
          >
            <span className="text-brand-light">Now</span>
            <span className="text-white/60">{typedText}&nbsp;</span>
            <span className="h-4 w-1 rounded-full bg-brand animate-pulse" />
          </motion.div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button href="#services">Our Services</Button>
          <Button variant="secondary" href="#contact">
            Contact Us
          </Button>
        </div>

        <div className="grid gap-4 text-white sm:grid-cols-3">
          {[
            { label: "Mission", value: "AI. Automation. Impact." },
            { label: "Tech Stack", value: "React · Next.js · AWS" },
            { label: "Location", value: COMPANY.location },
          ].map((item) => (
            <div
              key={item.label}
              className="glass-strong rounded-2xl border border-white/5 p-5 text-sm uppercase tracking-[0.4em]"
            >
              <p className="text-xs text-white/50">{item.label}</p>
              <p className="text-base font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="relative flex items-center justify-between rounded-3xl border border-[#dbe4ff33] bg-gradient-to-br from-[#000192]/40 via-black/40 to-[#101828]/80 p-6 shadow-[0_0_80px_rgba(0,1,146,0.35)]">
          <div className="space-y-1">
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">Live status</p>
            <p className="text-2xl font-bold text-white">Ready to launch AI endeavors</p>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <span className="text-sm">Cloud | Automation | Data</span>
            <div className="relative h-10 w-10">
              <Image src="/logo.png" alt="Kwiko badge" fill className="object-contain" />
            </div>
          </div>
        </div>

        <div className="relative grid gap-6 font-semibold text-white sm:grid-cols-3">
          {[Cpu, Sparkles, Target].map((Icon, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 10 + index * 2, delay: index, ease: "easeInOut" }}
              className="glass rounded-2xl border border-white/10 p-5 text-center"
            >
              <Icon className="mx-auto text-brand" size={32} />
              <p className="mt-4 text-sm text-white/60">Floating insight</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { WHY_CHOOSE } from "@/lib/constants";
import { DynamicIcon } from "@/components/ui/IconMap";

export function WhyChooseSection() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#000192]/50 to-transparent" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Why Choose Us" title="Data-driven, creative, and future-ready partners." />
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {WHY_CHOOSE.map((item, index) => (
            <GlowCard key={item.title} delay={index * 0.05} className="p-5">
              <div className="flex items-center gap-3">
                <DynamicIcon name={item.icon} className="text-white" size={20} />
                <p className="text-sm font-semibold text-white">{item.title}</p>
              </div>
              <p className="mt-3 text-xs text-white/70">{item.description}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

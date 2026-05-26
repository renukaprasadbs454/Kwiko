"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { WHY_CHOOSE } from "@/lib/constants";
import { DynamicIcon } from "@/components/ui/IconMap";

export function WhyChooseSection() {
  return (
    <section className="relative py-20 bg-white">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Why Choose Us" title="Data-driven, creative, and future-ready partners." />
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {WHY_CHOOSE.map((item, index) => (
            <GlowCard key={item.title} delay={index * 0.06} className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/8 border border-brand/10">
                  <DynamicIcon name={item.icon} className="text-brand" size={18} />
                </div>
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { SERVICES } from "@/lib/constants";
import { DynamicIcon } from "@/components/ui/IconMap";

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20">
      <div className="gradient-border absolute inset-0 blur-[80px]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Services"
          title="Full-spectrum services that blend AI, software, and marketing."
          subtitle="We deliver thoughtful experiences across product strategy, development, automation, and growth."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((service, index) => (
            <GlowCard key={service.title} delay={index * 0.08}>
              <div className="flex items-center gap-3">
                <DynamicIcon name={service.icon} className="text-brand" size={28} />
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
              <p className="mt-3 text-white/70">{service.description}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

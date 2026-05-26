"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { SERVICES } from "@/lib/constants";
import { DynamicIcon } from "@/components/ui/IconMap";

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 bg-slate-50">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Services"
          title="Full-spectrum services that blend AI, software, and marketing."
          subtitle="We deliver thoughtful experiences across product strategy, development, automation, and growth."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {SERVICES.map((service, index) => (
            <GlowCard key={service.title} delay={index * 0.07}>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/8 border border-brand/10">
                  <DynamicIcon name={service.icon} className="text-brand" size={22} />
                </div>
                <h3 className="text-base font-semibold text-slate-900">{service.title}</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

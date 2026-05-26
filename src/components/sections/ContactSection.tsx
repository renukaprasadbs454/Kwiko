"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1fr,320px]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Talk to Kwiko, India’s AI-first digital partner."
            subtitle="Drop a message and we will respond within one business day."
          />
          <form className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <div className="space-y-1 text-sm uppercase tracking-[0.3em] text-white/70">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white focus:border-brand"
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-1 text-sm uppercase tracking-[0.3em] text-white/70">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white focus:border-brand"
                placeholder="you@email.com"
                required
              />
            </div>
            <div className="space-y-1 text-sm uppercase tracking-[0.3em] text-white/70">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white focus:border-brand"
                placeholder="Tell us about your idea..."
                required
              />
            </div>
            <Button type="submit" className="w-full">Send message</Button>
          </form>
        </div>
        <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-white/80 shadow-[0_0_60px_rgba(0,0,0,0.45)]">
          <p className="text-sm uppercase tracking-[0.4em] text-white/50">Reach out</p>
          <p className="text-base font-semibold">
            Email: <span className="text-white">{COMPANY.email}</span>
          </p>
          <p className="text-base font-semibold">
            Phone: <a href={`tel:${COMPANY.phoneHref}`} className="text-brand">{COMPANY.phone}</a>
          </p>
          <p className="text-base font-semibold">
            Location: <span className="text-white">{COMPANY.location}</span>
          </p>
          <p className="text-sm text-white/60">Office: JVR Complex, Swarna Mahal, Opp Govt Junior College, B H Road, Tumkur — 572101</p>
        </div>
      </div>
    </section>
  );
}

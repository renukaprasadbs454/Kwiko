"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 bg-slate-50">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1fr,300px]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Talk to Kwiko, India's AI-first digital partner."
            subtitle="Drop a message and we will respond within one business day."
            align="left"
          />
          <form className="space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-brand focus:bg-white focus:outline-none transition"
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-brand focus:bg-white focus:outline-none transition"
                placeholder="you@email.com"
                required
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-brand focus:bg-white focus:outline-none transition resize-none"
                placeholder="Tell us about your idea..."
                required
              />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>

        <div className="space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm h-fit">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Reach Out</p>
          <div className="space-y-4 text-sm text-slate-600">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-0.5">Email</p>
              <a href={`mailto:${COMPANY.email}`} className="font-medium text-brand hover:underline">
                {COMPANY.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-0.5">Phone</p>
              <a href={COMPANY.phoneHref} className="font-medium text-slate-800 hover:text-brand">
                {COMPANY.phone}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-0.5">Location</p>
              <p className="font-medium text-slate-800">{COMPANY.location}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-0.5">Office</p>
              <p className="text-slate-600 text-xs leading-relaxed">
                JVR Complex, Swarna Mahal,<br />
                Opp Govt Junior College,<br />
                B H Road, Tumkur — 572101
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

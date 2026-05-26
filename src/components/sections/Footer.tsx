"use client";

import { SOCIAL_LINKS } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { DynamicIcon } from "@/components/ui/IconMap";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
        <Link href="#home" className="flex items-center gap-3">
          <div className="relative h-10 w-10">
            <Image src="/logo.png" alt="Kwiko logo" fill className="object-contain" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white">Kwiko</p>
            <p className="text-xs text-white/50">Building AI-powered digital solutions</p>
          </div>
        </Link>
        <div className="flex items-center gap-4 text-white/60">
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group rounded-full border border-white/10 p-3 transition hover:bg-white/10"
            >
              <DynamicIcon name={link.icon} className="text-white" size={18} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

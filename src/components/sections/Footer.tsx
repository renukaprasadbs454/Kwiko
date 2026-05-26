"use client";

import { SOCIAL_LINKS } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { DynamicIcon } from "@/components/ui/IconMap";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
        <Link href="#home" className="flex items-center gap-3">
          <div className="relative h-9 w-9">
            <Image src="/logo.png" alt="Kwiko logo" fill className="object-contain" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Kwiko Technologies &amp; Services Pvt. Ltd.</p>
            <p className="text-xs text-slate-400">Building AI-powered digital solutions</p>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-lg border border-slate-200 p-2.5 text-slate-500 transition hover:border-brand hover:text-brand"
            >
              <DynamicIcon name={link.icon} size={16} />
            </Link>
          ))}
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Kwiko Technologies And Services Private Limited. All rights reserved.
      </p>
    </footer>
  );
}

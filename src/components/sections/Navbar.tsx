"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3">
        <Link href="#home" className="flex items-center gap-3">
          <div className="relative h-9 w-9">
            <Image src="/logo.png" alt="Kwiko logo" fill className="object-contain" priority />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide text-slate-900">KWIKO</p>
            <p className="text-xs text-slate-500">Technologies &amp; Services</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative transition-colors hover:text-brand"
            >
              {link.label}
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-full scale-x-0 bg-brand transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-600 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <div className="h-5 w-5 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-slate-700 transition-transform duration-200 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-full bg-slate-700 transition-opacity duration-200 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-full bg-slate-700 transition-transform duration-200 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      <div className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${isOpen ? "max-h-72" : "max-h-0"}`}>
        <div className="space-y-1 border-t border-slate-100 bg-white px-6 pb-5 pt-3 text-sm font-medium text-slate-700">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-2 transition-colors hover:text-brand"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

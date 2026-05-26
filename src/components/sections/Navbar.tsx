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
      className={`sticky top-0 z-40 transition-all duration-500 ${
        isScrolled ? "backdrop-blur-3xl bg-surface/80 border-b border-white/5 shadow-glow" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#home" className="flex items-center gap-3">
          <div className="relative h-10 w-10">
            <Image src="/logo.png" alt="Kwiko logo" fill className="object-contain" priority />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Kwiko</p>
            <p className="text-xs text-white/60">Technologies & Services</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium uppercase tracking-widest text-white/70 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative transition hover:text-white group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-brand transition-all scale-x-0 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>
        <button
          className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="h-5 w-5">
            <span
              className={`block h-0.5 w-full bg-white transition ${
                isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition ${isOpen ? "opacity-0" : "my-1"}`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition ${
                isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
              }`}
            />
          </div>
        </button>
      </div>
      <div
        className={`lg:hidden transition-[max-height] duration-300 overflow-hidden ${
          isOpen ? "max-h-72" : "max-h-0"
        }`}
      >
        <div className="space-y-3 border-t border-white/5 px-6 pb-5 pt-3 text-sm tracking-[0.3em] uppercase text-white/70">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block w-full transition hover:text-white"
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

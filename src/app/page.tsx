"use client";

import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";
import { StatsSection } from "@/components/sections/StatsSection";
import { Particles } from "@/components/effects/Particles";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Particles />
      <Navbar />
      <main className="relative z-10 space-y-24">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <MissionSection />
        <ServicesSection />
        <WhyChooseSection />
        <ProjectsSection />
        <TechStackSection />
        <ContactSection />
        <Footer />
      </main>
      <WhatsAppButton />
    </div>
  );
}

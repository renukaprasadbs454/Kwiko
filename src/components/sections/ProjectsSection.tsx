"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/lib/constants";
import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/ui/IconMap";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-x-0 top-6 h-32 bg-gradient-to-b from-brand/40 to-transparent blur-3xl" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Projects" title="Modern showcase of our AI & automation work." />
        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 120 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 p-6 shadow-[0_0_40px_rgba(0,0,0,0.4)]`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 transition duration-500 group-hover:opacity-40`} />
              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between">
                  <DynamicIcon name={project.icon} size={28} className="text-brand" />
                  <span className="text-xs uppercase tracking-[0.4em] text-white/50">Live</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-sm text-white/70">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-white/70">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/20 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="h-32 w-full overflow-hidden rounded-2xl border border-white/5 bg-white/5">
                  <div className="flex h-full items-center justify-center text-sm text-white/50">
                    screenshot placeholder
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/lib/constants";
import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/ui/IconMap";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 bg-slate-50">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Projects" title="Modern showcase of our AI & automation work." />
        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/8 border border-brand/10">
                    <DynamicIcon name={project.icon} size={22} className="text-brand" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Live</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-0.5 text-xs font-medium text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="h-28 w-full overflow-hidden rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 to-indigo-50 flex items-center justify-center text-xs text-slate-400">
                  Screenshot placeholder
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

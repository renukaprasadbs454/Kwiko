"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import { useCounter } from "@/hooks/useCounter";

export function StatsSection() {
  const counterHooks = [
    useCounter(STATS[0].value),
    useCounter(STATS[1].value),
    useCounter(STATS[2].value),
    useCounter(STATS[3].value),
  ];

  return (
    <section className="border-y border-slate-100 bg-slate-50 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 sm:grid-cols-4">
        {STATS.map((stat, index) => (
          <motion.div
            key={stat.label}
            ref={counterHooks[index].ref}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
          >
            <p className="text-3xl font-extrabold text-brand">
              {counterHooks[index].count}
              <span className="text-lg text-slate-400">{stat.suffix}</span>
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-500">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

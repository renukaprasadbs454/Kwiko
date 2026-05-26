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
    <section className="py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 sm:grid-cols-4">
        {STATS.map((stat, index) => (
          <motion.div
            key={stat.label}
            ref={counterHooks[index].ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-2xl border border-white/10 p-6 text-center"
          >
            <p className="text-3xl font-bold text-white">
              {counterHooks[index].count}
              <span className="text-lg text-white/60">{stat.suffix}</span>
            </p>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import Counter from "@/components/ui/Counter";

export default function StatsSection() {
  return (
    <section className="relative py-24 px-6 border-y border-white/5">
      <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Counter to={s.value} suffix={s.suffix} />
            <p className="mt-3 font-utility text-xs md:text-sm tracking-[0.2em] uppercase text-white/50">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

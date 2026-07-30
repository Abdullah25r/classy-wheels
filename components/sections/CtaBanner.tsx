"use client";

import { motion } from "framer-motion";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function CtaBanner() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gold-radial opacity-70" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-3xl text-center glass rounded-3xl px-8 py-16"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-ivory">
          Ready to own your <span className="text-gold-gradient">dream car?</span>
        </h2>
        <p className="text-white/55 mt-5 max-w-lg mx-auto">
          Browse our certified collection or speak with a Classy Wheels specialist today.
        </p>
        <div className="mt-9 flex justify-center">
          <AnimatedButton href="/inventory">Browse Collection</AnimatedButton>
        </div>
      </motion.div>
    </section>
  );
}

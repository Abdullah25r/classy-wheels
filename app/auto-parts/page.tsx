"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings2, PanelsTopLeft, Droplets, Zap, Sparkle, CheckCircle2 } from "lucide-react";
import ComingSoonCard from "@/components/cards/ComingSoonCard";
import AnimatedButton from "@/components/ui/AnimatedButton";

const categories = [
  { icon: Settings2, title: "Engine Parts" },
  { icon: PanelsTopLeft, title: "Body Parts" },
  { icon: Droplets, title: "Oil & Fluids" },
  { icon: Zap, title: "Performance Parts" },
  { icon: Sparkle, title: "Accessories" },
];

export default function AutoPartsPage() {
  const [notified, setNotified] = useState(false);

  return (
    <div className="pt-32 pb-28 px-6">
      <div className="mx-auto max-w-3xl text-center mb-16">
        <span className="font-utility text-xs tracking-[0.35em] uppercase text-gold mb-4 block">Coming Soon</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
          Genuine Auto Parts, <span className="text-gold-gradient">Curated for Luxury</span>
        </h1>
        <p className="text-white/55 mt-6 max-w-xl mx-auto leading-relaxed">
          A dedicated parts counter is on its way &mdash; genuine and performance components for
          every marque in our collection, verified for fit and quality.
        </p>
      </div>

      <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((c, i) => (
          <ComingSoonCard key={c.title} icon={c.icon} title={c.title} delay={i * 0.08} />
        ))}
      </div>

      <div className="text-center mt-16">
        <AnimatePresence mode="wait">
          {!notified ? (
            <motion.div key="btn" exit={{ opacity: 0, scale: 0.9 }}>
              <AnimatedButton onClick={() => setNotified(true)} icon={false}>
                Notify Me at Launch
              </AnimatedButton>
            </motion.div>
          ) : (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 text-gold font-utility text-sm"
            >
              <CheckCircle2 size={18} /> You&apos;re on the list.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

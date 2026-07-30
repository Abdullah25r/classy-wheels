"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, Gauge, Sparkles, Cog, CheckCircle2 } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedButton from "@/components/ui/AnimatedButton";
import Countdown from "@/components/sections/Countdown";

const services = [
  { icon: Wrench, title: "Engine Repair" },
  { icon: Gauge, title: "Diagnostics" },
  { icon: Sparkles, title: "Detailing" },
  { icon: Cog, title: "Performance Upgrades" },
];

export default function WorkshopPage() {
  const [notified, setNotified] = useState(false);

  return (
    <div className="relative pt-32 pb-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gold-radial opacity-60 pointer-events-none" />
      <motion.div
        className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -10, rotate: -8 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.7 }}
          className="h-16 w-16 rounded-2xl bg-gold-gradient flex items-center justify-center mx-auto mb-8 shadow-gold-lg"
        >
          <Wrench className="text-matte" size={28} />
        </motion.div>

        <span className="font-utility text-xs tracking-[0.35em] uppercase text-gold mb-4 block">Coming Soon</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
          Premium Auto Workshop <br />
          <span className="text-gold-gradient">Launching Soon</span>
        </h1>
        <p className="text-white/55 mt-6 max-w-xl mx-auto leading-relaxed">
          We&apos;re building a world-class automotive service center offering premium
          maintenance, diagnostics, detailing, engine repair, and performance upgrades.
        </p>

        <div className="mt-12">
          <Countdown />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14">
          {services.map((s) => (
            <GlassCard key={s.title} hover={false} className="text-center py-6">
              <s.icon className="text-gold mx-auto mb-3" size={24} />
              <p className="text-xs font-utility tracking-wide">{s.title}</p>
            </GlassCard>
          ))}
        </div>

        <div className="mt-14">
          <AnimatePresence mode="wait">
            {!notified ? (
              <motion.div key="btn" exit={{ opacity: 0, scale: 0.9 }}>
                <AnimatedButton onClick={() => setNotified(true)} icon={false}>
                  Notify Me
                </AnimatedButton>
              </motion.div>
            ) : (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 text-gold font-utility text-sm"
              >
                <CheckCircle2 size={18} /> We&apos;ll let you know at launch.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

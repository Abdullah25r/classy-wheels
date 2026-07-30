"use client";

import { motion } from "framer-motion";
import { Search, ClipboardCheck, FileCheck, Truck } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import CtaBanner from "@/components/sections/CtaBanner";

const steps = [
  {
    icon: Search,
    title: "Find Your Car",
    text: "Browse our certified inventory or tell us exactly what you're looking for, and we'll source it.",
  },
  {
    icon: ClipboardCheck,
    title: "Inspection",
    text: "Every vehicle passes a 200-point mechanical and cosmetic inspection before it's offered to you.",
  },
  {
    icon: FileCheck,
    title: "Documentation",
    text: "Our team handles ownership transfer, history verification, and contracts \u2014 fully transparent.",
  },
  {
    icon: Truck,
    title: "Delivery",
    text: "Collect your car from our showroom or have it delivered directly, detailed and ready to drive.",
  },
];

export default function BuyPage() {
  return (
    <div className="pt-32">
      <section className="px-6 pb-8 text-center">
        <div className="mx-auto max-w-2xl">
          <span className="font-utility text-xs tracking-[0.35em] uppercase text-gold mb-4 block">How It Works</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Buying Your Car, <span className="text-gold-gradient">the Classy Wheels Way</span>
          </h1>
          <p className="text-white/55 mt-6 leading-relaxed">
            From the first search to the final handover, every step is designed to remove
            uncertainty from a purchase this important.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <GlassCard key={s.title} delay={i * 0.1} className="relative">
              <span className="absolute -top-4 -left-2 font-display text-6xl font-bold text-white/5">
                0{i + 1}
              </span>
              <motion.div
                whileHover={{ rotate: 8 }}
                className="h-12 w-12 rounded-xl bg-gold-gradient flex items-center justify-center mb-5 relative z-10"
              >
                <s.icon size={22} className="text-matte" />
              </motion.div>
              <h3 className="font-display text-lg font-semibold mb-2 relative z-10">{s.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed relative z-10">{s.text}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

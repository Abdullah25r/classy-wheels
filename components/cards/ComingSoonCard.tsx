"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function ComingSoonCard({
  icon: Icon,
  title,
  delay = 0,
}: {
  icon: LucideIcon;
  title: string;
  delay?: number;
}) {
  return (
    <GlassCard delay={delay}>
      <motion.div
        animate={{ boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 24px rgba(212,175,55,0.35)", "0 0 0px rgba(212,175,55,0)"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
        className="h-14 w-14 rounded-2xl bg-charcoal border border-gold/25 flex items-center justify-center mb-5"
      >
        <Icon size={24} className="text-gold" />
      </motion.div>
      <h3 className="font-display text-lg font-semibold mb-1">{title}</h3>
      <span className="text-xs font-utility tracking-[0.2em] uppercase text-gold/60">Coming Soon</span>
    </GlassCard>
  );
}

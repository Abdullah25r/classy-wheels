"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <GlassCard delay={delay}>
      <motion.div
        whileHover={{ rotate: 8 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="h-12 w-12 rounded-xl bg-gold-gradient flex items-center justify-center mb-5"
      >
        <Icon size={22} className="text-matte" />
      </motion.div>
      <h3 className="font-display text-lg font-semibold text-ivory mb-2">{title}</h3>
      <p className="text-sm text-white/55 leading-relaxed">{description}</p>
    </GlassCard>
  );
}

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function LuxuryDivider({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={cn("pinstripe w-full origin-center", className)}
    />
  );
}

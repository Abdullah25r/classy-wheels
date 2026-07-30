"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function GlassCard({
  children,
  className,
  hover = true,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -6, borderColor: "rgba(212,175,55,0.4)" } : undefined}
      className={cn(
        "glass rounded-2xl p-6 transition-shadow duration-500 hover:shadow-gold",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

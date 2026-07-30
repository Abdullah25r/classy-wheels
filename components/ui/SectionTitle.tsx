"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "max-w-2xl mb-14",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      {eyebrow && (
        <span className="inline-block font-utility text-xs tracking-[0.35em] uppercase text-gold mb-4">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display font-semibold leading-[1.1] tracking-tight text-3xl md:text-5xl",
          light ? "text-ivory" : "text-ivory"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "h-[2px] w-16 bg-gold-gradient mt-6 mb-5",
          align === "center" ? "mx-auto" : ""
        )}
      />
      {description && (
        <p className="text-white/55 text-base md:text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}

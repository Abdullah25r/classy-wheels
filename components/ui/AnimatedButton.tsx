"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit";
  icon?: boolean;
};

export default function AnimatedButton({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  type = "button",
  icon = true,
}: Props) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const addRipple = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [...r, { x: e.clientX - rect.left, y: e.clientY - rect.top, id }]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 650);
  };

  const base =
    "relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-utility text-sm tracking-wide font-medium transition-colors duration-300";

  const variants = {
    primary: "bg-gold-gradient text-matte shadow-gold hover:shadow-gold-lg",
    outline: "border border-gold/40 text-ivory hover:border-gold hover:bg-gold/5",
    ghost: "text-ivory/80 hover:text-gold",
  };

  const content = (
    <motion.span
      onMouseDown={addRipple}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={cn(base, variants[variant], className)}
    >
      {children}
      {icon && <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />}
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          initial={{ opacity: 0.35, scale: 0 }}
          animate={{ opacity: 0, scale: 4 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          style={{ left: r.x, top: r.y }}
          className="pointer-events-none absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60"
        />
      ))}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="group inline-block" onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="group">
      {content}
    </button>
  );
}

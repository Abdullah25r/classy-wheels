"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const particles = Array.from({ length: 22 });

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury car showroom at night"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-matte/70 via-matte/60 to-matte" />
      <div className="absolute inset-0 bg-gold-radial" />

      <div className="absolute inset-0 overflow-hidden">
        {particles.map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gold/40"
            style={{
              width: 2 + (i % 3),
              height: 2 + (i % 3),
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
          />
        ))}
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-utility text-xs md:text-sm tracking-[0.4em] uppercase text-gold mb-6"
        >
          Classy Wheels &mdash; Est. 2015
        </motion.span>

        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-8xl leading-[0.98] tracking-tight">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="block text-ivory"
          >
            Drive Luxury.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="block text-gold-gradient"
          >
            Own Excellence.
          </motion.span>
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="pinstripe w-24 mt-8 mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="max-w-xl text-white/65 text-base md:text-lg leading-relaxed"
        >
          Classy Wheels specializes in buying and selling premium, certified vehicles &mdash;
          curated for those who expect more from every mile.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <AnimatedButton href="/inventory" variant="primary">Browse Collection</AnimatedButton>
          <AnimatedButton href="/sell" variant="outline" icon={false}>Sell Your Car</AnimatedButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-5 rounded-full border border-gold/40 flex justify-center pt-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}

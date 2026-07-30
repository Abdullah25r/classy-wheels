"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-28 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle eyebrow="Client Stories" title="What Our Clients Say" />

        <div className="relative glass rounded-3xl p-10 md:p-14 min-h-[260px] flex flex-col items-center justify-center">
          <Quote className="text-gold/40 mb-4" size={36} />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-lg md:text-xl text-white/80 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-6 font-display font-semibold text-gold">{t.name}</p>
              <p className="text-xs text-white/45 font-utility tracking-wide uppercase mt-1">{t.role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="h-10 w-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-matte transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="h-10 w-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-matte transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

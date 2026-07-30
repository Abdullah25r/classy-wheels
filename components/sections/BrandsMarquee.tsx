"use client";

import { brands } from "@/lib/data";

export default function BrandsMarquee() {
  const loop = [...brands, ...brands];

  return (
    <section className="relative py-14 border-y border-white/5 overflow-hidden bg-charcoal/40">
      <div className="flex w-max animate-marquee">
        {loop.map((b, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-10 shrink-0 opacity-60 hover:opacity-100 transition-opacity"
          >
            <span className="font-display text-2xl font-bold text-gold/70">{b.logo}</span>
            <span className="font-utility text-sm tracking-[0.2em] uppercase text-white/50 whitespace-nowrap">
              {b.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

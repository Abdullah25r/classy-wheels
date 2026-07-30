"use client";

import { motion } from "framer-motion";

const events = [
  { year: "2015", title: "Founded in Multan", text: "Classy Wheels opens its first showroom with a collection of twelve certified vehicles." },
  { year: "2018", title: "Certified Inspection Program", text: "Launched our 200-point inspection standard, now the backbone of every listing." },
  { year: "2021", title: "Exotic & Performance Desk", text: "Introduced a dedicated desk for exotic and performance marques including Lamborghini and Porsche." },
  { year: "2024", title: "200+ Premium Clients", text: "Crossed 500 vehicles sold with a client base spanning collectors, executives, and enthusiasts." },
];

export default function Timeline() {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent md:-translate-x-1/2" />
      <div className="space-y-14">
        {events.map((e, i) => (
          <motion.div
            key={e.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className={`relative pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-14 md:text-right md:ml-0" : "md:pl-14 md:ml-auto"}`}
          >
            <span className="absolute left-2.5 md:left-auto md:right-[-6px] top-1 h-3 w-3 rounded-full bg-gold shadow-gold" style={i % 2 !== 0 ? { left: "-6px" } : undefined} />
            <span className="font-utility text-xs tracking-[0.3em] uppercase text-gold">{e.year}</span>
            <h3 className="font-display text-xl font-semibold text-ivory mt-1">{e.title}</h3>
            <p className="text-sm text-white/55 mt-2 leading-relaxed">{e.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cars, brands } from "@/lib/data";
import CarCard from "@/components/cards/CarCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

const filterOptions = ["All", "BMW", "Mercedes-Benz", "Audi", "Lexus", "Porsche", "Lamborghini"];

export default function InventoryPage() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? cars : cars.filter((c) => c.brand === active)),
    [active]
  );

  return (
    <div className="pt-32 px-6 pb-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Full Inventory"
          title="The Collection"
          description="Every vehicle certified, inspected, and ready for its next owner."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {filterOptions.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-utility tracking-wide border transition-all duration-300",
                active === f
                  ? "bg-gold-gradient text-matte border-transparent shadow-gold"
                  : "border-white/15 text-white/60 hover:border-gold/40 hover:text-gold"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((car, i) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-white/40 py-20">No vehicles match this filter yet.</p>
        )}
      </div>
    </div>
  );
}

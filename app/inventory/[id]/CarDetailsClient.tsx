"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Gauge, Fuel, Cog, Calendar, Check, Phone } from "lucide-react";
import { Car } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import AnimatedButton from "@/components/ui/AnimatedButton";
import GlassCard from "@/components/ui/GlassCard";

export default function CarDetailsClient({ car }: { car: Car }) {
  const [activeImage, setActiveImage] = useState(car.image);

  const specs = [
    { icon: Calendar, label: "Year", value: car.year },
    { icon: Gauge, label: "Mileage", value: car.mileage },
    { icon: Cog, label: "Transmission", value: car.transmission },
    { icon: Fuel, label: "Fuel Type", value: car.fuel },
  ];

  return (
    <div className="pt-28">
      <section className="relative h-[55vh] min-h-[380px] w-full overflow-hidden">
        <motion.div
          key={activeImage}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image src={activeImage} alt={`${car.brand} ${car.model}`} fill className="object-cover" priority />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-matte via-matte/40 to-matte/10" />
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="mx-auto max-w-7xl">
            <span className="font-utility text-xs tracking-[0.3em] uppercase text-gold">{car.brand}</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-2">{car.model}</h1>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="grid grid-cols-3 gap-4">
              {car.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className="relative h-24 md:h-32 rounded-xl overflow-hidden border border-gold/15 group"
                >
                  <Image src={img} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </button>
              ))}
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-white/60 leading-relaxed">{car.description}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold mb-6">Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {specs.map((s) => (
                  <GlassCard key={s.label} hover={false} className="text-center">
                    <s.icon className="text-gold mx-auto mb-2" size={22} />
                    <p className="text-xs text-white/40 font-utility uppercase tracking-wide">{s.label}</p>
                    <p className="font-display font-semibold mt-1">{s.value}</p>
                  </GlassCard>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold mb-6">Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {car.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm text-white/65">
                    <Check size={16} className="text-gold shrink-0" /> {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-28 h-fit">
            <GlassCard hover={false} className="p-8">
              <p className="text-xs text-white/40 font-utility uppercase tracking-wide">Price</p>
              <p className="font-display text-4xl font-bold text-gold-gradient mt-1">{formatPrice(car.price)}</p>
              <div className="h-px bg-white/10 my-6" />
              <p className="text-sm text-white/55 mb-6">
                Speak with a Classy Wheels specialist to schedule a private viewing or arrange a
                test drive.
              </p>
              <AnimatedButton href="/contact" className="w-full justify-center" icon={false}>
                <span className="flex items-center gap-2"><Phone size={16} /> Inquire Now</span>
              </AnimatedButton>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}

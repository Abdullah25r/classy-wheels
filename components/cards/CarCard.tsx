"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Gauge, Fuel, Cog, Calendar } from "lucide-react";
import { Car } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function CarCard({ car, delay = 0 }: { car: Car; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group glass rounded-2xl overflow-hidden hover:shadow-gold-lg transition-shadow duration-500"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-matte/80 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 rounded-full bg-matte/70 backdrop-blur px-3 py-1 text-xs font-utility tracking-wide text-gold border border-gold/25">
          {car.brand}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-ivory">{car.model}</h3>
        <p className="font-utility text-2xl text-gold-gradient font-bold mt-2">{formatPrice(car.price)}</p>

        <div className="grid grid-cols-2 gap-y-2 gap-x-3 mt-5 text-xs text-white/55 font-utility">
          <span className="flex items-center gap-1.5"><Calendar size={13} className="text-gold" /> {car.year}</span>
          <span className="flex items-center gap-1.5"><Gauge size={13} className="text-gold" /> {car.mileage}</span>
          <span className="flex items-center gap-1.5"><Cog size={13} className="text-gold" /> {car.transmission}</span>
          <span className="flex items-center gap-1.5"><Fuel size={13} className="text-gold" /> {car.fuel}</span>
        </div>

        <Link
          href={`/inventory/${car.id}`}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-gold/30 py-2.5 text-sm font-utility text-gold hover:bg-gold hover:text-matte transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}

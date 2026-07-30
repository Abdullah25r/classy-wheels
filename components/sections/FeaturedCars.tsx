"use client";

import { cars } from "@/lib/data";
import CarCard from "@/components/cards/CarCard";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function FeaturedCars() {
  const featured = cars.slice(0, 6);
  return (
    <section className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="The Collection"
          title="Featured Vehicles"
          description="A rotating selection of our most sought-after certified vehicles, refreshed weekly."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((car, i) => (
            <CarCard car={car} key={car.id} delay={i * 0.08} />
          ))}
        </div>
        <div className="flex justify-center mt-14">
          <AnimatedButton href="/inventory" variant="outline">View Full Inventory</AnimatedButton>
        </div>
      </div>
    </section>
  );
}

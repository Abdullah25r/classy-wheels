"use client";

import { ShieldCheck, Gem, ClipboardCheck, Lock, Users, TrendingUp } from "lucide-react";
import { whyChooseUs } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureCard from "@/components/cards/FeatureCard";

const icons = [ShieldCheck, Gem, ClipboardCheck, Lock, Users, TrendingUp];

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 px-6 bg-charcoal/30 grain">
      <div className="mx-auto max-w-7xl relative">
        <SectionTitle
          eyebrow="The Difference"
          title="Why Choose Classy Wheels"
          description="Every vehicle, every transaction, held to a standard the rest of the market doesn't bother with."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => (
            <FeatureCard key={item.title} icon={icons[i]} title={item.title} description={item.description} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

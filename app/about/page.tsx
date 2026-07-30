import Image from "next/image";
import { Target, Eye, Heart } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import Timeline from "@/components/Timeline";
import LuxuryDivider from "@/components/ui/LuxuryDivider";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata = { title: "About | Classy Wheels" };

export default function AboutPage() {
  return (
    <div className="pt-32">
      <section className="px-6">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-14 items-center pb-24">
          <div>
            <span className="font-utility text-xs tracking-[0.35em] uppercase text-gold mb-4 block">Our Story</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              A decade of curating <span className="text-gold-gradient">automotive excellence.</span>
            </h1>
            <p className="text-white/55 mt-6 leading-relaxed">
              Classy Wheels was founded on a simple premise: buying or selling a premium vehicle
              should feel as considered as the car itself. From a twelve-car showroom in 2015, we
              have grown into a trusted name for collectors, executives, and enthusiasts across the
              region &mdash; without ever compromising on inspection standards or transparency.
            </p>
            <p className="text-white/55 mt-4 leading-relaxed">
              Today our team of certified technicians, valuation specialists, and client advisors
              work as one unit, so every handover feels less like a transaction and more like a
              welcome into the Classy Wheels circle.
            </p>
          </div>
          <div className="relative h-[420px] rounded-3xl overflow-hidden border border-gold/15">
            <Image
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80"
              alt="Classy Wheels showroom"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matte/60 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-charcoal/30 grain">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="What Drives Us" title="Mission, Vision & Values" />
          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard>
              <Target className="text-gold mb-4" size={28} />
              <h3 className="font-display text-lg font-semibold mb-2">Mission</h3>
              <p className="text-sm text-white/55 leading-relaxed">
                To make premium vehicle ownership transparent, certified, and effortless &mdash; for
                buyers and sellers alike.
              </p>
            </GlassCard>
            <GlassCard delay={0.08}>
              <Eye className="text-gold mb-4" size={28} />
              <h3 className="font-display text-lg font-semibold mb-2">Vision</h3>
              <p className="text-sm text-white/55 leading-relaxed">
                To be the region&apos;s most trusted name in luxury automotive sales, service, and
                parts &mdash; under one roof.
              </p>
            </GlassCard>
            <GlassCard delay={0.16}>
              <Heart className="text-gold mb-4" size={28} />
              <h3 className="font-display text-lg font-semibold mb-2">Values</h3>
              <p className="text-sm text-white/55 leading-relaxed">
                Integrity in every inspection, respect for every client, and an obsession with
                getting the details right.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-xs px-6">
        <LuxuryDivider />
      </div>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Milestones" title="Our Journey" />
          <Timeline />
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

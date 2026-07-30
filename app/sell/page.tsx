"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Car as CarIcon } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedButton from "@/components/ui/AnimatedButton";

const brandOptions = ["BMW", "Mercedes-Benz", "Audi", "Lexus", "Porsche", "Lamborghini", "Toyota", "Other"];

export default function SellPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="pt-32 px-6 pb-28">
      <div className="mx-auto max-w-2xl text-center mb-14">
        <span className="font-utility text-xs tracking-[0.35em] uppercase text-gold mb-4 block">Sell With Us</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold">
          Sell Your Car, <span className="text-gold-gradient">the Classy Way</span>
        </h1>
        <p className="text-white/55 mt-6 leading-relaxed">
          Tell us about your vehicle and a specialist will reach out with a fair, no-obligation
          valuation within 24 hours.
        </p>
      </div>

      <div className="mx-auto max-w-2xl">
        <GlassCard hover={false} className="p-8 md:p-10 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name" id="name" placeholder="Your name" required />
                  <Field label="Phone Number" id="phone" type="tel" placeholder="+92 3XX XXXXXXX" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-utility tracking-wide uppercase text-white/50 mb-2">
                      Car Brand
                    </label>
                    <select
                      required
                      className="w-full bg-charcoal/60 border border-white/10 focus:border-gold rounded-xl px-4 py-3 text-sm text-ivory outline-none transition-colors"
                    >
                      <option value="">Select brand</option>
                      {brandOptions.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                  <Field label="Model" id="model" placeholder="e.g. 7 Series" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Year" id="year" type="number" placeholder="2021" required />
                  <Field label="Mileage (km)" id="mileage" type="number" placeholder="35000" required />
                </div>
                <Field label="Expected Price (USD)" id="price" type="number" placeholder="65000" required />

                <AnimatedButton type="submit" icon={false} className="w-full justify-center">
                  {loading ? "Submitting..." : "Submit for Valuation"}
                </AnimatedButton>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-center py-10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
                  className="h-16 w-16 rounded-full bg-gold-gradient flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="text-matte" size={30} />
                </motion.div>
                <h3 className="font-display text-2xl font-semibold mb-3">Request Received</h3>
                <p className="text-white/55 text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you. A Classy Wheels specialist will contact you within 24 hours with a
                  valuation for your vehicle.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm text-gold hover:underline font-utility"
                >
                  Submit another car
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <CarIcon className="absolute -bottom-6 -right-6 text-gold/5" size={140} />
        </GlassCard>
      </div>
    </div>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-utility tracking-wide uppercase text-white/50 mb-2">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-charcoal/60 border border-white/10 focus:border-gold rounded-xl px-4 py-3 text-sm text-ivory placeholder:text-white/25 outline-none transition-colors"
      />
    </div>
  );
}

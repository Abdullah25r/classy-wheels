"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock, CheckCircle2 } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedButton from "@/components/ui/AnimatedButton";

const info = [
  { icon: MapPin, label: "Showroom", value: "Shalimar Road, Multan, Pakistan" },
  { icon: Phone, label: "Phone", value: "+92 300 1234567" },
  { icon: MessageCircle, label: "WhatsApp", value: "+92 300 1234567" },
  { icon: Mail, label: "Email", value: "hello@classywheels.com" },
  { icon: Clock, label: "Business Hours", value: "Mon \u2013 Sat, 10:00 AM \u2013 8:00 PM" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-28 px-6">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <span className="font-utility text-xs tracking-[0.35em] uppercase text-gold mb-4 block">Get In Touch</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold">
          Visit the <span className="text-gold-gradient">Showroom</span>
        </h1>
        <p className="text-white/55 mt-6 leading-relaxed">
          Have a question about a vehicle, or want a private viewing? Reach out and a specialist
          will respond shortly.
        </p>
      </div>

      <div className="mx-auto max-w-6xl grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {info.map((item, i) => (
            <GlassCard key={item.label} delay={i * 0.06} hover={false} className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-gold-gradient flex items-center justify-center shrink-0">
                <item.icon size={18} className="text-matte" />
              </div>
              <div>
                <p className="text-xs font-utility uppercase tracking-wide text-white/40">{item.label}</p>
                <p className="text-sm text-ivory mt-1">{item.value}</p>
              </div>
            </GlassCard>
          ))}

          <div className="relative h-48 rounded-2xl overflow-hidden border border-gold/15 glass flex items-center justify-center">
            <div className="text-center px-4">
              <MapPin className="text-gold mx-auto mb-2" size={22} />
              <p className="text-xs text-white/40 font-utility">Interactive map placeholder</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <GlassCard hover={false} className="p-8 md:p-10">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form key="form" onSubmit={handleSubmit} exit={{ opacity: 0, y: -20 }} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full Name" id="name" placeholder="Your name" required />
                    <Field label="Phone Number" id="phone" type="tel" placeholder="+92 3XX XXXXXXX" required />
                  </div>
                  <Field label="Email" id="email" type="email" placeholder="you@email.com" required />
                  <div>
                    <label className="block text-xs font-utility tracking-wide uppercase text-white/50 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us what you're looking for..."
                      className="w-full bg-charcoal/60 border border-white/10 focus:border-gold rounded-xl px-4 py-3 text-sm text-ivory placeholder:text-white/25 outline-none transition-colors resize-none"
                    />
                  </div>
                  <AnimatedButton type="submit" icon={false} className="w-full justify-center">
                    Send Inquiry
                  </AnimatedButton>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-14"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
                    className="h-16 w-16 rounded-full bg-gold-gradient flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="text-matte" size={30} />
                  </motion.div>
                  <h3 className="font-display text-2xl font-semibold mb-3">Message Sent</h3>
                  <p className="text-white/55 text-sm max-w-sm mx-auto leading-relaxed">
                    Thanks for reaching out. Our team will get back to you shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </GlassCard>
        </div>
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

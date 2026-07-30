"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { href: "/inventory", label: "Inventory" },
  { href: "/buy", label: "Buy a Car" },
  { href: "/sell", label: "Sell a Car" },
  { href: "/about", label: "About Us" },
];

const services = [
  { href: "/workshop", label: "Auto Workshop" },
  { href: "/auto-parts", label: "Auto Parts" },
  { href: "/contact", label: "Concierge Service" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-matte grain">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 relative">
        <div>
          <Link href="/" className="font-display font-bold text-xl tracking-wide">
            <span className="text-gold-gradient">CLASSY</span> <span className="text-ivory">WHEELS</span>
          </Link>
          <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
            A curated showroom for buying and selling premium and performance vehicles, backed by certified inspection.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 rounded-full border border-gold/25 flex items-center justify-center text-gold/80 hover:bg-gold hover:text-matte transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-utility text-xs tracking-[0.3em] uppercase text-gold mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/60 hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-utility text-xs tracking-[0.3em] uppercase text-gold mb-5">Services</h4>
          <ul className="space-y-3">
            {services.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/60 hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-utility text-xs tracking-[0.3em] uppercase text-gold mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2"><MapPin size={16} className="text-gold mt-0.5 shrink-0" /> Shalimar Road, Multan, Pakistan</li>
            <li className="flex items-center gap-2"><Phone size={16} className="text-gold shrink-0" /> +92 300 1234567</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-gold shrink-0" /> hello@classywheels.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <p className="text-center text-xs text-white/35 font-utility tracking-wide">
          © {new Date().getFullYear()} Classy Wheels. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

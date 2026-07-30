"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function getTimeLeft(target: number) {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [target] = useState(() => Date.now() + 1000 * 60 * 60 * 24 * 47);
  const [time, setTime] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {units.map((u, i) => (
        <motion.div
          key={u.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="glass rounded-2xl px-6 py-5 min-w-[84px] text-center"
        >
          <span className="font-display text-3xl md:text-4xl font-bold text-gold-gradient tabular-nums">
            {String(u.value).padStart(2, "0")}
          </span>
          <p className="text-[10px] mt-1 font-utility tracking-[0.25em] uppercase text-white/45">{u.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

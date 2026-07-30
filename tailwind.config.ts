import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8CD6E",
          dark: "#B8942E",
        },
        matte: "#0B0B0B",
        charcoal: "#161616",
        ivory: "#F8F8F8",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        utility: ["var(--font-jakarta)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #B8942E 0%, #D4AF37 45%, #E8CD6E 55%, #D4AF37 100%)",
        "gold-radial": "radial-gradient(circle at center, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0) 70%)",
      },
      boxShadow: {
        gold: "0 0 40px rgba(212,175,55,0.15)",
        "gold-lg": "0 20px 60px -15px rgba(212,175,55,0.25)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

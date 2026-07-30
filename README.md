# Classy Wheels — Luxury Automotive Frontend Demo

A frontend-only Next.js 15 (App Router) demo site for **Classy Wheels**, a premium car
showroom brand. No backend, no database, no auth — everything is hardcoded/mock data,
built to look and feel like a production-ready luxury automotive brand site.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (page/scroll/hover animations)
- lucide-react (icons)

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Pages

- `/` — Home (hero, brand marquee, featured cars, why-us, stats, testimonials, CTA)
- `/about` — Story, mission/vision/values, timeline
- `/inventory` — Full inventory with animated brand filtering
- `/inventory/[id]` — Car details (gallery, specs, features, sticky inquiry card)
- `/buy` — 4-step buying process
- `/sell` — Frontend-only sell form with success animation
- `/workshop` — "Launching soon" workshop page with live countdown
- `/auto-parts` — "Launching soon" auto parts page
- `/contact` — Contact info + inquiry form

## Notes

- All car/showroom photography is sourced from Unsplash as royalty-free placeholders —
  swap `lib/data.ts` image URLs for real inventory photos when available.
- The 20-car inventory, brand list, testimonials, and stats all live in `lib/data.ts` —
  edit that file to change content without touching components.
- Forms (`/sell`, `/contact`) are frontend-only: they simulate submission with a success
  state and do not call any API.
- Color tokens (`gold`, `matte`, `charcoal`, `ivory`) and fonts (Sora / Manrope / Plus
  Jakarta Sans) are defined in `tailwind.config.ts` and loaded via `next/font` in
  `app/layout.tsx`.

export type Car = {
  id: string;
  brand: string;
  model: string;
  year: number;
  mileage: string;
  transmission: string;
  fuel: string;
  price: number;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
};

const IMG = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const POOL = [
  "photo-1503376780353-7e6692767b70",
  "photo-1552519507-da3b142c6e3d",
  "photo-1617531653332-bd46c24f2068",
  "photo-1503736334956-4c8f8e92946d",
  "photo-1580273916550-e323be2ae537",
  "photo-1555215695-3004980ad54e",
  "photo-1511919884226-fd3cad34687c",
  "photo-1542362567-b07e54358753",
  "photo-1494976388531-d1058494cdd8",
  "photo-1541899481282-d53bffe3c35d",
];

export const brands = [
  { name: "Lexus", logo: "LX" },
  { name: "Toyota", logo: "TY" },
  { name: "Porsche", logo: "PR" },
  { name: "Mercedes-Benz", logo: "MB" },
  { name: "Lamborghini", logo: "LB" },
  { name: "BMW", logo: "BM" },
  { name: "Audi", logo: "AU" },
];

const models: { brand: string; model: string }[] = [
  { brand: "BMW", model: "M8 Competition" },
  { brand: "BMW", model: "7 Series 760i" },
  { brand: "BMW", model: "X7 M60i" },
  { brand: "Mercedes-Benz", model: "S-Class S580" },
  { brand: "Mercedes-Benz", model: "AMG GT 63" },
  { brand: "Mercedes-Benz", model: "G 63 AMG" },
  { brand: "Audi", model: "RS7 Sportback" },
  { brand: "Audi", model: "A8 L Quattro" },
  { brand: "Audi", model: "Q8 e-tron" },
  { brand: "Lexus", model: "LC 500" },
  { brand: "Lexus", model: "LS 500h" },
  { brand: "Lexus", model: "RX 500h" },
  { brand: "Toyota", model: "Corolla Altis" },
  { brand: "Toyota", model: "Crown Executive" },
  { brand: "Porsche", model: "911 Turbo S" },
  { brand: "Porsche", model: "Panamera Turbo" },
  { brand: "Porsche", model: "Cayenne Coupe" },
  { brand: "Lamborghini", model: "Huracan Evo" },
  { brand: "Lamborghini", model: "Urus" },
  { brand: "Lamborghini", model: "Aventador S" },
];

export const cars: Car[] = models.map((m, i) => {
  const img = POOL[i % POOL.length];
  const img2 = POOL[(i + 3) % POOL.length];
  const img3 = POOL[(i + 6) % POOL.length];
  const year = 2021 + (i % 5);
  return {
    id: `${m.brand.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${m.model
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")}`,
    brand: m.brand,
    model: m.model,
    year: year,
    mileage: `${(8 + (i % 12) * 3).toString()},${(200 + i * 37) % 900}00 km`.replace(",", ","),
    transmission: i % 4 === 0 ? "Manual" : "Automatic",
    fuel: m.model.includes("e-tron") || m.model.includes("500h") ? "Hybrid" : "Petrol",
    price: 45000 + i * 8250 + (m.brand === "Lamborghini" ? 180000 : 0) + (m.brand === "Porsche" ? 40000 : 0),
    image: IMG(img),
    gallery: [IMG(img), IMG(img2), IMG(img3)],
    description: `A meticulously inspected ${year} ${m.brand} ${m.model}, finished to showroom condition and backed by the Classy Wheels certified ownership promise.`,
    features: [
      "Full service history",
      "Certified 200-point inspection",
      "Premium leather interior",
      "Adaptive cruise control",
      "Panoramic sunroof",
      "Premium sound system",
    ],
  };
});

export const stats = [
  { label: "Cars Sold", value: 500, suffix: "+" },
  { label: "Customer Satisfaction", value: 98, suffix: "%" },
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Premium Clients", value: 200, suffix: "+" },
];

export const testimonials = [
  {
    name: "Ahsan Raza",
    role: "Entrepreneur",
    quote:
      "Classy Wheels made buying my dream car effortless. The inspection report gave me total confidence before I ever sat in the driver's seat.",
  },
  {
    name: "Sara Malik",
    role: "Architect",
    quote:
      "From the first call to delivery, everything felt premium. My Lexus arrived exactly as described, spotless and fully documented.",
  },
  {
    name: "Bilal Ahmed",
    role: "Investor",
    quote:
      "I've sold two cars through Classy Wheels now. Fair pricing, fast turnaround, and a team that actually understands luxury vehicles.",
  },
  {
    name: "Fatima Sheikh",
    role: "Physician",
    quote:
      "Their concierge handled paperwork I didn't even know existed. It felt less like a dealership and more like a private client service.",
  },
];

export const whyChooseUs = [
  {
    title: "Verified Cars",
    description: "Every vehicle's history, ownership, and documentation is verified before it reaches our collection.",
  },
  {
    title: "Luxury Collection",
    description: "A curated inventory limited to premium and performance marques, never mixed-market volume stock.",
  },
  {
    title: "Certified Inspection",
    description: "A 200-point mechanical and cosmetic inspection performed by certified technicians on every car.",
  },
  {
    title: "Secure Transactions",
    description: "Escrow-backed payments and transparent contracts protect both buyer and seller at every step.",
  },
  {
    title: "Trusted Experts",
    description: "A decade of specialization in luxury and exotic vehicles, not a generalist used-car operation.",
  },
  {
    title: "Best Market Prices",
    description: "Independent valuation benchmarking keeps every listing priced fairly against the wider market.",
  },
];
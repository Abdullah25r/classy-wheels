import { notFound } from "next/navigation";
import { cars } from "@/lib/data";
import CarDetailsClient from "./CarDetailsClient";

export function generateStaticParams() {
  return cars.map((c) => ({ id: c.id }));
}

export default async function CarDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const car = cars.find((c) => c.id === id);
  if (!car) return notFound();
  return <CarDetailsClient car={car} />;
}

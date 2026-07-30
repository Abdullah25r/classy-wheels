import Hero from "@/components/sections/Hero";
import BrandsMarquee from "@/components/sections/BrandsMarquee";
import FeaturedCars from "@/components/sections/FeaturedCars";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import StatsSection from "@/components/sections/StatsSection";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandsMarquee />
      <FeaturedCars />
      <WhyChooseUs />
      <StatsSection />
      <Testimonials />
      <CtaBanner />
    </>
  );
}

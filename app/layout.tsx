import type { Metadata } from "next";
import { Sora, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Classy Wheels | Premium Luxury Automotive",
  description:
    "Classy Wheels is a premium showroom for buying and selling luxury and performance vehicles, backed by certified inspection and concierge service.",
  keywords: ["luxury cars", "buy car", "sell car", "premium showroom", "Classy Wheels"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable} ${jakarta.variable}`}>
      <body className="font-body bg-matte text-ivory antialiased overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

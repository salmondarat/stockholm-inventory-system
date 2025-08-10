import "../styles/globals.css";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
        {children}
      </body>
    </html>
  );
}

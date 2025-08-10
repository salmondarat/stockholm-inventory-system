import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      {/* Footer (optional) */}
      <footer className="bg-blue-900 text-white text-center py-6 text-sm">
        &copy; {new Date().getFullYear()} Stockholm IMS. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

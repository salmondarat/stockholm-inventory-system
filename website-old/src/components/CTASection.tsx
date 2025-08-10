import React from "react";

const CTASection: React.FC = () => (
  <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">
      Ready to simplify your inventory?
    </h2>
    <p className="mb-6 text-lg">
      Start using Stockholm IMS for free and take control of your assets.
    </p>
    <a
      href="/login"
      className="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold shadow inline-block hover:bg-blue-100 transition"
    >
      Get Started Now
    </a>
  </section>
);

export default CTASection;

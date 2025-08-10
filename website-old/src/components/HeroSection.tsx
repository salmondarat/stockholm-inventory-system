import React from "react";

const HeroSection: React.FC = () => (
  <section className="bg-gradient-to-b from-blue-100 to-white py-16">
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Simple, Powerful Inventory Management
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Stockholm IMS helps you track, organize, and manage your inventory —
          anywhere, anytime, from any device.
        </p>
        <a
          href="/login"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold shadow transition"
        >
          Get Started Free
        </a>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
          alt="Inventory illustration"
          className="rounded-2xl shadow-lg max-w-xs md:max-w-sm"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;

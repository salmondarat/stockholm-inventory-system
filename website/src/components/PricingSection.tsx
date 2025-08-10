import React from "react";

const tiers = [
  {
    name: "Free",
    price: "Rp0",
    features: ["Up to 500 items", "Basic reports", "Email support"],
  },
  {
    name: "Pro",
    price: "Rp99.000 / month",
    features: [
      "Unlimited items",
      "Priority support",
      "Advanced reports",
      "Integrations",
      "Custom branding",
    ],
  },
];

const PricingSection: React.FC = () => (
  <section className="py-16 bg-blue-50">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        Pricing
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="bg-white rounded-xl shadow-md p-8 w-full md:w-1/2 flex flex-col items-center"
          >
            <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
            <div className="text-3xl font-bold text-blue-700 mb-4">
              {tier.price}
            </div>
            <ul className="mb-6 space-y-2 text-gray-700">
              {tier.features.map((feat, i) => (
                <li key={i}>• {feat}</li>
              ))}
            </ul>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold transition">
              {tier.name === "Free" ? "Start Free" : "Choose Pro"}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
